import React from "react";
import { motion } from "framer-motion";

export default function TrackingHero() {
  return (
    <div className="w-full h-[700px] bg-black mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-20">
      <div className="flex flex-col mt-20 lg:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src="/media/images/bgimage.png"
            alt="Trucking Services"
            className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          {/* Main Heading */}
          <h2 className="font-bold font-archivo text-2xl sm:text-3xl md:text-5xl lg:text-[55px] leading-tight text-blue-600">
            Trucker Tools Freight Tracking Solutions for Brokers
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
            Foster trust and give visibility in one carrier-friendly freight tracking solution.
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
            Explore Trucker Tools load tracking capabilities for your freight with a personalized demo, or learn more below.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-6">
            <button className="border border-blue-600 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
              Start Factoring Today
            </button>
            <button className="border border-blue-600 rounded-full bg-transparent px-6 py-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
