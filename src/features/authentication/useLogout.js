import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout as logoutApi } from "../../services/apiAuth";
import { setCurrentUser, setIsAuth } from "./authSlice";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate: logout, isLoading: isLoggingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries("user");
      Cookies.remove("authToken");
      dispatch(setIsAuth(false));
      dispatch(setCurrentUser({}));
      navigate("/", { replace: true });
    },

    onError: (err) => {
      console.log("ERROR 💥", err);
      toast.error("Problem occoured while logging out");
    },
  });

  return { logout, isLoggingOut };
}
