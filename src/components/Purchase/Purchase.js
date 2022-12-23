import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyHelmet from "../MyHelmet/MyHelmet";
import BtnSpinner from "../Spinner/BtnSpinner";
import Spinner from "../Spinner/Spinner";

const Purchase = () => {
  const { id } = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [parts, setParts] = useState({});
  const [btnSpinner, setBtnSpinner] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://bicycle-pars-tanvir-alam625.onrender.com/purchase/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setParts(data);
      });
  }, [id]);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <h2 className="text-2xl ">{error.message}</h2>;
  }
  const { minimumQuantity, name, available } = parts;
  const onSubmit = async (data) => {
    const quantity = parseInt(data.quantity);
    setBtnSpinner(true);
    const orderData = {
      toolName: name,
      price: quantity * parts.price,
      userName: data.name,
      userEmail: user.email,
      quantity: quantity,
      phone: data.phone,
      address: data.address,
    };
    const url = "https://bicycle-pars-tanvir-alam625.onrender.com/orders";
    await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast.success("Successfully  Your  order ");
        }
      });
    const newAvailable = available - parseInt(data.quantity);
    fetch(`https://bicycle-pars-tanvir-alam625.onrender.com/purchase/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ available: newAvailable }),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/dashboard/myOrder");
        setBtnSpinner(false);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center my-12">
      <MyHelmet title={`Purchase`} />
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100  mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">
          Order Info
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box mb-[10px]">
            <label htmlFor="email">Pars Name</label>
            <input
              type="text"
              {...register("toolName")}
              id="name"
              value={name}
              disabled
              readOnly
              className="input input-bordered input-secondary w-full "
            />
          </div>
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
              {...register("email")}
              id="email"
              value={user.email}
              disabled
              readOnly
              className="input input-bordered input-secondary w-full "
            />
          </div>
          <div className="input-box mb-[20px]">
            <label htmlFor="phone">Quantity</label>
            <input
              type="number"
              className="input input-bordered input-secondary w-full "
              {...register("quantity", {
                required: { value: true, message: "Quantity is required" },
                min: {
                  value: minimumQuantity,
                  message: `Must be minimum Quantity ${minimumQuantity}`,
                },
                max: {
                  value: 1000,
                  message: `must be maximum Quantity ${available}`,
                },
              })}
              id="quantity"
            />
            <label htmlFor="quantity" className="text-red-400 text-xs">
              {(errors.quantity?.type === "required" &&
                errors.quantity?.message) ||
                (errors.quantity?.type === "min" && errors.quantity?.message) ||
                (errors.quantity?.type === "max" && errors.quantity?.message)}
            </label>
          </div>
          <div className="input-box mb-[20px]">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              className="input input-bordered input-secondary w-full "
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
              className="input input-bordered input-secondary w-full "
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
            disabled={btnSpinner ? true : false}
            className="uppercase flex justify-center items-center text-base-100 mb-[15px] bg-secondary w-full rounded-lg p-[15px]"
          >
            Submit{btnSpinner && <BtnSpinner />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
