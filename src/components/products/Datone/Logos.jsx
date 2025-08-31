import React from "react";
import { motion } from "framer-motion";

export default function Logos() {
  const logos = [
    { src: "/media/images/G2-Best-Software_2025.svg", w: "w-[200px]" },
    { src: "/media/images/grid-leader-summer25.svg", w: "w-[100px]" },
    { src: "/media/images/fastest-implementation-summer25.svg", w: "w-[100px]" },
    { src: "/media/images/Pros_to_know.svg", w: "w-[300px]" },
    { src: "/media/images/roi-summer25.svg", w: "w-[100px]" },
    { src: "/media/images/top_100_logo2025.svg", w: "w-[200px]" },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          What our customers are saying
        </h1>

        {/* Sub Heading */}
        <p className="mt-6 text-lg sm:text-xl font-semibold">
          "it costs you more money not to have these tools. With DAT, there's
          very little time my truck is sitting."
        </p>

        {/* Divider */}
        <motion.p
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md border-t-2 border border-blue-400"
        ></motion.p>

        <p className="mt-4 text-gray-200 font-medium">Need Help Deciding?</p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-blue-900 text-white rounded-full font-semibold text-lg shadow-md hover:bg-blue-800 transition"
        >
          Find the Carrier Plan
        </motion.button>
         <p className="mt-6 text-lg sm:text-xl font-semibold">
         Award-Winning Freight Technology

        </p>

        {/* Logos - Infinite Scroll */}
        <div className="relative w-full overflow-hidden mt-20">
          <motion.div
            className="flex gap-20"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Duplicate logos for smooth infinite loop */}
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt="logo"
                className={`${logo.w} object-contain`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
