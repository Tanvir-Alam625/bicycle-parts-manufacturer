import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Spinner from "../Spinner/Spinner";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, loading] = useAdmin(user);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div class="drawer drawer-mobile min-h-screen">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col  ">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {admin ? (
            <li>
              <Link to="/dashboard/manageOrders">Manage Order</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/dashboard/myOrder">My Order</Link>
              </li>
              <li>
                <Link to="/dashboard/addReview">Add a Review</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
