import React from "react";

export default function Drivers() {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-col custom-flex items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-start relative">
          <img
            src="/media/images/driver.png"
            alt="Trucking Services"
            className="w-full max-w-[566px] h-[766px] object-cover shadow-lg"
          />

          {/* Overlay Cards */}
          <div className="absolute flex flex-col gap-4 top-[150px] left-1/2 -translate-x-1/2 lg:left-[150px] lg:translate-x-0">
            {/* Card 1 */}
            <div
              className="flex flex-col gap-3 rounded items-center justify-center border bg-white/60 backdrop-blur-md 
                   sm:w-[400px] w-[500px] md-[400px] lg:w-[580px]  lg:h-[480px] sm:h-[600px] px-4 shadow-md"
            >
              <div>
                <p className="text-4xl sm:text-2xl lg:text-4xl font-bold mb-10">
                  CDL QUALIFICATIONS
                </p>
                <p className="text-lg">
                  Top Team Carrier offers services thoughout the 48 states
                  within the continental United States. Our drivers are always
                  ready to move freight wherever necessary.
                </p>
                <p className="text-lg mt-4">
                  With the implementation of new equipment, modern technological
                  systems and an excellent dispatch team, Top Team Carrier
                  strives to keep its drivers on the road earning with as little
                  down time as possible.
                </p>
                <button className="px-20 py-4 bg-black mt-10 text-white font-semibold text-lg">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Content */}
        <div className=" md:w-3/5 xl:w-3/5 ml-10">
          {/* Heading */}

          {/* Paragraphs */}
          <p className=" text-sm sm:text-base md:text-lg font-normal sm:w-[95%] lg:w-3/4 py-10 px-10 border border-black rounded">
            <h1 className="text-2xl font-medium mb-4">
              Qualifications for CDL Drivers
            </h1>
            Top Team Carrier hiring standards require all driver applicants to
            be a minimum of 25 years of age and have a minimum of 2 years
            verifiable tractor trailer driving experience within the United
            States and/or Canada in similar equipment. (FMCSR, Sec. 391.11 (1)).
            Candidates with more than six jobs in the last three years could be
            rejected.
            <p className="mt-6">
              Driver applicants with 3 or fewer chargeable or preventable motor
              vehicle accidents within the past 3 years will be considered for
              employment. Because of Top Team Carrier’s commitment to safety,
              driver applicants who fail to meet the above standard will not be
              considered for employment by the company.
            </p>
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-medium sm:w-[95%] lg:w-3/4 border border-black rounded py-4 px-10">
            Disqualifications
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-medium sm:w-[95%] lg:w-3/4 border border-black rounded py-4 px-10">
            Home Time Guaranteed
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-medium sm:w-[95%] lg:w-3/4 border border-black rounded py-4 px-10">
            Weekly Payments
          </p>
        </div>
      </div>
    </div>
  );
}
