import { useQuery } from "@tanstack/react-query";
import { getNewsDetails } from "../../services/apiNews";

export function useNewsDetails(id) {
  const {
    isLoading,
    data: newsDetails,
    error,
  } = useQuery({
    queryKey: ["newsDetails", id],
    queryFn: () => getNewsDetails(id),
    keepPreviousData: false, // Ensure we don't keep the previous data
  });

  return { isLoading, error, newsDetails };
}
