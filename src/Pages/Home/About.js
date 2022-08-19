import React from "react";
import { Link, useNavigate } from "react-router-dom";
import docImg from "../../assets/images/DSC_6409-1.jpg";

const About = () => {
    const navigate = useNavigate();
    const handleAppointment=e=>{
      e.preventDefault();
      navigate('/appointment')
    }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src={docImg}
            alt="images"
            class="rounded-lg shadow-2xl"
          />
          <div className="px-10 text-justify">
            <h1 class="text-5xl font-bold">Dr. Holleh Tajalli!!</h1>
            <p class="py-6">
              I'm Dr. Holleh Tajalli! I'm a dentist who has long wanted to
              create a fun environment to deliver the best dental care to YOU! I
              studied at the University of Maryland School of Dentistry in
              downtown Baltimore. I loved Baltimore so much, I never left! I've
              worked in many offices around Maryland and am very excited to
              finally be able to service our city of Baltimore! Over the last
              few years, I have been often asked by members of our community
              where my practice is located so that they can come see me, but I
              simply worked too far away. That's when I knew I had to make a
              change, to build a beautiful office and environment with the
              latest technology that puts the patient experience first. Come see
              the difference! If you are looking to brighten and enhance your
              smile, please don’t hesitate to contact us today at (410)
              921-0097!
            </p>
            <a href={Link} className='btn bg-primary text-accent' onClick={handleAppointment}>Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
