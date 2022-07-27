import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({date, setDate}) => {
  
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl ml-24"
          alt="images"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have Selected: {format(date, "PP, pp")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
