import React, { useState } from "react";
import Parts from "./Parts";

const Partses = () => {
  const [parts, setParts] = useState([]);
  fetch("product.json")
    .then((res) => res.json())
    .then((data) => setParts(data));
  return (
    <section className="lg:my-12 my-6 max-w-[1100px] mx-auto">
      <h2 className="section-header text-start text-4xl font-bold text-secondary">
        Ours Parts
      </h2>
      <div className="parts-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 ">
        {parts.map((part) => (
          <Parts data={part} key={part._id} />
        ))}
      </div>
    </section>
  );
};

export default Partses;
