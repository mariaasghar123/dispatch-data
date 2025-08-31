import React from "react";

export default function FuelHero() {
  return (
    <div className="w-full h-auto bg-black mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-20">
      <div className="flex flex-col mt-10 lg:mt-20 lg:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/media/images/fuelcard.png"
            alt="Trucking Services"
            className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          {/* Main Heading */}
          <h2 className="font-bold font-archivo text-2xl sm:text-3xl md:text-5xl lg:text-[55px] leading-tight text-white">
            A new way to save at the pump
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
            The new DAT One Fuel Card is coming soon, with more ways to unlock the best deals on diesel.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-6">
            <button className="border border-blue-600 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
