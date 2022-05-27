import { LocationMarkerIcon, MailIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Background from "../../image/footer/andrew-seaman-ZKB9Bo4zCqQ-unsplash.jpg";
import MyLocation from "../../image/footer/data=xTkMbks5K1oBF9e7fR1wHOm8LhyvBOuu2AOUW4q4mTHfJ0wW7is42R-oLZ3KTIWjUGMH9CAGsMss8frse4pLuUuFBQcdXEpmLG5k1WpcGWsZeMA4eEVaoJGEsQKU6NNV9e8R7-K3nxAGALGpVqbS90V3fTVehlfGLV_YqMTBmqIVktEiJZ39_.png";
const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className="px-2"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.8) 0%, rgba(0, 212, 255,0.8) 35%, rgba(130,15,192,0.9) 100%),url(${Background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="footer-items grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 lg:py-12 py-8 max-w-[1100px] mx-auto">
        <div className="site-info">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl text-secondary"
          >
            Bi-Cycle Parts
          </Link>
          <p className=" text-sm text-base-100 mb-6">
            This is in the generic definition, a rod that serves to attach a
            wheel to a bicycle and provides support for bearings on which the
            wheel rotates...
          </p>
        </div>
        <div className="our-link">
          <h2 className="text-4xl font-semibold text-base-100 mb-6">
            Our All Link{" "}
          </h2>
          <ul>
            <li
              className={`rounded-lg  font-bold ${
                location.pathname === "/" ? "text-secondary" : "text-base-100"
              }`}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`rounded-lg  font-bold ${
                location.pathname === "/blog"
                  ? "text-secondary"
                  : "text-base-100"
              }`}
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              className={`rounded-lg  font-bold ${
                location.pathname === "/portfolio"
                  ? "text-secondary"
                  : "text-base-100"
              }`}
            >
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li
              className={`rounded-lg  font-bold ${
                location.pathname === "/login"
                  ? "text-secondary"
                  : "text-base-100"
              }`}
            >
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="address">
          <h2 className="text-4xl font-semibold text-base-100 mb-6">
            Our Locations
          </h2>
          <div className="email text-base-100 ">
            <div className="flex items-center mb-6">
              <LocationMarkerIcon className="h-5 mr-4 " />
              <span>Dhaka Lalbagh 2442,3523 Road</span>
            </div>
            <img
              src={MyLocation}
              alt="location"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <small className=" text-base-100 my-6">
          Copyright © 2022 Bi-Cycle Parts
        </small>
      </div>
    </footer>
  );
};

export default Footer;
