import React from "react";

const Parts = ({ data }) => {
  const { img, name, description, price, minimumQuantity } = data;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-md hover:shadow-xl">
      <div class="card-body">
        <img src={img} alt={name} className="h-[300px] object-cover" />
        <h2 className="card-title">{name}</h2>
        <p className="p-0 m-0" title={description}>
          {description.length > 50
            ? description.slice(0, 50) + "..."
            : description}
        </p>
        <p className="p-0 m-0">
          Price: <span className="font-bold">${price}</span>
        </p>
        <p className="p-0 m-0">
          Minimum Quantity:
          <span className="font-bold">{minimumQuantity}</span>
        </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary text-base-100">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Parts;
