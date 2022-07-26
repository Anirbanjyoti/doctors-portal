import React from 'react';


const CardInfo = ({img, cardTitle, bgClass}) => {
    return (
      <section>
        <div className={`card lg:card-side bg-primary shadow-xl px-6 ${bgClass}`}>
  <figure><img src={img} alt="Album" /></figure>
  <div className="card-body text-white">
    <h2 className="card-title">{cardTitle}</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</section>
    );
};

export default CardInfo;