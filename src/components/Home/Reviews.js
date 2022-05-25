import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../hooks/UseReviews";
import Spinner from "../Spinner/Spinner";
import Review from "./Review";

const Reviews = () => {
  const [reviews, spinner] = useReviews();
  const navigate = useNavigate();
  const sameReviews = reviews.slice(0, 3);
  if (spinner) {
    return <Spinner />;
  }
  return (
    <div className="lg:my-12 my-6 max-w-[1100px] mx-auto px-2">
      <h2 className="section-header text-start text-4xl font-bold text-secondary">
        Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:my-20 my-12 ">
        {sameReviews.map((review) => (
          <Review key={review._id} data={review} />
        ))}
      </div>
      <div className="more-review flex justify-center">
        <button
          className="btn btn-secondary px-12"
          onClick={() => navigate("/reviews")}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
