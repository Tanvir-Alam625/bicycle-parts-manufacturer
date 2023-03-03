import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuAlt1Icon, MenuAlt4Icon } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  const link = (
    <>
      <li
        className={`rounded-lg  font-bold ${
          location.pathname === "/" ? "text-secondary" : "text-base-100"
        }`}
      >
        <Link to="/">Home</Link>
      </li>
      {user && (
        <li
          className={`rounded-lg  font-bold ${
            location.pathname === "/dashboard"
              ? "text-secondary"
              : "text-base-100"
          }`}
        >
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      {!user && (
        <li
          className={`rounded-lg  font-bold ${
            location.pathname === "/login" ? "text-secondary" : "text-base-100"
          }`}
        >
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <header className="bg-primary ">
      <div className="navbar  max-w-[1100px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <MenuAlt1Icon className="h-5 w-5 text-white" />
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-secondary"
          >
            Bi-Cycle Pars
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{link}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
