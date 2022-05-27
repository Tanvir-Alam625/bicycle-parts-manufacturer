import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import BtnSpinner from "../Spinner/BtnSpinner";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(user);
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  const [token] = useToken(user || googleUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, location, token, navigate]);
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    const displayName = data.name;
    await updateProfile({ displayName: displayName });
  };
  return (
    <div className="flex justify-center min-h-screen items-center my-12">
      <div className="shadow-lg rounded-lg w-full text-accent  bg-base-100 mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">
          Sign Up Now
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Full Name</label>
            <input
              type="text"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              id="name"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="name" className="text-red-400 text-xs">
              {errors.name?.type === "required" && errors.name?.message}
            </label>
          </div>
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
          <div className="input-box mb-[20px]">
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
          <p className="text-red-500">{error?.message}</p>
          <p className="text-red-500">{googleError?.message}</p>
          <button
            type="submit"
            disabled={loading || googleLoading ? true : false}
            className="uppercase text-base-100 mb-[15px] bg-secondary w-full rounded-lg p-[15px] flex items-center justify-center"
          >
            Sign Up{loading && <BtnSpinner className="ml-2" />}
          </button>
        </form>
        <p className="text- text-center mb-[16px]">
          Have a Already Account?
          <Link to="/login" className="text-secondary ml-2">
            Login
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

export default Signup;
