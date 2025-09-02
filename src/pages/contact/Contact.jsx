"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
// Reusable Flip Card Component
function FlipCard({ role, desc, requirements }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-xs sm:max-w-sm h-80 sm:h-96 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front Side */}
      <div
        className="absolute w-full h-full bg-gray-300 rounded-2xl shadow-2xl flex flex-col justify-center items-center border border-gray-200 px-4"
        style={{ backfaceVisibility: "hidden" }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-indigo-800">{role}</h2>
        <p className="mt-2 text-gray-600 text-center text-sm sm:text-base">
          {desc}
        </p>
      </div>

      {/* Back Side */}
      <div
        className="absolute w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-2xl text-white flex flex-col justify-center items-center p-4 sm:p-6"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <h2 className="text-lg sm:text-xl font-bold">Requirements</h2>
        <ul className="mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-200 text-left">
          {requirements.map((req, i) => (
            <li key={i}>⚡ {req}</li>
          ))}
        </ul>
        {/* Apply Button with Link */}
        <Link to={`/apply?role=${encodeURIComponent(role)}`}>
          <button className="mt-4 sm:mt-6 px-4 sm:px-5 py-2 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-200 transition text-sm sm:text-base">
            Apply Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Contact() {
  const careers = [
    {
      role: "Delivery Rider",
      desc: "Deliver packages safely and on time.",
      requirements: ["Valid Driving License", "Own Bike", "Good Communication"],
    },
    {
      role: "Logistics Manager",
      desc: "Manage delivery routes and schedules.",
      requirements: ["3+ Years Experience", "Leadership Skills", "Problem Solving"],
    },
    {
      role: "Warehouse Staff",
      desc: "Handle packaging and inventory.",
      requirements: ["Organized", "Team Player", "Basic Computer Skills"],
    },
    {
      role: "Dispatcher",
      desc: "Assign delivery tasks to riders.",
      requirements: ["Strong Coordination", "Time Management", "Tech Friendly"],
    },
    {
      role: "Customer Support",
      desc: "Assist customers with delivery queries.",
      requirements: ["Good Communication", "Problem Solving", "Patience"],
    },
    {
      role: "Operations Supervisor",
      desc: "Oversee daily delivery operations.",
      requirements: ["2+ Years Experience", "Leadership", "Decision Making"],
    },
  ];

  return (
    <div className="min-h-screen mt-0 sm:pt-40 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-black p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12">
        Details
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 w-full max-w-6xl">
        {careers.map((career, index) => (
          <FlipCard key={index} {...career} />
        ))}
      </div>
    </div>
  );
}