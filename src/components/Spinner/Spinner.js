import React from "react";
import MyHelmet from "../MyHelmet/MyHelmet";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <MyHelmet title={`Loading..`} />

      <div className="loader">Loading...</div>
    </div>
  );
};

export default Spinner;
