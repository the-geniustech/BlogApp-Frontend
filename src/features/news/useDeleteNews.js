import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deletePost as deletePostApi } from "../../services/apiNews";
import { useNavigate } from "react-router-dom";

export function useDeletePost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: () => {
      toast.success("Post successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { isDeleting, deletePost };
}
