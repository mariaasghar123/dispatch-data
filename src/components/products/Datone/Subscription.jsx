import React from "react";

export default function Subscriptions() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Main Heading */}
          <h2 className="font-bold font-archivo text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-snug">
            The DAT One app is included in your subscription
          </h2>

          {/* Point 1 */}
          <h3 className="mt-6 text-lg sm:text-xl font-semibold">
            DAT One mobile combines 15 apps into one fast and easy set of tools
            to keep you loaded at higher rates.
          </h3>

          {/* Point 3 */}
          <p className="mt-6 mb-5 text-lg sm:text-xl text-gray-700 ">
            Grow your profits with reliable, trusted partners
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700  sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
            Compare offer rates to average market rates across all lanes. <br />{" "}
          </p>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-700 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
            Plan trips strategically with the trucker-centric map
          </p>
          <br />

          <p className=" text-sm sm:text-base md:text-lg text-gray-700 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
            Save up to $1,000 in monthly fuel costs with fuel highlights{" "}
          </p>
          <br />
        </div>
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/media/images/about1.png"
            alt="Trucking Services"
            className="w-full max-w-[600px] h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
