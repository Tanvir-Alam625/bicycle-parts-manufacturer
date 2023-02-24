import React from "react";
const Subscribtion = () => {
  return (
    <section className="subscribe-container   h-[400px] w-full flex flex-col justify-center items-center  font-mono px-2">
      <h1 className="text-center text-3xl font-bold text-secondary md:text-4xl lg:text-6xl mb-4">
        SubScribe Now
      </h1>
      <div className="  w-full flex  justify-center items-center">
        <input
          className="p-2 bg-transparent outline-none border-2 w-full md:w-1/3  shadow-md text-xl border-secondary text-secondary placeholder:text-secondary rounded-l-md  "
          type="email"
          name="email"
          placeholder="Email"
          id="email"
        />
        <button className="p-2 text-xl border-2 border-secondary rounded-r-md shadow-md text-secondary">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Subscribtion;
