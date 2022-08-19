import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // Load mongodb api data by useQuery
  const { data: services, isLoading } = useQuery(["services"], () =>
    fetch("https://mysterious-retreat-91488.herokuapp.com/service").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  const imageStorageKey = "f3a6088d5c548faa1303685172a82865";
  // Onsubmit
  /**
   * 3 ways to store images
   * 1. Third party storage //Free open public storage is ok for Practice project
   * 2. Your own storage in your own server (file system)
   * 3. Database: Mongodb
   *
   * YUP: to validate file: Search: Yup file validation for react hook form
   */
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to your database
          fetch("https://mysterious-retreat-91488.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add the doctor");
              }
            });
        }
      });
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
