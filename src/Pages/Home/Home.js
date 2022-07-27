import React from "react";
import Contact from "../Contact/Contact";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Footer from '../Shared/Footer/Footer'
import Services from "../Services/Services";
import ServiceTerms from "../ServiceTerms/ServiceTerms";
import HomeHero from "../Shared/Hero/HomeHero";
import Testimonial from "../Testimonial/Testimonial";

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
