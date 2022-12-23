import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { PencilAltIcon } from "@heroicons/react/solid";
import MyHelmet from "../MyHelmet/MyHelmet";
const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch(`https://bicycle-pars-tanvir-alam625.onrender.com/profile/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
  }, [user]);
  const { name, email, img, country, city, location } = profile;
  return (
    <div className="lg:my-12 my-6 w-full  mx-auto px-2 ">
      <MyHelmet title={`My Profile`} />

      <div className="headers flex justify-between mb-[20px]">
        <h2 className="text-2xl font-semibold text-secondary">Profile</h2>
        {!profile.name && (
          <button
            className="btn btn-outline btn-secondary flex capitalize "
            title="Sign Out"
            onClick={() => {
              signOut(auth);
              localStorage.removeItem("access-token");
            }}
          >
            <span className=" mr-2 text-xl">SignOut</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        )}
        <button
          onClick={() => navigate("/dashboard/updateProfile")}
          className="btn btn-outline btn-secondary  flex items-center"
          title="update Profile"
        >
          <span className="text-xl capitalize">Edit</span>
          <PencilAltIcon className="h-6 text-secondary ml-2" />
        </button>
      </div>
      <hr />
      {profile.name && (
        <div className="flex flex-col lg:flex-row w-full  mt-[20px]">
          <div className="w-full lg:w-[30%] flex flex-col items-center">
            <img
              src={img}
              alt="userImage"
              className="h-[200px] rounded-lg border-2 border-secondary"
            />{" "}
            <br />
            <button
              className="btn btn-outline btn-secondary flex capitalize "
              title="Sign Out"
              onClick={() => {
                signOut(auth);
                localStorage.removeItem("access-token");
              }}
            >
              <span className=" mr-2 text-xl">SignOut</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
          <div className="profile-info w-full lg:w-[70%]">
            <h5 className="text-center lg:text-left text-xl mt-2">Full Name</h5>
            <h2 className="text-center lg:text-left text-2xl font-semibold mb-2">
              {name}
            </h2>
            <h5 className="text-center lg:text-left text-xl mt-2">Email</h5>
            <h2 className="text-center lg:text-left text-2xl font-semibold mb-2">
              {user.email}
            </h2>
            <h5 className="text-center lg:text-left text-xl mt-2">Address</h5>
            <h2 className="text-center lg:text-left text-2xl font-semibold mb-2 capitalize">
              <span>{country}</span>,<span>{city}</span>,<span>{location}</span>
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
