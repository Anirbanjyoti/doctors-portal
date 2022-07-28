import React from "react";
import CardInfo from "../CardInfo/CardInfo";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <section>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <CardInfo
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Opening Hours"
        img={clock}
      ></CardInfo>
      <CardInfo 
        bgclassName="bg-accent"
        cardTitle="Visit Our Location"
        img={marker}
      ></CardInfo>
      <CardInfo
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        cardTitle="Contact Us Now"
        img={phone}
      ></CardInfo>
    </div>
    </section>
  );
};

export default Info;
