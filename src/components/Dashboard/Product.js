import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = ({ product, index, refetch }) => {
  const { name, img, price, minimumQuantity, available, description, _id } =
    product;
  const navigate = useNavigate();
  const handleDeleteProduct = (id) => {
    const confirm = window.confirm("Are Your Sure!");
    if (confirm) {
      fetch(`http://localhost:5000/tool/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            toast.success(`Your ${name} Order Successfully deleted`);
            refetch();
          }
        });
    }
  };
  return (
    <tr
      title={description.length > 100 ? description.slice(0, 100) : description}
    >
      <th>{index + 1}</th>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img
                src={img}
                alt="product-img"
                className="rounded-lg border-2 border-secondary"
              />
            </div>
          </div>
          <div>
            <div class="font-bold">
              {name.length > 20 ? name.slice(0, 20) : name}
            </div>
            <div class="text-sm opacity-50">
              Available:{" "}
              <span className="text-secondary font-se">{available}</span>
            </div>
          </div>
        </div>
      </td>
      <td>
        <p className="text-secondary font-semibold">${price}</p>
        <span class="badge badge-ghost badge-sm">
          Min Quantity:{" "}
          <span className="text-secondary">{minimumQuantity}</span>
        </span>
      </td>
      <td>
        <button
          onClick={() => navigate(`/dashboard/manageProduct/${_id}`)}
          title="Update"
        >
          <PencilAltIcon className="h-8 text-secondary" />
        </button>
      </td>
      <th>
        <button title="delete" onClick={() => handleDeleteProduct(_id)}>
          <TrashIcon className="h-8 text-red-500" />
        </button>
      </th>
    </tr>
  );
};

export default Product;
