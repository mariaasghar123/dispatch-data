import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero3() {
  const text = "About Us";

  // Variants for each letter
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 8 }
    }
  };

  return (
    <section className="relative text-white flex items-center">
      {/* Background Image */}
      <img
        src="/media/images/frametruck.png"
        alt="Trucking Services"
        className="absolute inset-0 w-full h-[563px] object-cover mt-10"
      />
      {/* White overlay (only small screens) */}
      <div className="absolute inset-0 bg-black/0 lg:hidden"></div>

      {/* Hero Content */}
      <div className="relative z-10 mt-40 md:mt-60 lg:mt-60 xl:mt-80 text-left px-4 sm:px-6 md:px-10 lg:pl-40 w-full sm:w-[90%] md:w-3/4 lg:w-full ">
        {/* Animated Heading */}
        <motion.p
          className="mt-4 font-bold font-archivo 
            text-2xl sm:text-2xl md:text-4xl lg:text-[50px] flex flex-wrap"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
