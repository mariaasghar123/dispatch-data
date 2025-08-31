import React from "react";

export default function Team() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-10 mt-0 pt-0 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side - Images */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative">
          
          {/* For small & medium screens (stacked images) */}
          <div className="flex flex-col gap-4 lg:hidden">
            <img
              src="/media/images/about2.png"
              alt="Trucking Services"
              className="w-full max-w-[500px] h-auto object-cover shadow-lg rounded-md"
            />
            <img
              src="/media/images/about1.png"
              alt="Trucking Services"
              className="w-full max-w-[500px] h-auto object-cover shadow-lg rounded-md"
            />
          </div>

          {/* For large screens (overlapping images) */}
          <div className="hidden lg:block relative">
            <img
              src="/media/images/about2.png"
              alt="Trucking Services"
              className="w-full max-w-[606px] h-[393px] object-cover shadow-lg rounded-md"
            />
            <img
              src="/media/images/about1.png"
              alt="Trucking Services"
              className="w-full max-w-[606px] h-[393px] object-cover shadow-lg rounded-md absolute top-[200px] left-[200px]"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Heading 1 */}
          <p className="font-bold mt-10 font-archivo text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
            Team Players
          </p>
          <p className="w-full sm:w-4/5 lg:w-3/5 mt-5 text-base sm:text-lg font-archivo">
            Top Team Carrier prides itself on its work ethic. We work as a team and we strive to improve as one. At Top Team Carrier we all of our departments as one. Our drivers and dispatchers work together to bring innovation and efficiency to the table.
          </p>
          <p
            className="mt-6 p-4 font-archivo border-l-8 border-red-900 pl-4 lg:w-4/6 text-sm sm:text-base md:text-lg font-normal"
            style={{ backgroundColor: "#fcf7f7ff" }}
          >
            Whenever I call dispatch there is always a friendly voice greeting me. My team takes care of me and my needs.
          </p>

          {/* Heading 2 */}
          <p className="mt-10 font-bold font-archivo text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
            Digital Communication
          </p>
          <p className="w-full sm:w-4/5 lg:w-3/5 mt-5 text-base sm:text-lg font-archivo">
            Modern systems have helped us grow as a company. Our team uses the newest technology in order to stay in contact with our drivers throughout their journey. We have implemented modern tracking systems and mobile applications in order to deliver the best possible experience.
          </p>
          <p
            className="mt-6 p-4 font-archivo border-l-8 border-red-900 pl-4 lg:w-4/6 text-sm sm:text-base md:text-lg font-normal"
            style={{ backgroundColor: "#f8f6f6ff" }}
          >
            It doesn’t matter what time of day it is, there is always someone at the office to answer the phone. I only need to message the office and they respond immediately.
          </p>
        </div>
      </div>
    </div>
  );
}
