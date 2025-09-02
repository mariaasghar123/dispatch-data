import React from "react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText("12312341234")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 sec baad hide ho jaye
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

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
<button
        className="px-6 sm:px-8 lg:px-10 text-base sm:text-lg md:text-xl py-3 sm:py-4 lg:py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition "
        onClick={handleCopy}
      >
        Number: 123 1234 1234
      </button>

      {/* Temporary message */}
      {copied && (
        <div className="fixed top-4 mt-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-3 shadow-lg py-2 z-1000 shadow-md animate-fade">
          Number copied ✅
        </div>
      )}

          <button 
  className="bg-black text-base sm:text-lg md:text-xl font-bold text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 hover:bg-gray-800 transition"
  onClick={() => window.location.href = "/contact"}
>
  Get an Online Quote
</button>

        </div>
      </div>
    </section>
  );
}
