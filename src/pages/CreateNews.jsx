import CreateNewsForm from "../features/news/CreateNewsForm";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";

function CreateNews() {
  const { isLoadingUser, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && !user) {
      navigate("/login");
    }
  }, [user, isLoadingUser, navigate]);

  if (isLoadingUser && !user) {
    return (
      <div className="flex justify-center items-center bg-gray-50 h-screen">
        <Spinner />
      </div>
    );
  }

  return <CreateNewsForm />;
}

export default CreateNews;

/*



*/
