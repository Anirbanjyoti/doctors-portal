import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    
  };
  // Redirection page
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    signInError = <p className="text-error my-2">Error: {error.message}</p>;
  }
  return (
    <div>
      <div className="grid justify-center mt-24">
        <h1 className="text-center text-4xl font-bold">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Start Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Address is Required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                  message: "Provide a valid Email",
                },
              })}
              type="text"
              placeholder=""
              className="input input-bordered w-80"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          {/* End Email Field */}
          {/* Start Password Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Must be six character",
                },
                pattern: {
                  value: /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{8,15})$/,
                  message: "Put Minimum 01 Character and Maximum 15",
                },
              })}
              type="password"
              placeholder=""
              className="input input-bordered w-80"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {/* End Password Field */}
          {signInError}
          <input className="btn btn-wide w-80" type="submit" value="login" />
          <p className="text-xs text-center mt-2">
            New to Doctors Portal?
            <Link to='/signup' className="text-secondary"> Create new account</Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
