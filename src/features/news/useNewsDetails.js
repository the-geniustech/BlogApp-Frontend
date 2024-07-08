import { useQuery } from "@tanstack/react-query";
import { getNewsDetails } from "../../services/apiNews";

export function useNewsDetails(id) {
  const {
    isLoading,
    data: newsDetails,
    error,
  } = useQuery({
    queryKey: ["newsDetails"],
    queryFn: () => getNewsDetails(id),
  });

  return { isLoading, error, newsDetails };
}
