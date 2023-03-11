import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import MyHelmet from "../MyHelmet/MyHelmet";
import Spinner from "../Spinner/Spinner";
import ManageOrder from "./ManageOrder";

const ManageOrders = () => {
  const [orders, setOrders] = useState(null);

  useEffect(()=>{
    fetch('https://bicycle-pars-server-side.vercel.app/manageOrders')
    .then(res=> res.json())
    .then(data=>{
      setOrders(data);
      console.log(data);
    })
  },[])
  // const {
  //   isLoading,
  //   error,
  //   data: orders,
  //   refetch,
  // } = useQuery("orders", () =>
  //   fetch(`https://bicycle-pars-server-side.vercel.app/manageOrders`)
  //   .then((res) => res.json())
  // );
  let myOrders = null;
  const handleChangeOrders = (event) => {
    console.log(event.target.value);

    if (event.target.value === "All Orders") {
      myOrders(orders);
    }
    if (event.target.value === "pending") {
      const pending = orders.filter((order) => order.paid && !order.shipment);
      myOrders(pending);
    }
    if (event.target.value === "shipt") {
      const shipt = orders.filter((order) => order.shipment);
      myOrders(shipt);
    }
    if (event.target.value === "unPaid") {
      const unPaid = orders.filter((order) => !order.paid);
      myOrders(unPaid);
    }
  };
  return (
    <div className="px-2">
      <MyHelmet title={`Manage Orders`} />

      <h2 className="text-2xl font-semibold text-accent my-8 ml-4">
        Manage Orders
      </h2>

      {/* orders data in  table  */}
      <select
        className="select select-secondary w-full max-w-xs mb-6"
        onChange={handleChangeOrders}
      >
        <option defaultValue>All Orders</option>
        <option value="pending">Pending Orders</option>
        <option value="shipt">Shipt Orders</option>
        <option value="unPaid">Unpaid Orders</option>
      </select>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full lg:px-2 px-0 mb-8">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>Pars Name</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Shipment</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {myOrders
              ? myOrders?.map((order, index) => (
                  <ManageOrder
                    key={order._id}
                    index={index}
                    order={order}
                  />
                ))
              : orders?.map((order, index) => (
                  <ManageOrder
                    key={order._id}
                    index={index}
                    order={order}
                  />
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
