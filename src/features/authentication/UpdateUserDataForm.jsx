import { useEffect } from "react";

import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useForm } from "react-hook-form";
import { FaInfoCircle, FaUser } from "react-icons/fa";
import SpinnerMini from "../../ui/SpinnerMini";

function UpdateUserDataForm() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useUser();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { email, name, photo, about } = user || {};

  useEffect(() => {
    if (!isLoadingUser && !email) {
      navigate("/login");
    }
  }, [email, isLoadingUser, navigate]);

  const { updateUser, isUpdatingUser } = useUpdateUser();

  function onSubmit({ name, photo, about }) {
    updateUser(
      { name, photo, about },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  if (isLoadingUser && !user) {
    return (
      <div className="flex justify-center items-center bg-gray-50 h-screen">
        <Spinner />
      </div>
    );
  }

  // function handleCancel(e) {
  //   setName(currentFullName);
  //   setAvatar(null);
  // }

  return (
    <div className="px-5 w-full md:w-1/2">
      <div className="border-stroke dark-to-be-deleted:border-dark-3 bg-white dark-to-be-deleted:bg-dark-2 shadow-1 dark-to-be-deleted:shadow-box-dark mb-8 md:mb-0 p-7 sm:p-10 md:p-7 lg:p-10 border rounded-lg">
        <h3 className="mb-2 font-semibold text-2xl text-dark dark-to-be-deleted:text-white">
          Account Information
        </h3>
        <p className="mb-6 text-base text-body-color dark-to-be-deleted:text-dark-6">
          Edit your profile quickly
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative z-30 mb-6 rounded-full w-full max-w-[90px] h-[90px]">
            <img
              src={photo?.url}
              alt={name + " Photo"}
              className="rounded-full w-full h-full object-center object-cover"
            />
            <label
              htmlFor="profile"
              className="right-0 -bottom-2 left-0 absolute flex justify-center items-center border-stroke dark-to-be-deleted:border-dark-3 bg-white dark-to-be-deleted:bg-dark-2 mx-auto border rounded-full w-7 h-7 text-dark dark-to-be-deleted:text-white cursor-pointer"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
              >
                <path d="M13.2125 4.30939C12.95 4.04689 12.6 3.89376 12.2281 3.89376H10.6313V3.04064C10.6313 2.80001 10.5438 2.23126 9.71251 2.23126H4.24376C3.45626 2.23126 3.36876 2.80001 3.36876 3.04064V3.89376H1.77189C1.00626 3.89376 0.371887 4.52814 0.371887 5.29376V10.3688C0.371887 11.1344 1.00626 11.7688 1.77189 11.7688H12.2063C12.9719 11.7688 13.6063 11.1344 13.6063 10.3688V5.29376C13.6281 4.92189 13.475 4.57189 13.2125 4.30939ZM12.6219 10.3688C12.6219 10.5875 12.4469 10.7844 12.2063 10.7844H1.77189C1.55314 10.7844 1.35626 10.6094 1.35626 10.3688V5.29376C1.35626 5.07501 1.53126 4.87814 1.77189 4.87814H3.63126C4.02501 4.87814 4.35314 4.55001 4.35314 4.15626V3.21564H9.62501V4.15626C9.62501 4.55001 9.95314 4.87814 10.3469 4.87814H12.2281C12.3375 4.87814 12.4469 4.92189 12.5125 5.00939C12.6 5.09689 12.6219 5.18439 12.6219 5.29376V10.3688Z" />
                <path d="M6.91251 5.14062C5.77501 5.14062 4.85626 6.05938 4.85626 7.21875C4.85626 8.35625 5.75314 9.25313 6.91251 9.25313C8.05001 9.25313 8.96876 8.33438 8.96876 7.21875C8.96876 6.10313 8.02814 5.14062 6.91251 5.14062ZM6.91251 8.26875C6.30001 8.26875 5.84064 7.80938 5.84064 7.21875C5.84064 6.62813 6.32189 6.125 6.91251 6.125C7.50314 6.125 7.98439 6.62813 7.98439 7.21875C7.98439 7.80938 7.50314 8.26875 6.91251 8.26875Z" />
                <path d="M3.01876 5.53436H2.51564C2.25314 5.53436 2.01251 5.75311 2.01251 6.03749C2.01251 6.32186 2.23126 6.54061 2.51564 6.54061H3.01876C3.28126 6.54061 3.52189 6.32186 3.52189 6.03749C3.52189 5.75311 3.30314 5.53436 3.01876 5.53436Z" />
              </svg>
              <input
                type="file"
                name="profile"
                id="profile"
                {...register("photo")}
                className="sr-only"
              />
            </label>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-[10px] font-medium text-base text-dark dark-to-be-deleted:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              disabled
              placeholder={email}
              defaultValue={email}
              className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="first-name"
              className="block mb-[10px] font-medium text-base text-dark dark-to-be-deleted:text-white"
            >
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="first-name"
                defaultValue={name}
                {...register("name", {
                  required: "This field is required",
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Name should only contain alphabetic characters",
                  },
                  minLength: {
                    value: 2,
                    message: "A name must be at least 2 characters long",
                  },
                })}
                placeholder={name}
                // onChange={(e) => setName(e.target.value)}
                disabled={isUpdatingUser}
                className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
              />
              <div className="right-0 absolute inset-y-0 flex items-center pr-3 text-gray-500">
                <FaUser className="" />
              </div>
            </div>
            {errors?.name?.message && (
              <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
                {errors?.name?.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="last-name"
              className="block mb-[10px] font-medium text-base text-dark dark-to-be-deleted:text-white"
            >
              Bio
            </label>
            <div className="relative">
              <input
                type="text"
                id="last-name"
                defaultValue={about}
                {...register("about", {
                  maxLength: {
                    value: 50,
                    message: "Bio should not be more than 50 characters",
                  },
                })}
                placeholder={about || "Bio"}
                // onChange={(e) => setAbout(e.target.value)}
                className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
              />
              <div className="right-0 absolute inset-y-0 flex items-center pr-3 text-gray-500">
                <FaInfoCircle />
              </div>
            </div>
            {errors?.about?.message && (
              <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
                {errors?.about?.message}
              </p>
            )}
          </div>

          <div>
            <button className="flex justify-center items-center gap-10 bg-primary hover:bg-blue-dark rounded-md w-full h-[50px] font-medium text-base text-white">
              {isLoadingUser && <SpinnerMini />} Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserDataForm;
