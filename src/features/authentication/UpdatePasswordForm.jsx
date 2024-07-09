import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUpdatePassword } from "./useUpdatePassword";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updatePassword, isUpdatingPassword } = useUpdatePassword();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function onSubmit({ passwordCurrent, password, passwordConfirm }) {
    updatePassword(
      {
        passwordCurrent,
        password,
        passwordConfirm,
      },
      { onSuccess: () => reset() }
    );
  }

  return (
    <div className="px-5 w-full md:w-1/2">
      <div className="border-stroke dark-to-be-deleted:border-dark-3 bg-white dark-to-be-deleted:bg-dark-2 shadow-1 dark-to-be-deleted:shadow-box-dark p-7 sm:p-10 md:p-7 lg:p-10 border rounded-lg">
        <h3 className="mb-7 font-semibold text-2xl text-dark dark-to-be-deleted:text-white">
          Password
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="current-password"
              className="block mb-[10px] font-medium text-base text-dark dark-to-be-deleted:text-white"
            >
              Current Password
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="current-password"
                placeholder="***********"
                className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
                {...register("passwordCurrent", {
                  required: "This field is required",
                })}
              />
              <div
                className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors?.passwordCurrent?.message && (
              <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
                {errors?.passwordCurrent?.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="new-password"
              className="block mb-[10px] font-medium text-base text-dark dark-to-be-deleted:text-white"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                placeholder="Enter your new password"
                disabled={isUpdatingPassword}
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
                className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
              />
              <div
                className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors?.password?.message && (
              <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="re-new-password"
              className="block mb-[10px] font-medium text-base text-dark dark-to-be-deleted:text-white"
            >
              Re-type New Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="re-new-password"
                placeholder="Re-type your new password"
                disabled={isUpdatingPassword}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    getValues().password === value || "Passwords need to match",
                })}
                className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
              />
              <div
                className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors?.passwordConfirm?.message && (
              <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
                {errors?.passwordConfirm?.message}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center items-center bg-primary hover:bg-blue-dark rounded-md w-full h-[50px] font-medium text-base text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdatePasswordForm;
