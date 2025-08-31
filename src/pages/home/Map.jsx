import React from 'react'

export default function Map() {
  return (
    <div className="w-full h-[693px] bg-red-900 mb-10 relative flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center">
      <img
        src="/media/images/image 7.png"
        alt="Service Area Map"
        className="w-[921px] h-[586px] object-contain"
        style={{
          filter: "hue-rotate(100deg)", // blue to red shift
          zIndex: 0,
        }}
      />
        </div>
      {/* Content Container */}
      <div className="relative z-10 flex flex-col flex-grow  items-center text-white text-center px-4">
        <h1 className="text-4xl font-bold mb-4 mt-4">Our Service Areas</h1>
        <p className="max-w-3xl mx-auto">
          We are available every work day from 9am-5pm CST. Visit our location or call us to schedule an appointment.
        </p>
      </div>

      {/* Buttons Container */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center items-center mb-6">
        <button className="px-6 sm:px-8 lg:px-10 text-base sm:text-lg md:text-xl py-3 sm:py-4 lg:py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition">
          Call: 123 1234 1234
        </button>
        <button className="bg-black text-base sm:text-lg md:text-xl font-bold text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 hover:bg-gray-800 transition">
          Get an Online Quote
        </button>
      </div>
    </div>
  )
}
