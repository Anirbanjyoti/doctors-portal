import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import bgBlue from "../../assets/images/appointment.png";
import Button from "../Shared/Button/Button";

const MakeAppointment = () => {
  return (
    <section
      className="sm:my-28"
      style={{
        background: `url(${bgBlue})`,
        backgroundSize: "contain",
      }}
    >
      <div className="appoinment flex items-center">
        <div className="flex-1 pl-5 hidden lg:block">
          <img src={doctor} alt="images" className="mt-[-100px]"></img>
        </div>

        <div className="flex-1 px-5 sm:py-14">
          <h3 className="text-xl text-primary">Appointment</h3>
          <h1 className="text-5xl font-bold text-white">
            Make an appointment Today
          </h1>
          <p className="text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
