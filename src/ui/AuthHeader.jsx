// import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import AuthHeaderMenu from "./AuthHeaderMenu";

function AuthHeader() {
  return (
    <header className="flex justify-end items-center gap-6 border-gray-200 bg-gray-50 md:px-12 p-3 border-b">
      <UserAvatar />
      <AuthHeaderMenu />
    </header>
  );
}

export default AuthHeader;
