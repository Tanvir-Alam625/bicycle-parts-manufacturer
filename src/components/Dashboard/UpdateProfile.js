import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import BtnSpinner from "../Spinner/BtnSpinner";

const UpdateProfile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [smSpinner, setSmSpinner] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageApiKey = "be60a862641e549cc4f82067a1232062";
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
    setSmSpinner(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const profile = {
            name: data.name,
            email: user.email,
            country: data.country,
            city: data.city,
            img: result.data.display_url,
            location: data.location,
          };
          const url = `https://damp-sierra-18639.herokuapp.com/profile/${user.email}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(profile),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged === true) {
                setSmSpinner(false);
                toast.success("Your Profile Has been Update!");
                navigate("/dashboard");
              }
            });
        }
      });
  };
  return (
    <div className="m-12  border shadow rounded-lg p-6">
      <h2 className="mb-12 mt-6 text-center text-2xl text-secondary font-semibold">
        Update Profile
      </h2>

      <form className="w-full  " onSubmit={handleSubmit(onSubmit)}>
        <div className="inputGroup flex  flex-col lg:flex-row w-full mb-[10px]">
          <div className="input-box mb-[10px] w-full lg:w-[50%] lg:mr-4 mr-0">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              {...register("name", {
                required: { value: true, message: "name is required" },
              })}
              id="name"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="name" className="text-red-400 text-xs">
              {errors.name?.type === "required" && errors.name?.message}
            </label>
          </div>
          <div className="input-box mb-[10px] w-full lg:w-[50%]">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              id="email"
              disabled
              readOnly
              value={user?.email}
              className="input input-bordered input-secondary w-full "
            />
          </div>
        </div>
        <div className="inputGroup flex  flex-col lg:flex-row w-full mb-[10px]">
          <div className="input-box mb-[10px] w-full lg:w-[50%] lg:mr-4 mr-0">
            <label htmlFor="name">Country</label>
            <input
              type="text"
              {...register("country", {
                required: { value: true, message: "country is required" },
              })}
              id="country"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="country" className="text-red-400 text-xs">
              {errors.country?.type === "required" && errors.country?.message}
            </label>
          </div>
          <div className="input-box mb-[10px] w-full lg:w-[50%]">
            <label htmlFor="name">City</label>
            <input
              type="text"
              {...register("city", {
                required: { value: true, message: "city is required" },
              })}
              id="city"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="city" className="text-red-400 text-xs">
              {errors.city?.type === "required" && errors.city?.message}
            </label>
          </div>
        </div>
        <div className="input-box mb-[10px] w-full lg:w-[50%] bg-transparent">
          <label htmlFor="name">Your Photo</label>
          <input
            type="file"
            {...register("image", {
              required: { value: true, message: "image is required" },
            })}
            id="image"
            className="input bg-transparent  w-full "
          />
          <label htmlFor="image" className="text-red-400 text-xs">
            {errors.image?.type === "required" && errors.image?.message}
          </label>
        </div>
        <label htmlFor="name">Your Current location and Road Number</label>
        <textarea
          className="textarea textarea-secondary w-full"
          {...register("location", {
            required: { value: true, message: "country is required" },
          })}
          required
        ></textarea>
        <label htmlFor="city" className="text-red-400 text-xs  ">
          {errors.city?.type === "required" && errors.city?.message}
        </label>
        <div className="submitBtn w-full my-[20px]">
          <button
            className="btn btn-secondary px-12"
            disabled={smSpinner ? true : false}
            type="submit"
          >
            Update {smSpinner && <BtnSpinner />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
