import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import BtnSpinner from "../Spinner/BtnSpinner";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [btnSpinner, setBtnSpinner] = useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setBtnSpinner(true);
    const formData = {
      email: user.email,
      name: event.target.name.value,
      img: event.target.img.value,
      rating: parseInt(event.target.rating.value),
      description: event.target.description.value,
    };
    fetch("https://damp-sierra-18639.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          event.target.reset();
          setBtnSpinner(false);
          navigate("/reviews");
        }
      });
  };
  return (
    <div className=" flex flex-col justify-center items-center  pt-12">
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100 mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">
          Add A Review
        </h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="input input-bordered input-secondary w-full  mb-[20px]"
          />
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            required
            placeholder="You Ratings"
            className="input input-bordered input-secondary w-full mb-[20px] "
          />
          <input
            type="text"
            name="img"
            required
            placeholder=" Valid Photo url"
            className="input input-bordered input-secondary w-full mb-[20px] "
          />
          <textarea
            className="textarea w-full textarea-secondary mb-[20px]"
            placeholder="Message"
            name="description"
            required
          ></textarea>
          <button
            type="submit"
            disabled={btnSpinner ? true : false}
            className="btn btn-secondary w-full flex items-center justify-center"
          >
            Submit {btnSpinner && <BtnSpinner className="ml-2" />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
