import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import Cavity from "../../assets/images/cavity.png";
import Whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is a natural mineral that builds strong teeth and prevents cavities.",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Dental fillings are a common way to treat cavities, which are areas of decaying tooth.",
      img: Cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Teeth whitening is one of the most popular cosmetic dentistry treatments.",
      img: Whitening,
    },
  ];
  return (
    <div>
      <div className="text-center my-28 uppercase">
        <h3 className="text-primary font-bold text-xl">Our Services</h3>
        <p className="text-4xl">Services We Provide</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-18 px-24">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
