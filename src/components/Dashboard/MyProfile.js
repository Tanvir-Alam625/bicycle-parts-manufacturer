import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="lg:my-12 my-6 w-full  mx-auto px-2">
      <h2 className="text-2xl font-semibold text-secondary">Profile</h2>
      <p>{user.email}</p>
      <div className="profileHeader flex justify-between">
        <button
          onClick={() => navigate("/dashboard/updateProfile")}
          className="btn btn-secondary"
        >
          update Profile
        </button>
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
    </div>
  );
};

export default Profile;
