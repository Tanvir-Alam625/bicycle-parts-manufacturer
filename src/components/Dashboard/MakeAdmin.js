import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import User from "./User";
const MakeAdmin = () => {
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="px-2 py-4">
      <h2 className="text-2xl font-semibold text-accent my-8 ml-4">
        Make Admin
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full lg:px-2 px-0">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>No</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users?.map((user, index) => (
              <User
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;