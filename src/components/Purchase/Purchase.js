import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center min-h-screen items-center my-12">
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100  mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Full Name</label>
            <input
              type="text"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              id="name"
              class="input input-bordered input-secondary w-full "
            />
            <label htmlFor="name" className="text-red-400 text-xs">
              {errors.name?.type === "required" && errors.name?.message}
            </label>
          </div>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              value={user.email}
              disabled
              readOnly
              class="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="input-box mb-[20px]">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              class="input input-bordered input-secondary w-full "
              {...register("phone", {
                required: { value: true, message: "phone is required" },
                minLength: {
                  value: 9,
                  message: "phone length must be 9 character ",
                },
              })}
              id="phone"
            />
            <label htmlFor="phone" className="text-red-400 text-xs">
              {(errors.phone?.type === "required" && errors.phone?.message) ||
                (errors.phone?.type === "minLength" && errors.phone?.message)}
            </label>
          </div>
          <div className="input-box mb-[20px]">
            <label htmlFor="password">Address</label>
            <input
              type="text"
              class="input input-bordered input-secondary w-full "
              {...register("address", {
                required: { value: true, message: "address is required" },
              })}
              id="address"
            />
            <label htmlFor="address" className="text-red-400 text-xs">
              {errors.address?.type === "required" && errors.address?.message}
            </label>
          </div>
          <button
            type="submit"
            className="uppercase text-base-100 mb-[15px] bg-secondary w-full rounded-lg p-[15px]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
