import React from "react";

const AddReview = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      img: event.target.img.value,
      rating: parseInt(event.target.rating.value),
      description: event.target.description.value,
    };
    console.log(formData);
  };
  return (
    <div className=" flex flex-col justify-center items-center  pt-12">
      <div className="shadow-lg rounded-lg w-full text-accent bg-base-100 mx-2 p-[30px] lg:w-96 ">
        <h2 className="text-center text-[30px] mt-[15px]  mb-[30px]">
          Sign Up Now
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
            type="text"
            name="img"
            required
            placeholder="Your Image url"
            class="input input-bordered input-secondary w-full mb-[20px] "
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
