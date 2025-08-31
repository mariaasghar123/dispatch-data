import React from "react";

export default function Solution() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-40">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="/media/images/trucks.png"
            alt="Trucking Services"
            className="w-full max-w-[606px] h-[393px] object-cover shadow-lg"
          />

          
          {/* Overlay Cards */}
          <div className="absolute flex flex-col gap-4 top-[40px] left-1/2 -translate-x-1/2 lg:-left-10 lg:translate-x-0">
            {/* Card 1 */}
            <div
              className="flex gap-3 rounded items-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-base sm:text-lg">1800+</p>
                <p className="text-sm sm:text-base">Satisfied Customers</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex gap-3 rounded items-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-base sm:text-lg">24000+</p>
                <p className="text-sm sm:text-base">Customer Support</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex gap-3 rounded items-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="font-bold text-base sm:text-lg">10000+</p>
                <p className="text-sm sm:text-base">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-left">
          {/* Heading */}
          <p className="mt-4 font-bold font-archivo text-xl sm:text-2xl md:text-4xl lg:text-[50px] leading-tight">
            The Best Logistics Solutions For Your Business
          </p>

          {/* Paragraphs */}
          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-normal sm:w-[95%] lg:w-3/4">
            We pride ourselves in delivering the right solutions for all of our
            customers. Big or small, every business matters. Let us deliver your
            goods with swiftness and ease.
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl font-normal sm:w-[95%] lg:w-3/4">
            With more than 2 decades of experience we strive to venture into the
            future helping business deliver their products where they need to go
            so that everything moves without hesitation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 mt-8">
            <button className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition">
              Call: 123 1234 1234
            </button>
            <button className="bg-black font-bold text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 hover:bg-gray-800 transition">
              Get an Online Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
