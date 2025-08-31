import React from "react";

export default function About2() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-40 pt-40 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-0">
        

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-left mt-20">
          {/* Heading */}
          <h1
            className="text-xl sm:text-3xl md:text-5xl lg:text-3xl font-thin font-archivo"
            style={{ letterSpacing: "8px" }}>ABOUT US</h1>
          {/* Sub Heading */}
          <p className="mt- font-bold font-archivo text-lg sm:text-2xl md:text-4xl lg:text-[50px]">
            Top Team Carrier
          </p>
          <p className="mt-6 p-4 border-l-8 border-red-900 pl-4 lg:w-4/6 text-sm sm:mt-8 md:mt-10 sm:text-base md:text-lg lg:text-lg font-normal sm:w-[95%]" style={{backgroundColor:"#fcececff"}}>
            With so many years under their belt Top Team Carrier brings wisdom and innovation to the table. If you need a team this is the one for you!
          </p>
          {/* Paragraph */}
          <p className="mt-6 lg:w-4/6 text-sm sm:mt-8 md:mt-10 sm:text-base md:text-lg lg:text-lg font-normal sm:w-[95%]">
            Your go-to load transportation company. We’re here to give you the
            finest quality service, with safety, dependability, and long-term
            sustainability as core values. With a fleet of the best vehicles
            and a team of highly qualified employees and experienced drivers,
            load transportation service does not get any better than here at Top
            Team Carrier. We want your experience with us to be the most
            delightful and profitable you’ve ever had.
          </p>
         
        </div>
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="/media/images/trucks.png"
            alt="Trucking Services"
            className="w-full max-w-[606px] h-[393px] object-cover shadow-lg rounded-md"
          />

          
          {/* Overlay Cards */}
          <div className="absolute flex flex-col gap-4 top-[250px] left-1/2 -translate-x-1/2 lg:-left-10 lg:translate-x-0">
            {/* Card 3 */}
            <div
              className=""
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8 md:mt-10">
            <button
              className="w-full sm:w-auto p-2 max-w-[535px] sm:px-8 text-base sm:text-lg md:text-xl py-3 sm:py-4 lg:py-5 text-black font-semibold shadow-lg transition"
              style={{ backgroundColor: "rgba(228, 208, 119)" }}
            >
              2 decades of experience
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
