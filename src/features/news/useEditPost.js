import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { editPost as editPostAPI } from "../../services/apiNews";

export function useEditPost() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: editPost, isLoading: isEditing } = useMutation({
    mutationFn: ({ updatedPostData, id }) => editPostAPI(updatedPostData, id),
    onSuccess: ({ _id }) => {
      toast.success("Post successfully edited");
      queryClient.invalidateQueries({ queryKey: ["news"] });
      navigate(`/newsdetails/${_id}`);
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { isEditing, editPost };
}
