import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots, price } = booking;

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-12">
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p>
          {slots.length 
            ? (
            <span>{slots[0]}</span>
            ) : (
            <span className="text-red-500">Not Available Try Another Date</span>
          )}
        </p>
        <p>
          {slots.length}
          {slots.length > 1 ? " spaces " : " space "}
          available
        </p>
        <small>Price: ${price}</small>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            className="btn btn-secondary text-white uppercase"
            onClick={() => setTreatment(booking)}
            disabled={slots.length === 0}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Booking;
