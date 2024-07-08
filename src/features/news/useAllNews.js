import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../../services/apiNews";

export function useAllNews() {
  const {
    isLoading,
    data: allNewsData,
    error,
  } = useQuery({
    queryKey: ["allNews"],
    queryFn: getAllNews,
  });

  return { isLoading, error, allNewsData };
}
