import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdatingUser } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User account successfully updated");
    },
    onError: (err) => {
      console.log("ERROR 💥", err.stack, err.message, err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { updateUser, isUpdatingUser };
}
