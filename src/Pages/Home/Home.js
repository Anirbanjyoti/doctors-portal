import React from "react";
import Contact from "../Contact/Contact";
import HomeHero from "../Hero/HomeHero";
import Info from "../Info/Info";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services";
import ServiceTerms from "../ServiceTerms/ServiceTerms";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="px-12">
        <HomeHero></HomeHero>
        <Info></Info>
        <Services></Services>
        <ServiceTerms></ServiceTerms>
        <MakeAppoinment></MakeAppoinment>
        <Testimonial></Testimonial>
        <Contact></Contact>
    </div>
  );
};

export default Home;
