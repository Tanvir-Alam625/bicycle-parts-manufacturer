import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      email: user.email,
      name: event.target.name.value,
      img: event.target.img.value,
      rating: parseInt(event.target.rating.value),
      description: event.target.description.value,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        event.target.reset();
      });

    console.log(formData);
  };
  return (
    <div className=" flex flex-col justify-center items-center  pt-12">
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100 mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">
          Add Review
        </h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            class="input input-bordered input-secondary w-full  mb-[20px]"
          />
          <input
            type="number"
            name="rating"
            min={1}
            max={5}
            required
            placeholder="You Ratings"
            class="input input-bordered input-secondary w-full mb-[20px] "
          />

          <input
            type="file"
            required
            placeholder="You Ratings"
            class="input   w-full mb-[20px] "
            name="image"
          />
          <textarea
            class="textarea w-full textarea-secondary mb-[20px]"
            placeholder="Message"
            name="description"
            required
          ></textarea>
          <button type="submit" className="btn btn-secondary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
