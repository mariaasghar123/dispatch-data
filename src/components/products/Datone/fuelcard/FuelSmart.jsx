import React from "react";

export default function FuelSmart() {
  return (
    <div className="w-full mt-20 px-4 sm:px-6 lg:px-20 mb-20">
      {/* Section 1 */}
      <h1 className="text-[#71797E] font-bold text-4xl sm:text-5xl lg:text-4xl text-center mb-12">
        Find load with the DAT One app.
      </h1>

      <p className="max-w-3xl mx-auto text-center text-gray-600 text-base sm:text-lg mb-12">
        Plus everything you need to plan your trips and control expenses.
      </p>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/media/images/trackcing.png"
            alt="Trucking Services"
            className="w-full max-w-[550px] h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 space-y-8 text-gray-800">
          {[
            {
              title: "Find nearby loads",
              desc: "Cut your deadhead miles down to size with access to the most loads in the industry.",
            },
            {
              title: "Take a break",
              desc: "Find nearby parking, Walmarts, trucker-friendly hotels, and more, all in one place.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h2 className="flex items-center font-bold text-xl sm:text-2xl gap-3">
                <img
                  src="/media/images/checked.png"
                  alt=""
                  className="w-[22px] sm:w-[40px]"
                />
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
