import React from 'react';
import chair from '../../assets/images/chair.png'
import Button from '../Shared/Button';

const HomeHero = () => {
    return (
      <section>
        <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="images"
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad animi necessitatibus enim perspiciatis maiores facere minus perferendis nulla consequatur error!
          </p>
          <Button>Get started</Button>
        </div>
      </div>
    </div>
    </section>
    );
};

export default HomeHero;