import React, { useEffect, useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import BtnSpinner from "../Spinner/BtnSpinner";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [token] = useToken(user || googleUser);
  // const [btnSpinner,setBtnSpinner]=useState(false)
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, location, token, navigate]);
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center min-h-screen items-center my-12">
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100  mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Email</label>
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
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input input-bordered input-secondary w-full "
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: {
                  value: 6,
                  message: "Password length must be 6 character ",
                },
              })}
              id="password"
            />
            <label htmlFor="password" className="text-red-400 text-xs">
              {(errors.password?.type === "required" &&
                errors.password?.message) ||
                (errors.password?.type === "minLength" &&
                  errors.password?.message)}
            </label>
          </div>
          <div className="reset mb-[20px]">
            <Link
              to="/reset"
              className="text-sm hover:text-secondary duration-200 ease-in-out "
            >
              Forget Password?
            </Link>
          </div>
          <p className="text-red-500">{error?.message}</p>
          <p className="text-red-500">{googleError?.message}</p>
          <button
            type="submit"
            disabled={loading || googleLoading ? true : false}
            className="uppercase text-base-100 mb-[15px] bg-secondary w-full rounded-lg p-[15px] flex items-center justify-center"
          >
            login {loading && <BtnSpinner className="ml-2" />}
          </button>
        </form>
        <p className="text- text-center mb-[16px]">
          New to Doctors Portal?
          <Link to="/signup" className="text-secondary ml-2">
            Create New Account
          </Link>
        </p>
        <div className="divider mb-[25px]">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="uppercase border w-full border-secondary text-secondary text-xl p-[15px] rounded-lg"
        >
          continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
