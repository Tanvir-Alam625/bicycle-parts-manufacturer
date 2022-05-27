import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BtnSpinner from "../Spinner/BtnSpinner";

const UpdateProfile = () => {
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
          const addParts = {
            name: data.name,
            price: data.price,
            minimumQuantity: data.minimumQuantity,
            available: data.available,
            img: result.data.display_url,
            description: data.description,
          };
          const url = `http://localhost:5000/tools`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
            body: JSON.stringify(addParts),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged === true) {
                setSmSpinner(false);
                toast.success("Successfully Added Parts!");
                navigate("/dashboard/manageProduct");
              }
            });
        }
      });
  };
  return (
    <div className="lg:m-12 m-2  border shadow rounded-lg p-6">
      <h2 className="mb-12 mt-6 text-center text-2xl text-secondary font-semibold">
        Add Parts
      </h2>

      <form className="w-full  " onSubmit={handleSubmit(onSubmit)}>
        <div className="inputGroup flex  flex-col lg:flex-row w-full mb-[10px]">
          <div className="input-box mb-[10px] w-full lg:w-[50%] lg:mr-4 mr-0">
            <label htmlFor="name">Parts Name</label>
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
            <label htmlFor="price">Per Parts Price</label>
            <input
              type="number"
              {...register("price", {
                required: { value: true, message: "Price is required" },
                min: {
                  value: 5,
                  message: "Must be min price 5",
                },
                max: {
                  value: 400,
                  message: "Must be max price 400",
                },
              })}
              id="price"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="name" className="text-red-400 text-xs">
              {errors.price?.type === "required" && errors.price?.message}
              {errors.price?.type === "min" && errors.price?.message}
              {errors.price?.type === "max" && errors.price?.message}
            </label>
          </div>
        </div>
        <div className="inputGroup flex  flex-col lg:flex-row w-full mb-[10px]">
          <div className="input-box mb-[10px] w-full lg:w-[50%] lg:mr-4 mr-0">
            <label htmlFor="minimumQuantity">Minimum Quantity</label>
            <input
              type="number"
              {...register("minimumQuantity", {
                required: {
                  value: true,
                  message: "Minimum Quantity is required",
                },
                min: {
                  value: 50,
                  message: "Must be min price 50",
                },
                max: {
                  value: 500,
                  message: "Must be max price 500",
                },
              })}
              id="minimumQuantity"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="name" className="text-red-400 text-xs">
              {errors.minimumQuantity?.type === "required" &&
                errors.minimumQuantity?.message}
              {errors.minimumQuantity?.type === "min" &&
                errors.minimumQuantity?.message}
              {errors.minimumQuantity?.type === "max" &&
                errors.minimumQuantity?.message}
            </label>
          </div>
          <div className="input-box mb-[10px] w-full lg:w-[50%]">
            <label htmlFor="available">Total Parts</label>
            <input
              type="number"
              {...register("available", {
                required: { value: true, message: "Parts is required" },
                min: {
                  value: 5000,
                  message: "Must be min Parts  5000",
                },
                max: {
                  value: 1000000,
                  message: "Must be max Parts  1000000",
                },
              })}
              id="available"
              className="input input-bordered input-secondary w-full "
            />
            <label htmlFor="name" className="text-red-400 text-xs">
              {errors.available?.type === "required" &&
                errors.available?.message}
              {errors.available?.type === "min" && errors.available?.message}
              {errors.available?.type === "max" && errors.available?.message}
            </label>
          </div>
        </div>
        <div className="input-box mb-[10px] w-full lg:w-[50%] bg-transparent">
          <label htmlFor="img">Parts Photo</label>
          <input
            type="file"
            {...register("image", {
              required: { value: true, message: " parts image is required" },
            })}
            id="image"
            className="input bg-transparent  w-full "
          />
          <label htmlFor="image" className="text-red-400 text-xs">
            {errors.image?.type === "required" && errors.image?.message}
          </label>
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          className="textarea textarea-secondary w-full"
          {...register("description", {
            required: { value: true, message: "description is required" },
          })}
        ></textarea>
        <label htmlFor="description" className="text-red-400 text-xs  ">
          {errors.description?.type === "required" &&
            errors.description?.message}
        </label>
        <div className="submitBtn w-full my-[20px]">
          <button
            className="btn btn-secondary px-12"
            disabled={smSpinner ? true : false}
            type="submit"
          >
            Add Parts
            {smSpinner && <BtnSpinner />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
