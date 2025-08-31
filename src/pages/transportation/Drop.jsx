import React from "react";

export default function Drop1({heading}) {
  return (
    <div className="w-full mt-20 px-4 sm:px-6 lg:px-10 mb-10">
      <div className="flex flex-col lg:flex-row custom-flex justify-center items-center gap-10">
        

        {/* Right Side - Content */}
        <div className="w-full md:w-3/5 xl:w-3/5 lg:ml-16 mt-10 lg:mt-0">
          {/* Heading */}
          <h1 className="text-3xl font-semibold mb-5">{heading}</h1>
          <p className="mb-5 mt-5 w-full lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum.
          </p>
          {/* Paragraphs with internal flex */}
          <div className="border border-black rounded py-10 px-10 w-full lg:w-3/4 text-sm sm:text-base md:text-lg font-normal">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-medium mb-4">Lorem ipsum dolor sit amet</h1>
              <p className="text-5xl font-bold">-</p>
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
          </div>

          <div className="mt-6 border border-black rounded py-4 px-10 w-full lg:w-3/4 text-sm sm:text-base md:text-lg font-medium">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium mb-4">Lorem ipsum dolor sit amet</h1>
              <p className="text-3xl font-bold">+</p>
            </div>
          </div>

          <div className="mt-6 border border-black rounded py-4 px-10 w-full lg:w-3/4 text-sm sm:text-base md:text-lg font-medium">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-medium mb-4">Lorem ipsum dolor sit amet</h1>
              <p className="text-3xl font-bold">+</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 mt-6 sm:mt-8 md:mt-10">
            <button className="px-6 sm:px-8 lg:px-10 text-base sm:text-lg md:text-xl py-3 sm:py-4 lg:py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition w-full sm:w-auto">
              Call: 123 1234 1234
            </button>
            <button className="bg-black text-base sm:text-lg md:text-xl font-bold text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-3 lg:py-4 hover:bg-gray-800 transition w-full sm:w-auto">
              Get an Online Quote
            </button>
          </div>
        </div>
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="/media/images/image 13.png"
            alt="Trucking Services"
            className="w-full max-w-[566px] h-auto lg:h-[766px] object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
