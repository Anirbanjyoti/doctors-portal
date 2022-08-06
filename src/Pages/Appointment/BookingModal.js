import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);

  const formattedDate = format(date, 'PP');
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    // console.log(slot);
    // Booking info adding to backend mongodb
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if(data.success){
          toast(`Appointment is set to ${formattedDate} at ${slot}`)
        }
        else{
          toast.error(`Already have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)     
        }
        // For Automatic update using react query
        refetch();
        // to close the modal
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking For : {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-3"
          >
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} slot={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              disabled
              // if show the error 'a component is changing an uncontrolled input to be controlled. this is likely caused by the value changing from undefined to defined value' then use || '' for removing the error.
              value={user?.displayName || ""}
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              disabled
              // if show the error 'a component is changing an uncontrolled input to be controlled. this is likely caused by the value changing from undefined to defined value' then use || '' for removing the error.
              value={user?.email || ""}
              type="email"
              placeholder="Email Address"
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              htmlFor="booking-modal"
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
