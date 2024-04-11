import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gray-800 text-white py-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to our Online Coaching</h1>
        <p className="text-lg mb-8">Unlock your potential with our expert instructors</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
