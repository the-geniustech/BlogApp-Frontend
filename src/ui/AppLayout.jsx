import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import { useUser } from "../features/authentication/useUser";
// import Spinner from "./Spinner";
// import UserAvatar from "../features/authentication/UserAvatar";
// import AuthHeaderMenu from "./AuthHeaderMenu";
// import { useSelector } from "react-redux";

function AppLayout() {
  // const { currentUser } = useSelector((state) => state.auth);
  // if (isLoadingcurrentUser)
  //   return (
  //     <div className="flex justify-center items-center bg-gray-50 h-screen">
  //       <Spinner />
  //     </div>
  //   );

  return (
    <div className="">
      {/* {!currentUser ? ( */}
      <Navbar />
      {/* ) : ( */}
      {/* <Navbar>

        </Navbar>
      )} */}

      <Outlet />
    </div>
  );
}

export default AppLayout;
