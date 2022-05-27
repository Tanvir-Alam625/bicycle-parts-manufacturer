import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  // fetch("http://localhost:5000/manageOrders", {
  //   headers: {
  //     authorization: `Bearer ${localStorage.getItem("access-token")}`,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setOrders(data);
  //   });

  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/manageOrders`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="px-2">
      <h2 className="text-2xl font-semibold text-accent my-8 ml-4">
        Manage Orders
      </h2>

      {/* orders data in  table  */}
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full lg:px-2 px-0 mb-8">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Parts Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Shipment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}

            {orders.map((order, index) => (
              <ManageOrder
                key={order._id}
                index={index}
                order={order}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
