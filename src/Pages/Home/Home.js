import React from "react";
import Contact from "./Contact";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Footer from '../Shared/Footer'
import Services from "./Services";
import ServiceTerms from "./ServiceTerms";
import Testimonial from "./Testimonial";
import HomeHero from "./HomeHero";

const Home = () => {
  return (
    <div className="px-12">
        <HomeHero></HomeHero>
        <Info></Info>
        <Services></Services>
        <ServiceTerms></ServiceTerms>
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default Home;
