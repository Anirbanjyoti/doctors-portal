import React from "react";
import { Link, useNavigate } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";

const ServiceTerms = () => {
  const navigate = useNavigate();
  const handleAppointment=e=>{
    e.preventDefault();
    navigate('/appointment')
  }
  return (
    <section>
      <div className="hero min-h-screen my-24">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="images"
          />
          <div className="px-14">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
            Why is this important? For the simple reason that relationship you have with your chosen dental practitioner will colour your confidence in and encourage a positive attitude towards your dental health. So, the question that then needs to be answered is how does one choose a dentist Sheffield to experience an extraordinary level of care and patient-service excellence? Read further to find out.
            </p>
            <a href={Link} className='btn bg-primary text-accent' onClick={handleAppointment}>Get started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTerms;
