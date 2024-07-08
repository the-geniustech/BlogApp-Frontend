// import { useState } from "react";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useForm } from "react-hook-form";

function LoginForm() {
  // const [email, setEmail] = useState("example@test.com");
  // const [password, setPassword] = useState("test1234");
  const { login, isLogin } = useLogin();

  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => {
          reset();
          // setEmail("");
          // setPassword("");
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

/*

*/
