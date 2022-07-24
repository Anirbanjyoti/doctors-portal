import React from 'react';
import chair from '../../assets/images/chair.png'

const HomeHero = () => {
    return (
        <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="images"
        />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p class="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad animi necessitatibus enim perspiciatis maiores facere minus perferendis nulla consequatur error!
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default HomeHero;