import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div className="pr-12">
      <h1>my Appointment : {appointments.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>T-ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
          {
            appointments.map(a=>
            <tr>
              <th>T-{a.treatmentId}</th>
              <td>{a.patientName}</td>
              <td>{a.date}</td>
              <td>{a.slot}</td>
              <td>{a.treatment}</td>
            </tr>
            )
          }
            

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
