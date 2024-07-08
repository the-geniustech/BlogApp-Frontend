import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createNews as createNewsAPI } from "../../services/apiNews";
import { useNavigate } from "react-router-dom";

export function useCreateNews() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createNews, isLoading: isCreating } = useMutation({
    mutationFn: createNewsAPI,
    onSuccess: () => {
      toast.success("News successfully created");
      queryClient.invalidateQueries({ queryKey: ["news"] });
      toast.success(`You have successfully published your NEWS!`);
      navigate("/", { replace: true });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createNews };
}
