import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuAlt1Icon } from "@heroicons/react/solid";
const Header = () => {
  const location = useLocation();
  const link = (
    <>
      <li
        className={`rounded-lg  font-bold ${
          location.pathname === "/" ? "text-secondary" : "text-accent"
        }`}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={`rounded-lg  font-bold ${
          location.pathname === "/blog" ? "text-secondary" : "text-accent"
        }`}
      >
        <Link to="/blog">Blog</Link>
      </li>
      <li
        className={`rounded-lg  font-bold ${
          location.pathname === "/portfolio" ? "text-secondary" : "text-accent"
        }`}
      >
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li
        className={`rounded-lg  font-bold ${
          location.pathname === "/login" ? "text-secondary" : "text-accent"
        }`}
      >
        <Link to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <header className="bg-primary ">
      <div class="navbar  max-w-[1100px] mx-auto">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <MenuAlt1Icon className="h-5 w-5 text-blue-500" />
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case text-xl text-secondary">
            BiCycle Parts
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{link}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
