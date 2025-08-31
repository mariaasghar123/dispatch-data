import React from "react";

export default function CardSection() {
  return (
    <div className="flex justify-center rounded border border-orange-100 items-center p-4" style={{ backgroundColor: "rgba(209,183,70,0.1)" }}>
      <div
        className="w-full max-w-[412px] min-w-[280px]  rounded-2xl text-black flex flex-col justify-center items-center p-6 relative"
        style={{
        //   height: "auto", // auto height for responsiveness
          backgroundImage: "url('/media/images/Frame 6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 rounded-2xl"></div>
        <div className="relative z-10">
          <img
            src="/media/images/Polygon 4.png"
            alt="Polygon"
            className="w-10 h-10 mb-4 "
          />
          <h1 className="text-xl font-bold mt-2">PrePlanning</h1>
          <p className="text-lg mt-2">
            Thoroughly evaluating all aspects of a trip before rolling onto the road to minimize risks, maximize efficiency, and achieve optimal results.
          </p>
        </div>
      </div>
    </div>
  );
}
