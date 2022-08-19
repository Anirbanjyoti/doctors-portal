import React from "react";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import ServiceTerms from "./ServiceTerms";
import Testimonial from "./Testimonial";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <div>
        <HomeHero></HomeHero>
        <Info></Info>
        <Services></Services>
        <ServiceTerms></ServiceTerms>
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
        <Contact></Contact>
    </div>
  );
};

export default Home;
