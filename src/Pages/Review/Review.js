import React from "react";

const Review = ({ review }) => {
  return (
    <div className="p-14 shadow m-5">
      <div className="mb-5">{review.review}</div>
      <div className="people grid grid-cols-1 md:grid-cols-2">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100">
            <img src={review.img} alt="" />
          </div>
        </div>
        <div className="lg:py-5 md:ml-5 lg:ml-[-25px]">
          <strong>{review.name}</strong>
          <p>{review.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
