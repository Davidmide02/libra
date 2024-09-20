import { callApi } from "@zayne-labs/callapi";
import { useQuery, useMutation } from "@tanstack/react-query";

const API_URL = "https://api.example.com/items";
const callMainApi = callApi.create({
  throwOnError: true,
  resultMode: "onlySuccess",
  baseURL: "localhost/",
});

// Add new data (for mutation)
const addItem = async (newItem: string) => {
  const response = await callApi(API_URL, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: newItem,
  });
  return response.data;
};

// Custom hook for fetching items
export const useFetchItems = (endpoint: string) => {
  return useQuery({
    queryKey: ["items"],
    queryFn: () => callMainApi(endpoint),
    staleTime: Infinity,
    retry: 2,
  });
};

// Custom hook for adding an item
export const useAddItem = (endpoint: string) => {
  //   const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => addItem(endpoint),
    onSuccess: () => {
      // Invalidate and refetch the 'items' query to get the updated list
      //   queryClient.invalidateQueries({ queryKey: ["items"] });
    },
    onError: (error) => {
      console.error("Error adding item:", error);
    },
  });
};
