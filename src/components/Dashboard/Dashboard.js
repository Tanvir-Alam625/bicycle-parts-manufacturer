import { MenuAlt4Icon } from "@heroicons/react/solid";
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
    <div className="drawer drawer-mobile min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col  ">
        <div className="navbar-end lg:hidden block w-full  ">
          <div className="w-full flex justify-end ">
            <label
              htmlFor="my-drawer-2"
              className=" m-4 drawer-button lg:hidden"
            >
              <MenuAlt4Icon className="h-8 text-secondary" />
            </label>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {admin ? (
            <>
              <li>
                <Link to="/dashboard/manageOrders">Manage Order</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add A Product</Link>
              </li>
              <li>
                <Link to="/dashboard/makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manageProduct">Manage Product</Link>
              </li>
            </>
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
