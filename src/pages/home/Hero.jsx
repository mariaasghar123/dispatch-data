import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-black min-h-[90vh] flex items-center">
      {/* Background Image */}
      <img
        src="/media/images/Group 20.png"
        alt="Trucking Services"
        className="absolute inset-0 w-full h-full object-cover mt-10"
      />
      {/* White overlay (only small screens) */}
      <div className="absolute inset-0 bg-white/40 lg:hidden"></div>
      {/* Hero Content */}

      <div className="relative z-10 text-left px-4 sm:px-6 md:px-10 lg:pl-40 w-full sm:w-[90%] md:w-3/4 lg:w-full ">
        {/* Heading */}
        <h1
          className="text-xl sm:text-3xl md:text-5xl lg:text-5xl font-thin font-archivo"
          style={{ letterSpacing: "8px" }}
        >
          Trucking Services
        </h1>

        {/* Sub Heading */}
        <p
          className="mt-4 font-bold font-archivo 
          text-lg sm:text-2xl md:text-4xl lg:text-[50px]"
        >
          We Deliver Your Goods Safe
        </p>

        {/* Paragraph */}
        <p className="mt-6 lg:w-2/4 text-2xl sm:mt-8 md:mt-10 text-sm sm:text-base md:text-lg lg:text-2xl  font-normal sm:w-[95%]">
          Trust us with your freight – our reliable trucking services will
          ensure timely and safe delivery of your goods. From local pick-ups to
          long-distance shipments, our expert team is dedicated to delivering
          your goods efficiently and effectively.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8 md:mt-10">
          <button className="px-6 sm:px-8 lg:px-10 text-base sm:text-lg md:text-xl py-3 sm:py-4 lg:py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition">
            Call: 123 1234 1234
          </button>
          <button className="bg-black text-base sm:text-lg md:text-xl font-bold text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 hover:bg-gray-800 transition">
            Get an Online Quote
          </button>
        </div>
      </div>
    </section>
  );
}
