import React, { useState } from "react";
import BtnSpinner from "../Spinner/BtnSpinner";

const User = ({ user, index, refetch }) => {
  const [addLoader, setAddLoader] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);
  //handle make admin function
  const handleMakeAdmin = (id) => {
    const confirm = window.confirm("Are You Sure!");
    if (confirm) {
      setAddLoader(true);
      fetch(`https://bicycle-pars-server-side.vercel.app/makeAdmin/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ role: "admin" }),
      })
        .then((res) => res.json())
        .then((result) => {
          refetch();
          setAddLoader(false);
        });
    }
  };
  // handle remove admin function
  const handleRemoveAdmin = (id) => {
    const confirm = window.confirm("Are You Sure!");
    if (confirm) {
      setRemoveLoader(true);
      fetch(`https://bicycle-pars-server-side.vercel.app/removeAdmin/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify({ role: false }),
      })
        .then((res) => res.json())
        .then((result) => {
          refetch();
          setRemoveLoader(false);
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        <button
          onClick={() => handleMakeAdmin(user._id)}
          disabled={user.role === "admin" ? true : false}
          className="btn btn-xs btn-primary flex justify-center items-center text-base-100"
        >
          Admin {addLoader && <BtnSpinner />}
        </button>
      </td>
      <td>
        {!user.host && (
          <button
            disabled={!user.role ? true : false}
            onClick={() => handleRemoveAdmin(user._id)}
            className="btn btn-xs btn-warning flex justify-center items-center text-base-100"
          >
            Remove {removeLoader && <BtnSpinner />}
          </button>
        )}
        {user.host && <p className="text-primary">Host User</p>}
      </td>
    </tr>
  );
};

export default User;
