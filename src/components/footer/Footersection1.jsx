import React from 'react';

export default function Footersection() {
  return (
    <div className="bg-[#FCFCEB] min-h-[400px] flex flex-col gap-40 lg:flex-row justify-center items-stretch gap-10 px-10 py-16 relative">
      
      {/* Background Image */}
      <img 
        src="/media/images/vector.svg" 
        alt="Background Vector"
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ userSelect: 'none' }}
      />

      {/* Left Side */}
      <div className="bg-white p-6 sm:p-10 rounded shadow lg:w-[560px]  relative z-20 flex flex-col justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center lg:text-left">
          Let Us Mend a Helping Hand
        </h2>
        <p className="mb-8 text-sm sm:text-base leading-relaxed text-center lg:text-left">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>

        <div className="flex flex-col gap-4 mb-8">
          {/* Phone */}
          <div className="flex items-center gap-4 bg-gray-200 p-4 sm:p-6 border border-gray-500 rounded">
            <div className="w-5 h-5 rounded-full bg-[#AA8863]"></div>
            <span className="text-base sm:text-lg font-medium">+1 (000) 000-0000</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 bg-gray-200 p-4 border border-gray-500 rounded">
            <div className="w-5 h-5 rounded-full bg-[#AA8863]"></div>
            <span className="text-base sm:text-lg font-medium">info@xyz.com</span>
          </div>
        </div>

        <button className="bg-[#AA8863] text-white px-6 sm:px-10 py-3 font-semibold rounded hover:bg-[#8B724C] transition w-full max-w-xs mx-auto lg:mx-0">
          Apply Now
        </button>
      </div>

      {/* Right Side Form */}
      <form className="w-50%  flex flex-col gap-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
          <input
            type="text"
            placeholder="First Name"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-black rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
          />
        </div>
        <textarea
          rows="5"
          placeholder="Message"
          className="border border-black rounded px-4 py-3 mt-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#AA8863]"
        />

        <button
          type="submit"
          className="bg-black text-white py-3 font-semibold mt-6 rounded hover:bg-gray-800 transition max-w-xs mx-auto lg:mx-0 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
