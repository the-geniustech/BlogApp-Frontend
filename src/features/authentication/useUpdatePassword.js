import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePassword as updatePasswordAPI } from "../../services/apiAuth";

export function useUpdatePassword() {
  const { mutate: updatePassword, isLoading: isUpdatingPassword } = useMutation(
    {
      mutationFn: updatePasswordAPI,
      onSuccess: () => {
        toast.success("Password was successfully updated");
      },
      onError: (err) => {
        console.log("ERROR 💥", err.stack, err.message, err);
        toast.error(err.response.data.message);
      },
    }
  );

  return { updatePassword, isUpdatingPassword };
}
