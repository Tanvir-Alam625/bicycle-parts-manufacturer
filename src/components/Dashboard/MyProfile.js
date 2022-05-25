import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
const Profile = () => {
  return (
    <div className="lg:my-12 my-6 max-w-[1100px] mx-auto px-2">
      <h2>Profile</h2>
      <button
        className="btn btn-secondary px-12"
        onClick={() => {
          signOut(auth);
          localStorage.removeItem("access-token");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
