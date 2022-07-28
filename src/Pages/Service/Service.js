import React from "react";

const Service = ({service}) => {
    const  {name, description, img} = service;
  return (
    <section>
    <div className="card bg-base-100 shadow-xl m-2">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
    </section>
  );
};

export default Service;
