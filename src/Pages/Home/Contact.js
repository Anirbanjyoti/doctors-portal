import React from "react";
import bgBlue from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${bgBlue})`,
        backgroundSize: "contain",
        padding:"100px 0"
      }}
    >
      <div className="text-center">
        <h1 className="text-primary">Contact Us</h1>
        <p className="text-white text-4xl">Stay Connected with Us</p>
      </div>
      <div className="w-60 md:w-80 lg:w-96 m-auto text-center mt-2">
        <form>
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered input-info w-full my-5 h-14"
          />
          <br></br>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-info w-full h-14"
          />
          <br></br>
          <textarea
            className="textarea textarea-success w-full h-40 my-5"
            placeholder="Your Message"
          ></textarea>
          <br></br>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
