import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import MyHelmet from "../MyHelmet/MyHelmet";
import Spinner from "../Spinner/Spinner";
import Order from "./Order";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const {
    isLoading,
    error,
    data:orders,
    refetch,
  } = useQuery("orders", () =>
    fetch(
      `https://bicycle-pars-server-side.vercel.app/orders?email=${user.email}`,
      {
        method: "GET",
      }
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Spinner />;
  }
  if (orders) {
    console.log(orders);
  }
  return (
    <div className="px-2">
      <MyHelmet title={`My Orders`} />

      <h2 className="text-2xl font-semibold text-accent my-8 ml-4">My Order</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Order Cancel</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            
            {
              orders?.map((order,index)=> <Order
              key={order._id}
              data={order}
              index={index}
              refetch={refetch}
              />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
