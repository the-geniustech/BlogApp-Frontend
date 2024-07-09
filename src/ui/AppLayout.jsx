import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function AppLayout() {
  useUser();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;
