import { async, jsonEval } from "@firebase/util";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BtnSpinner from "../Spinner/BtnSpinner";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { price, userEmail, userName, _id } = order;
  const [btnSpinner, setBtnSpinner] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.clientSecret) {
          setClientSecret(result?.clientSecret);
        }
      });
  }, [price]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error?.message);
    } else {
      setError("");
      setBtnSpinner(true);
      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email: userEmail,
            },
          },
        });
      if (intentError) {
        setBtnSpinner(false);
        setError(intentError?.message);
      } else {
        setBtnSpinner(true);
        setError(" ");
        setTransactionId(paymentIntent.id);
        fetch(`http://localhost:5000/orderPay/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify({ transactionId: paymentIntent.id }),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount) {
              setBtnSpinner(false);
              toast.success("Congrats! Your Payment Complete.");
              navigate("/dashboard/myOrder");
            }
          });
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-400">{error}</p>
      <button
        type="submit"
        className="btn btn-secondary w-full mt-[20px] flex justify-center"
        disabled={!stripe || !clientSecret || btnSpinner}
      >
        Pay {btnSpinner && <BtnSpinner className="ml-2" />}
      </button>
    </form>
  );
};

export default CheckoutForm;
