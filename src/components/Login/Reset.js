import { async } from "@firebase/util";
import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Reset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email);
    toast.success("Send your Email verification");
  };
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100  mx-2 p-[30px] lg:w-96 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="email" className="text-xl font-bold mb-4 ">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Please Enter the valid Email",
                },
              })}
              id="email"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="email" className="text-red-400 text-xs">
              {(errors.email?.type === "required" && errors.email?.message) ||
                (errors.email?.type === "pattern" && errors.email?.message)}
            </label>
          </div>
          <p className="text-red-5000">{error?.message}</p>
          <button
            type="submit"
            disabled={sending ? true : false}
            className="uppercase text-base-100 mb-[15px] bg-secondary w-full rounded-lg p-[15px]"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset;
