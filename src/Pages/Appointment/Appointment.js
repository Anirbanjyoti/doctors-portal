import React, { useState } from "react";
import Footer from "../Shared/Footer/Footer";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-sm rounded-lg shadow-2xl"
            alt="images"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
<p>You have Selected: {format(date, "PP, pp")}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
