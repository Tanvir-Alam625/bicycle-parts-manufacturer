import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePartes from "../../hooks/usePartes";
import Spinner from "../Spinner/Spinner";
import Parts from "./Parts";

const Partses = () => {
  const [parts, isLoading, refetch] = usePartes();
  const navigate = useNavigate();
  const handleBuyNowBtn = (id) => {
    navigate(`/purchase/${id}`);
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section className="lg:my-12 my-6 max-w-[1100px] mx-auto px-2">
      <h2 className="section-header text-start text-4xl font-bold text-secondary">
        Ours Parts
      </h2>
      <div className="parts-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 ">
        {parts.map((part) => (
          <Parts data={part} key={part._id} handleBuyNowBtn={handleBuyNowBtn} />
        ))}
      </div>
    </section>
  );
};

export default Partses;
