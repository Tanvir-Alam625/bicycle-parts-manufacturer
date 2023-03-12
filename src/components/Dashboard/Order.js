import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Order = ({ data, index, refetch }) => {
  const { toolName, quantity, _id, transactionId, shipment } = data;
  const navigate = useNavigate();
  const handleCancel = (id) => {
    const confirm = window.confirm("Are Your sure ?");
    if (confirm) {
      fetch(`https://bicycle-pars-tanvir-alam625.onrender.com/order/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            toast.success(`Your ${toolName} Order Successfully deleted`);
            refetch();
          }
        });
    }
  };

  return (
    <tr title={toolName}>
      <th>{index + 1}</th>
      <td>{toolName?.length > 40 ? toolName?.slice(0, 40) + "..." : toolName}</td>
      <td>{quantity}</td>
      <td>
        {data?.price && !transactionId && (
          <button
            onClick={() => navigate(`/payment/${_id}`)}
            className="bt btn-xs btn-primary text-base-100 px-8 rounded-lg"
          >
            Pay
          </button>
        )}
        {transactionId && !shipment && (
          <span className="text-success">Paid</span>
        )}
        {shipment && <p className="text-success">Delivered</p>}
      </td>
      <td>
        <button
          onClick={() => handleCancel(_id)}
          disabled={data?.paid && true}
          className="btn btn-xs  btn-warning text-base-100"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Order;
