import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const Parts = ({ data, handleBuyNowBtn }) => {
  const { _id, img, name, price, minimumQuantity, available } = data;

  return (
    <div className="lg:max-w-lg bg-base-100 min-h-[450px]  rounded-md shadow-md hover:shadow-xl">
      <div className="flex flex-col items-center">
        <img src={img} alt={name} className="max-h-72 my-1 object-cover" />
        <div className="w-full px-2 text-slate-600">
          <h2 className="text-xl font-extrabold p-0 m-0 ">
            {name.length > 25
              ? name?.slice(0, 25).replace(/-/g, " ")
              : name?.replace(/-/g, " ")}
          </h2>
          <p className=" my-1 text-sm font-medium">
            Minimum Quantity:
            <span className="font-bold">{minimumQuantity}</span>
          </p>
          <p className="p-0 my-2 text-xl font-extrabold text-center text-purple-500">
            ${price}.00
          </p>
          {available < 1 ? (
            <div className=" w-full py-2 px-4 mb-2 text-white rounded-md shadow cursor-not-allowed bg-yellow-300">
              <p className="text-center text-sm font-medium">Out Of Stock</p>
            </div>
          ) : (
            <div className="w-full mb-2">
              <button
                className="text-sm flex justify-center items-center font-medium text-slate-100 w-full rounded-md bg-purple-500 py-2 px-4 shadow transition duration-150 ease-in-out hover:bg-purple-700"
                onClick={() => handleBuyNowBtn(_id)}
              >
                Buy Now <ShoppingCartIcon className="ml-4 h-[1rem]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Parts;
