import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import FormRowVertical from "../../ui/FormRowVertical";
import ImgInput from "../../ui/ImgInput";

function SignupForm() {
  const { signup, isSigningUp } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ name, email, photo, about, password, passwordConfirm }) {
    signup(
      { name, email, photo, about, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          placeholder="Full Name"
          disabled={isSigningUp}
          register={register("name", {
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
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          disabled={isSigningUp}
          register={register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical>
        <ImgInput
          id="photo"
          disabled={isSigningUp}
          register={register("photo")}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.about?.message}>
        <Input
          type="text"
          id="about"
          placeholder="Bio"
          disabled={isSigningUp}
          register={register("about", {
            maxLength: {
              value: 50,
              message: "Bio should not be more than 50 characters",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          disabled={isSigningUp}
          register={register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          placeholder="Password Confirm"
          disabled={isSigningUp}
          register={register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRowVertical>
      <div className="mb-10">
        <input
          type="submit"
          value="Sign Up"
          className="border-primary bg-primary hover:bg-opacity-90 px-5 py-3 border rounded-md w-full font-medium text-base text-white transition cursor-pointer"
        />
      </div>
    </form>
  );
}

export default SignupForm;
