import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import EditPostForm from "../features/news/EditPostForm";
import { useNewsDetails } from "../features/news/useNewsDetails";

function EditPost() {
  const { isLoadingUser, user } = useUser();
  const navigate = useNavigate();

  const { id } = useParams();
  const { isLoading, newsDetails } = useNewsDetails(id);

  useEffect(() => {
    if (!isLoadingUser && !user) {
      navigate("/login");
    }
  }, [user, isLoadingUser, navigate]);

  if (isLoadingUser && isLoading) {
    return (
      <div className="flex justify-center items-center bg-gray-50 h-screen">
        <Spinner />
      </div>
    );
  }

  return !newsDetails ? (
    <div className="flex justify-center items-center bg-gray-50 h-screen">
      <Spinner />
    </div>
  ) : (
    <EditPostForm currentPostDetails={newsDetails} id={id} />
  );
}

export default EditPost;
