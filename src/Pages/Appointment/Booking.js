import React from "react";

const Booking = ({ booking, setTreatment }) => {
  const { name, slots } = booking;
  console.log(slots);

  return (
    <div class="card w-96 bg-base-100 shadow-xl m-12">
      <div class="card-body">
        <h2 class="card-title justify-center">{name}</h2>
        <p>
          {slots.length ? (
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
        <div class="card-actions justify-center">
          <label
            for="booking-modal"
            class="btn btn-secondary text-white uppercase"
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
