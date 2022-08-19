import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "He services that I receive from DP is excellent. Dr. Herry and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.",
      location: "California",
      img: people1,
    },
    {
      _id: 2,
      name: "Merry Dawson",
      review:
        "Dr. Merry did a great job with my first ever health exam. She explained everything to me in a very clear manner. She was also kind and friendly. All of the staff was great – they were helpful, patient and helped with my insurance.",
      location: "NewYork",
      img: people2,
    },
    {
      _id: 3,
      name: "Wins perry",
      review:
        " Dr. perry is incredible. Not only has she taken great care of my health, but also she is lovely to speak with at every appointment. I highly recommend becoming her patient!",
      location: "Las Vegas",
      img: people3,
    },
  ];
  return (
    <div className="my-28 px-24">
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary">Testimonial</h1>
          <p className="text-4xl">What Our Patients Says</p>
        </div>
        <div>
          <img src={quote} alt="" className="w-48"/>
        </div>
      </div>
      <div className="review flex p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
