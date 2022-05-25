import React from "react";
import { toast } from "react-toastify";

const Order = ({ data, index, refetch }) => {
  const { toolName, quantity, _id } = data;
  const handleCancel = (id) => {
    const confirm = window.confirm("Are Your sure ?");
    if (confirm) {
      fetch(`http://localhost:5000/order/${id}`, {
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
      <td>{toolName.length > 40 ? toolName.slice(0, 40) + "..." : toolName}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={() => handleCancel(_id)}
          className="btn btn-xs btn-warning text-base-100"
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default Order;
