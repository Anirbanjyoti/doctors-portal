import { format } from "date-fns";
import React, { useState } from "react";
import Booking from "./Booking";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";

const AvailableAppointment = ({ date }) => {
  // const [bookings, setBookings] = useState([]);
  const [treatment, setTreatment] = useState(null);

  
  const formattedDate = date && format(date, 'PP');
  const { data: bookings, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then(res => res.json()))

  if(isLoading){
      return <Loading></Loading>
  }
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // }, [formattedDate]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/service")
  //     .then((res) => res.json())
  //     .then((data) => setBookings(data));
  // }, []);
  return (
    <div>
      <p className="text-xl text-secondary text-center">
        {" "}
        Available Appointment of {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        {bookings?.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            setTreatment={setTreatment}
          ></Booking>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
