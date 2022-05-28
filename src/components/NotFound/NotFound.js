import React from "react";
import { useNavigate } from "react-router-dom";
import MyHelmet from "../MyHelmet/MyHelmet";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed min-h-screen z-10 bg-primary top-0   right-0 bottom-0 left-0 flex flex-col justify-center items-center">
      <MyHelmet title={`404 This Page is Not Found`} />

      <h2 className="text-secondary text-6xl font-semibold  mb-6">
        Oops! This Page is Not Found
      </h2>
      <div>
        <button
          onClick={() => navigate("/")}
          className="btn btn-secondary  px-8"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
