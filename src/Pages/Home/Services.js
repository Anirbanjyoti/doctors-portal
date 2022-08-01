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
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: Whitening,
    },
  ];
  return (
    <section>
      <div className="text-center my-28 uppercase">
        <h3 className="text-primary font-bold text-xl">Our Services</h3>
        <p className="text-4xl">Services We Provide</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-28">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
