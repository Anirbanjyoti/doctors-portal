import React from "react";
import HomeHero from "../Hero/HomeHero";
import Info from "../Info/Info";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="px-12">
        <HomeHero></HomeHero>
        <Info></Info>
        <Services></Services>
    </div>
  );
};

export default Home;
