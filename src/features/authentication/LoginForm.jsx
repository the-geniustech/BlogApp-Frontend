import { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useForm } from "react-hook-form";
// import { FiEye, FiEyeOff } from "react-icons/fi";

function LoginForm() {
  const { login, isLogin } = useLogin();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical error={errors?.email?.message}>
        <div className="relative">
          <Input
            type="email"
            id="email"
            testValue="example@test.com"
            placeholder="Email"
            disabled={isLogin}
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
      <FormRowVertical error={errors?.password?.message}>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            testValue="test1234"
            placeholder="Password"
            disabled={isLogin}
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
      <div className="mb-10">
        <input
          disabled={isLogin}
          type="submit"
          value="Sign In"
          className="border-primary bg-primary hover:bg-opacity-90 px-5 py-3 border rounded-md w-full font-medium text-base text-white transition cursor-pointer"
        />
        {isLogin && <SpinnerMini />}
      </div>
    </form>
  );
}

export default LoginForm;

/* import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useForm } from "react-hook-form";

function LoginForm() {
  const { login, isLogin } = useLogin();

  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          testValue="example@test.com"
          placeholder="Email"
          disabled={isLogin}
          register={register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          testValue="test1234"
          placeholder="Password"
          disabled={isLogin}
          register={register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>
      <div className="mb-10">
        <input
          disabled={isLogin}
          type="submit"
          value="Sign In"
          className="border-primary bg-primary hover:bg-opacity-90 px-5 py-3 border rounded-md w-full font-medium text-base text-white transition cursor-pointer"
        />
        {isLogin && <SpinnerMini />}
      </div>
    </form>
  );
}

export default LoginForm;
 */
