import { useUser } from "../features/authentication/useUser";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

const AccountSettings = () => {
  const navigate = useNavigate();

  const { isLoadingUser, user } = useUser();

  useEffect(() => {
    if (!isLoadingUser && !user) {
      navigate("/login");
    }
  }, [user, navigate, isLoadingUser]);

  if (isLoadingUser) {
    return (
      <div className="flex justify-center items-center bg-gray-50 h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <section className="bg-white mx-auto px-4 pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="mx-auto container">
        <div className="border-stroke dark-to-be-deleted:border-dark-3 mb-10 pb-[22px] border-b">
          <h2 className="mb-2 font-semibold text-2xl text-dark dark-to-be-deleted:text-white">
            Update Your Profile
          </h2>
          <p className="text-body-color text-sm dark-to-be-deleted:text-dark-6">
            Keep your profile information up to date to ensure you receive the
            latest updates and offers.
          </p>
        </div>
        <div className="flex flex-wrap -mx-5">
          <UpdateUserDataForm />
          <UpdatePasswordForm />
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
