import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L2DloKYclWXeC9qua479l0HDahKLgcw9xnrpDfFb2d75IJeY4VCbTS69y3IKLvRTNfBLlLSoRUqIkqvqMvLdMuc00htMIAt7O"
);
const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch(`https://damp-sierra-18639.herokuapp.com/order/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSpinner(false);
        setOrder(data);
      });
  }, [id]);
  const { userName, userEmail, address, quantity, price, toolName } = order;
  if (spinner) {
    return <Spinner />;
  }
  return (
    <div className="lg:my-12 my-6 max-w-[1100px] mx-auto px-2 min-h-screen  ">
      <h1 className="text-4xl font-semibold text-accent my-8">
        Please Pay Now!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="card lg:max-w-lg bg-base-100 shadow-xl border-2">
          <div className="card-body">
            <h1 className="text-4xl text-secondary">{toolName}</h1>
            <h2 className="card-title">
              <p className="text-2xl ">
                Hello, <span className="text-secondary">{userName}</span>
              </p>
            </h2>
            <p>Your Email:{userEmail}</p>
            <div className="badge badge-secondary text-xl">
              Quantity:<span className="font-bold">{quantity}</span>
            </div>
            <div className="badge badge-secondary text-xl">
              Total Price: <span className="font-bold"> ${price}</span>
            </div>
            <div className="text-xs">
              Address: <span className="font-bold"> ${address}</span>
            </div>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl border-2">
          <div className="card-body">
            <h2 className="card-title mb-8">
              Payment
              <div className="badge badge-secondary">card</div>
            </h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm order={order} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
