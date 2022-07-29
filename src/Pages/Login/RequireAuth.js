import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading || sending) {
    return <Loading></Loading>;
  }
  // Required login to visit page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // Email Varification sending if only user and password login .NOTE:No need to varify for  social login .

  if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
    return (
      <div>
        <h4 className="text-danger">Your Email Not Varified</h4>
        <h3 className="text-success">Please Varify Your Mail</h3>
        <button
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          {" "}
          Resend Varification Email Again!
        </button>
        <ToastContainer />
      </div>
    );
  }
  return children;
};

export default RequireAuth;