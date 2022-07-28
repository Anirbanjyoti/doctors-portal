import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    // Redirection page
      const location = useLocation();
    let from = location.state?.from?.pathname || "/";

  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-error">
        Error: {error?.message}
      </p>
    );
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
    {errorElement}
      <button onClick={() => signInWithGoogle()} className="btn btn-outline w-80">Continue with Google</button>
    </div>
  );
};

export default SocialLogin;
