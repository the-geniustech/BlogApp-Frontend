import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ user, token }) => {
      queryClient.setQueryData(["user"], user);
      Cookies.set("authToken", token, { expires: 90 });
      navigate("/", { replace: true });
      toast.success(`Welcome back, ${user.name}!`);
    },

    onError: (err) => {
      console.log("ERROR 💥", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLogin };
}
