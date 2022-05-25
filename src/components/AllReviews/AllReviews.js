import React from "react";
import Review from "../Home/Review";
import useReviews from "../hooks/UseReviews";
import Spinner from "../Spinner/Spinner";

const AllReviews = () => {
  const [reviews, spinner] = useReviews();

  if (spinner) {
    return <Spinner />;
  }
  return (
    <div className="min-h-[500px]">
      <div className="lg:my-12 my-6 max-w-[1100px] mx-auto px-2">
        <h2 className="section-header text-start text-4xl font-bold text-secondary">
          Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 md:my-20 my-12 ">
          {reviews.map((review) => (
            <Review key={review._id} data={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
