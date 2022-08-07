import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Load mongodb api data by useQuery
  const { data: services, isLoading } = useQuery(["services"], () =>
    fetch("http://localhost:5000/service").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
 
  // Onsubmit
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-2xl">Add a Doctor</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Start Name Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-80"
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        {/* End Name Field */}
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
            placeholder="Your Email"
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
        {/* Start Specialization Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            {services?.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
              
            ))}
          </select>
        </div>
        {/* End Password Field */}
        {/* Start photo Field */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required",
              },
            })}
            type="file"
            placeholder="Your Name"
            className="input input-bordered w-80"
          />
          <label className="label">
            {errors.image?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
        {/* End photo Field */}
        <input className="btn btn-wide w-80 mt-5" type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default AddDoctor;
