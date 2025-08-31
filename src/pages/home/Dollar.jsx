import React from 'react'

export default function Dollar() {
  return (
    <div className="w-full relative h-[400px]">
      {/* Background Image */}
      <img
        src="/media/images/fram.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Text and Button Container */}
      <div className="absolute inset-0 flex flex-col sm:flex-row justify-between items-center text-white px-6 sm:px-20 md:px-40 lg:px-60 z-10">
        <div className="flex flex-col items-start mb-6 sm:mb-0 text-center sm:text-left">
          <p className="text-3xl sm:text-xl md:text-4xl font-bold">
            Lorem ipsum dolor
          </p>
          <p className="text-md sm:text-lg md:text-xl">
            sit amet, consectetur adipiscing elit
          </p>
        </div>
        <button className="bg-black text-base sm:text-lg md:text-xl font-bold text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 hover:bg-gray-800 transition">
          Get an Online Quote
        </button>
      </div>
    </div>
  )
}
