import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import chair from '../../assets/images/chair.png'

const HomeHero = () => {
  const navigate = useNavigate();
  const handleAppointment=e=>{
    e.preventDefault();
    navigate('/appointment')
  }
    return (
      <section>
        <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="images"
        />
        <div>
          <h1 className="text-5xl font-bold">Efficient Doctor Patient Portal!</h1>
          <p className="py-6 pr-10">
          We here propose a doctor patient handling, managing system that helps doctors in their work and also patients to book doctor appointments and view medical progress. The system allows doctors to manage their booking slots online. Patients are allowed to book empty slots online and those slots are reserved in their name. 
          </p>
          <a href={Link} className='btn bg-primary text-accent' onClick={handleAppointment}>Get started</a>
        </div>
      </div>
    </div>
    </section>
    );
};

export default HomeHero;