import { HiOutlineUser } from "react-icons/hi2";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";

function AuthHeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className="flex gap-1">
      <li className="bg-white">
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li className="bg-white">
        <Logout />
      </li>
    </ul>
  );
}

export default AuthHeaderMenu;
