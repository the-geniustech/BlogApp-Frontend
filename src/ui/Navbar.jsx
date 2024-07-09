import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import UserAvatar from "../features/authentication/UserAvatar";
import AuthHeaderMenu from "./AuthHeaderMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuth, currentUser } = useSelector((state) => state.auth);

  return (
    <div className="top-0 left-0 z-50 fixed flex justify-between items-center bg-white shadow-lg backdrop-blur-2xl pr-5 pl-6 w-full h-16">
      <div className="flex justify-between items-center mx-auto container">
        <div className="flex items-center -mx-4 lg:-mx-2">
          <button
            onClick={() => setOpen(!open)}
            className={` ${
              open && "navbarTogglerActive"
            }    rounded-lg px-3 bg-white  ring-primary focus:ring-2 lg:hidden`}
          >
            <span className="block relative bg-primary-dark my-[6px] w-6 h-[2px] [30px]"></span>
            <span className="block relative bg-primary-dark my-[6px] w-6 h-[2px] [30px]"></span>
            <span className="block relative bg-primary-dark my-[6px] w-6 h-[2px] [30px]"></span>
          </button>
          <Link to="/" className="block px-2 py-5">
            <span className="flex flex-col w-full font-black company__logo-text">
              <span className="-mb-2">ATBStudents&lsquo;</span>
              <span className="self-end">Tech-Talk</span>
            </span>
          </Link>
        </div>

        <nav
          className={`absolute left-4 top-full z-50 w-full max-w-[250px] rounded-b-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
            !open && "hidden"
          } `}
        >
          <ul className="block lg:flex gap-3">
            <ListItem NavLink="/" onClick={() => setOpen(!open)}>
              Home
            </ListItem>
            {isAuth && <ListItem NavLink="dashboard">Dashboard</ListItem>}
            {open && (
              <>
                {!isAuth && (
                  <ListItem
                    mobileOnly={true}
                    NavLink="/login"
                    onClick={() => setOpen(!open)}
                  >
                    Login
                  </ListItem>
                )}
                {isAuth && (
                  <ListItem
                    mobileOnly={true}
                    NavLink="/createpost"
                    onClick={() => setOpen(!open)}
                  >
                    Create Post
                  </ListItem>
                )}
              </>
            )}
          </ul>
        </nav>

        <MainNavbarMenu isAuth={isAuth} open={open} setOpen={setOpen}>
          <>
            <Link
              to="createpost"
              className="sm:block hidden hover:bg-opacity-90 p-2 rounded-lg font-medium text-base text-primary cursor-pointer ring-2 ring-primary"
            >
              Create Post
            </Link>
            <UserAvatar user={currentUser} />
            <AuthHeaderMenu />
          </>
        </MainNavbarMenu>
      </div>
    </div>
  );
};

const MainNavbarMenu = ({ children, isAuth }) => {
  return (
    <div className="flex justify-end w-full">
      <div className="flex justify-center items-center gap-4">
        {isAuth ? (
          children
        ) : (
          <>
            <Link
              to="/login"
              className="sm:inline-block hidden hover:bg-opacity-90 p-2 rounded-lg font-medium text-base text-primary-dark cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="hover:bg-opacity-90 p-2 rounded-lg font-medium text-base text-primary cursor-pointer ring-2 ring-primary"
            >
              Create Account
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

const ListItem = ({ children, NavLink, mobileOnly, onClick }) => {
  return (
    <li onClick={onClick}>
      <Link
        to={NavLink}
        className={`${
          mobileOnly ? "sm:hidden" : "lg:inline-flex"
        } flex py-2 font-medium text-base text-primary-dark hover:text-primary underline-offset-8 underline-primary hover:underline cursor-pointer`}
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
