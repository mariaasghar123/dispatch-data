import React from 'react'

export default function About() {
  return (
    <div className="relative text-black min-h-[90vh] flex items-center">
      {/* Background Image */}
      <img
        src="/media/images/trucks.png"
        alt="Trucking Services"
        className="absolute inset-0 w-full h-full object-cover mt-10"
      />
      {/* White Overlay Box */}
      <div className="relative z-10 bg-white w-full max-w-[957px] h-auto border top-[130px] pb-8 mx-auto lg:mx-0 px-4 sm:px-6 md:px-8 lg:pl-40 mt-40 lg:mt-[280px]">
        <div className="text-left w-full sm:w-[90%] md:w-3/4 lg:w-full">
          {/* Heading */}
          <h1
            className="text-xl sm:text-3xl md:text-5xl lg:text-4xl font-thin font-archivo"
            style={{ letterSpacing: "8px" }}
          >
            ABOUT US
          </h1>
          {/* Sub Heading */}
          <p className="mt-4 font-bold font-archivo text-lg sm:text-2xl md:text-4xl lg:text-[50px]">
            Top Team Carrier
          </p>
          {/* Paragraph */}
          <p className="mt-6 lg:w-full text-sm sm:mt-8 md:mt-10 sm:text-base md:text-lg lg:text-lg font-normal sm:w-[95%]">
            Your go-to load transportation company. We’re here to give you the
            finest quality service, with safety, dependability, and long-term
            sustainability as core values. With a fleet of the best vehicles
            and a team of highly qualified employees and experienced drivers,
            load transportation service does not get any better than here at Top
            Team Carrier. We want your experience with us to be the most
            delightful and profitable you’ve ever had.
          </p>
          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8 md:mt-10">
            <button
              className="w-full sm:w-auto max-w-[535px] sm:px-8 text-base sm:text-lg md:text-xl py-3 sm:py-4 lg:py-5 text-black font-semibold shadow-lg transition"
              style={{ backgroundColor: "rgba(228, 208, 119, 0.4)" }}
            >
              2 decades of experience
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
