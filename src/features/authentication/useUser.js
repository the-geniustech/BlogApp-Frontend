import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { useDispatch } from "react-redux";
import { setCurrentUser, setIsAuth } from "./authSlice";

export function useUser() {
  const dispatch = useDispatch();
  const { data, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  useEffect(() => {
    if (data) {
      dispatch(setIsAuth(data?.status === "success"));
      dispatch(setCurrentUser(data?.user));
    }
  }, [data, dispatch]);

  return {
    user: data?.user,
    isLoadingUser,
  };
}
