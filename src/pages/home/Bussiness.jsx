import React from 'react'

export default function Bussiness() {
  return (
    <div>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
       
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 lg:ml-10">
          {/* Heading */}

          {/* Paragraphs */}
          <p className="mt-6 text-sm sm:text-base md:text-lg font-normal sm:w-[95%] lg:w-3/4 py-10 px-10" style={{backgroundColor:"#F2F0E6"}}>
          <h1 className='text-2xl font-bold'>Pre-Planning & Proactive Business</h1>
            With pre-planning and proactive measures, we can prepare for any  situation and avoid having our trucks from braking down and leaving our drivers stuck in the middle of nowhere. This way we can stay ahead of the competition and deliver all our customers goods quickly and safety. We are dedicated to solving all issues as quickly as possible and communicating facts to all invested parties.
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-lg font-normal sm:w-[95%] lg:w-3/4 py-10 px-10" style={{backgroundColor:"#F2F0E6"}}>
          <h1 className='text-2xl font-bold'>Planning Ahead And Routing A Better Future</h1>
            Our dispatch team will pre route all deliveries allowing for safe and quick passage. Our drivers have access to fuel pricing throughout the USA which allows us to drive more and stay competative. Reducing fuel consumption is important for our drivers and so we inform them of all costs ahead of the trips. Tolls tend to rise the cost of transportation and because of this we have implemented toll passes that drive down costs. Additionally we keep our eyes on weather conditions and all forms of national holidays in order to prepare better so that our drivers never get stuck on the road.
          </p>

        </div>

         {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="/media/images/trucks.png"
            alt="Trucking Services"
            className="w-full max-w-[566px] h-[766px] object-cover shadow-lg"
          />

          
          {/* Overlay Cards */}
          <div className="absolute flex flex-col gap-4 top-[200px] left-1/2 -translate-x-1/2 lg:-left-2 lg:translate-x-0">
            {/* Card 1 */}
            <div
              className="flex flex-col gap-3 rounded items-center justify-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Online Plaining</p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="flex flex-col gap-3 rounded items-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Easy Consultations</p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="flex flex-col gap-3 rounded items-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Routing</p>
              </div>
              </div>
               {/* Card 4 */}
            <div
              className="flex flex-col  gap-3 rounded items-center border border-orange-200 bg-white/60 backdrop-blur-md 
                  w-[300px] sm:w-[350px] lg:w-[380px] h-[80px] sm:h-[90px] px-4 py-2 shadow-md"
            >
              <img
                src="/media/images/Frame 16.png"
                alt=""
                className="w-10 h-10"
              />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold">Download Plan</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}
