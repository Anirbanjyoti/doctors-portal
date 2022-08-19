import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import bgBlue from "../../assets/images/appointment.png";
import { Link, useNavigate } from "react-router-dom";

const MakeAppointment = () => {
  const navigate = useNavigate();
  const handleAppointment=e=>{
    e.preventDefault();
    navigate('/appointment')
  }
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
          <h1 className="text-5xl mb-2 font-bold text-white">
            Make an appointment Today
          </h1>
          <p className="text-white">
            If you are going to make an appointment, you are either going to make an appointment for future use, or if you are rushing, you will JUST make the appointment if you hurry.
          </p>
          <a href={Link} className='btn bg-primary text-accent mt-4' onClick={handleAppointment}>Get started</a>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
