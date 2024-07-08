import { useForm } from "react-hook-form";
import { useUpdatePassword } from "./useUpdatePassword";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updatePassword, isUpdatingPassword } = useUpdatePassword();

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

  // function handleReset(e) {
  //   reset();
  // }

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
            <input
              type="password"
              id="current-password"
              placeholder="***********"
              className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
              // autoComplete="current-password"
              {...register("passwordCurrent", {
                required: "This field is required",
              })}
            />
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
            <input
              type="password"
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
            <input
              type="password"
              id="re-new-password"
              placeholder="Re-type your new password"
              disabled={isUpdatingPassword}
              {...register("passwordConfirm", {
                required: "This field is required",
                validate: (value) =>
                  getValues().password === value || "Passwords need to match",
              })}
              className="border-stroke focus:border-primary dark-to-be-deleted:border-dark-3 bg-transparent px-5 border rounded-md w-full h-[46px] text-base text-dark dark-to-be-deleted:text-white outline-none"
              // autoComplete="re-new-password"
            />
            {errors?.passwordConfirm?.message && (
              <p className="bg-red-100 mt-2 p-2 rounded-md text-red-700 text-xs">
                {errors?.passwordConfirm?.message}
              </p>
            )}
          </div>
          <div>
            <button className="flex justify-center items-center bg-primary hover:bg-blue-dark rounded-md w-full h-[50px] font-medium text-base text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  /* return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          // this makes the form better for password managers
          autoComplete="current-password"
          disabled={isUpdatingUser}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdatingUser}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={handleReset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdatingUser}>Update password</Button>
      </FormRow>
    </Form>
  ); */
}

export default UpdatePasswordForm;
