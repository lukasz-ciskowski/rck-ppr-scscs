import { useForm } from "hooks/useForm";
import React from "react";
import { TypedForm } from "./form";

function LoginScreen() {
  const { form, register, dirty, errors, valid } = useForm<TypedForm>({
    username: "",
  });
  return (
    <div className="flex flex-1 items-center justify-center">
      <form className="w-1/3">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl"
            id="username"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
        </div>
        <input
          type="submit"
          value="Play"
          className="btn--primary rounded-lg text py-2.5 text-center w-full"
          disabled={!dirty || !valid}
        />
      </form>
    </div>
  );
}

export default LoginScreen;
