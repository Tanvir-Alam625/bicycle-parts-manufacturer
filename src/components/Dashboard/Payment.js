import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from "../Spinner/Spinner";

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/order/${id}`, {
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
  console.log(order);
  const { name, email, img, country, city, location } = order;
  if (spinner) {
    return <Spinner />;
  }
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default Payment;
