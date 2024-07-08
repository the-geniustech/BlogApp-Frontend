import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signup, isLoading: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: ({ user, token }) => {
      queryClient.setQueryData(["user"], user);
      Cookies.set("authToken", token, { expires: 90 });
      toast.success("You have successfully signup!");
      navigate("/", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR 💥", err.stack, err.message, err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { signup, isSigningUp };
}
