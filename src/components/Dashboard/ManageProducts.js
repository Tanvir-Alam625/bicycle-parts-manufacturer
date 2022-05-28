import React from "react";
import usePartes from "../../hooks/usePartes";
import MyHelmet from "../MyHelmet/MyHelmet";
import Spinner from "../Spinner/Spinner";
import Product from "./Product";

const ManageProducts = () => {
  const [parts, isLoading, refetch] = usePartes();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="px-2">
      <MyHelmet title={`Manage Products`} />

      <h2 className="text-2xl font-semibold text-accent my-8 ml-4">
        Manage Products
      </h2>

      <div className="overflow-x-auto w-full mb-8">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>NO</th>
              <th>Product</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {parts.map((product, index) => (
              <Product
                key={product._id}
                index={index}
                refetch={refetch}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
