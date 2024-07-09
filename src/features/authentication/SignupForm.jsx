import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaInfoCircle,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import FormRowVertical from "../../ui/FormRowVertical";
import ImgInput from "../../ui/ImgInput";

function SignupForm() {
  const { signup, isSigningUp } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

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
        <div className="relative">
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
          <div className="right-0 absolute inset-y-0 flex items-center pr-3 text-gray-500">
            <FaUser className="" />
          </div>
        </div>
      </FormRowVertical>
      <FormRowVertical error={errors?.email?.message}>
        <div className="relative">
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
          <div className="right-0 absolute inset-y-0 flex items-center pr-3 text-gray-500">
            <FaEnvelope className="" />
          </div>
        </div>
      </FormRowVertical>
      <FormRowVertical>
        <ImgInput
          id="photo"
          disabled={isSigningUp}
          register={register("photo")}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.about?.message}>
        <div className="relative">
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
          <div className="right-0 absolute inset-y-0 flex items-center pr-3 text-gray-500">
            <FaInfoCircle />
          </div>
        </div>
      </FormRowVertical>
      <FormRowVertical error={errors?.password?.message}>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
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
          <div
            className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </FormRowVertical>
      <FormRowVertical error={errors?.passwordConfirm?.message}>
        <div className="relative">
          <Input
            type={showPasswordConfirm ? "text" : "password"}
            id="passwordConfirm"
            placeholder="Password Confirm"
            disabled={isSigningUp}
            register={register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
          />
          <div
            className="right-0 absolute inset-y-0 flex items-center pr-3 cursor-pointer"
            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
          >
            {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
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
