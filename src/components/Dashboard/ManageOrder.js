import React from "react";

const ManageOrder = ({ order, index, refetch }) => {
  const { toolName, userEmail, quantity, paid, shipment, _id } = order;
  const handleShipmentBtn = (id) => {
    const confirm = window.confirm("Are Your Sure  this Order Shipt!");
    if (confirm) {
      fetch(`https://bicycle-pars-server-side.vercel.app/orderShipment/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ shipment: true }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          refetch();
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{toolName.length > 30 ? toolName.slice(0, 30) : toolName} </td>
      <td>{userEmail}</td>
      <td>{quantity}</td>
      <td>
        {paid && !shipment && (
          <button
            onClick={() => handleShipmentBtn(_id)}
            className="btn btn-sm btn-secondary"
          >
            Pending
          </button>
        )}
        {shipment && <p className="text-success">Shipt</p>}
        {!paid && <p className="text-red-400">UnPaid</p>}
      </td>
    </tr>
  );
};

export default ManageOrder;
