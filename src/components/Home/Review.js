import React from "react";
import ReactStars from "react-rating-stars-component";

const Review = ({ data }) => {
  const { img, name, description, rating } = data;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="user flex items-center">
          <img
            src={img}
            alt={name}
            className="w-[50px] h-[50px] rounded-full"
          />
          <h2 className="text-2xl ml-2">{name}</h2>
        </div>
        <ReactStars
          count={rating}
          size={24}
          activeColor="#ffd700"
          className="text-[#ffd700]"
        />
        <p className="p-0 m-0" title={description}>
          {description.length > 150
            ? description.slice(0, 150) + "..."
            : description}
        </p>
      </div>
    </div>
  );
};

export default Review;
