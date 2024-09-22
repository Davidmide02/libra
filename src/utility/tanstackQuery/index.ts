// import { callApi } from "@zayne-labs/callapi";
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

// const API_URL = "https://api.example.com/items";
// const callMainApi = callApi.create({
//   throwOnError: true,
//   resultMode: "onlySuccess",
//   baseURL: "https://libra-be-lms.onrender.com",
// });
const instance = axios.create({
  baseURL: "https://libra-be-lms.onrender.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

const fetchItem = async (enpoint: string) => {
  try {
    const response = await instance.get(enpoint);
    return response.data;
  } catch (error) {
    console.log("error cut here:", error);

    throw error;
  }
};

const addItem = async <T>(newItem: T, endpoint: string) => {
  try {
    const response = await instance.post(endpoint, newItem, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("adItem fn=>:", newItem);

    return response.data;
  } catch (error) {
    console.log("main function error for mutate:", error);
    throw error;
  }
};

// Custom hook for fetching items
export const useFetchItems = (endpoint: string) => {
  return useQuery({
    queryKey: ["items"],
    queryFn: () => fetchItem(endpoint),
    // queryFn: () => callMainApi(endpoint),
    staleTime: Infinity,
    retry: 2,
  });
};

// Custom hook for adding an item
export const useAddItem = <T>(endpoint: string) => {
  return useMutation({
    mutationFn: (data: T) => addItem<T>(data, endpoint),
    onSuccess: (data) => {
      console.log("hello success", data);
    },
    onError: (error) => {
      console.error("Error adding item:", error);
    },
  });
};
