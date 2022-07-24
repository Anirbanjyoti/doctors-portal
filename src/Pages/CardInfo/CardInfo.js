import React from 'react';


const CardInfo = ({img, cardTitle, bgClass}) => {
    return (
        <div className={`card lg:card-side bg-primary shadow-xl px-5 ${bgClass}`}>
  <figure><img src={img} alt="Album" /></figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    );
};

export default CardInfo;