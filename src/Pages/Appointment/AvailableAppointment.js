import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date, setDate }) => {
  const [bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <p className="text-xl text-secondary text-center">
        {" "}
        Available Appointment of {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            setTreatment={setTreatment}
          ></Booking>
        ))}
      </div>
      {treatment && <BookingModal treatment={treatment}></BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
