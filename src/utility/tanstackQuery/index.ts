// import { callApi } from "@zayne-labs/callapi";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const instance = axios.create({
  baseURL: "https://libra-be-lms.onrender.com",
  timeout: 10000,
});

// Function to set headers dynamically
const setHeaders = (options?: { contentType?: string }) => {
  const headers: Record<string, string> = {};
  try {
    const getUser = localStorage.getItem("localuser");
    const localUser = getUser ? JSON.parse(getUser) : null;

    if (localUser) {
      headers["Authorization"] = `Bearer ${localUser.token}`;
    }
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return;
  }

  if (options?.contentType) {
    headers["Content-Type"] = options.contentType;
  }
  return headers;
};

const fetchItem = async (enpoint: string) => {
  try {
    const response = await instance.get(enpoint, {
      headers: setHeaders(),
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Unknown Axios error occurred";
      console.error("Axios error:", errorMessage);
      throw errorMessage;
    } else if (error instanceof Error) {
      // Standard JavaScript error
      console.error("General error:", error.message);
      throw error.message;
    } else {
      console.error("Unknown error:", error);
      throw error;
    }
  }
};

const addItem = async <T>(
  newItem: T,
  endpoint: string,
  options?: { contentType?: string }
) => {
  try {
    const response = await instance.post(endpoint, newItem, {
      headers: setHeaders({
        contentType: options?.contentType || "application/json",
      }),
    });

    console.log("adItem fn=>:", newItem);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios-specific error handling
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Unknown Axios error occurred";
      console.error("Axios error:", errorMessage);

      throw errorMessage;
    } else if (error instanceof Error) {
      // Standard JavaScript error
      console.error("General error:", error.message);
      throw error.message;
    } else {
      console.error("Unknown error:", error);
      throw error;
    }
  }
};

// Custom hook for fetching items
export const useFetchItems = (
  endpoint: string,
  queryKey: string,
  page?: number
) => {
  return useQuery({
    queryKey: [`${queryKey}`, page],
    queryFn: () => fetchItem(endpoint),
    staleTime: Infinity,
    retry: 2,
  });
};

// Custom hook for adding an item
export const useAddItem = <T>(
  endpoint: string,
  options?: { contentType?: string }
) => {
  return useMutation({
    mutationFn: (data: T) => addItem<T>(data, endpoint, options),
    onSuccess: (data) => {
      console.log("hello success", data);
    },
    onError: (error) => {
      console.error("Error adding item:", error);
    },
  });
};
