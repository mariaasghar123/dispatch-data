import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero2() {
  // Parent variant for stagger
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  // Child variant (each element animation)
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative text-white flex items-center">
      {/* Background Image */}
      <img
        src="/media/images/frametruck.png"
        alt="Trucking Services"
        className="absolute inset-0 w-full h-[563px] object-cover mt-10"
      />
      {/* Black overlay (full width for small screens) */}
      <div className="absolute inset-0 bg-black/40 lg:hidden"></div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 mt-40 md:mt-60 lg:mt-60 xl:mt-80 
                   text-left px-4 sm:px-6 md:px-10 lg:pl-40 
                   w-full sm:w-[90%] md:w-3/4 lg:w-full"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-xl sm:text-3xl md:text-5xl lg:text-5xl 
                     font-thin font-archivo"
          style={{ letterSpacing: "8px" }}
          variants={fadeUp}
        >
          Services
        </motion.h1>

        {/* Sub Heading */}
        <motion.p
          className="mt-4 font-bold font-archivo 
                     text-lg sm:text-2xl md:text-4xl mt-5 mb-5 lg:text-[50px]"
          variants={fadeUp}
        >
          Transportation Solutions
        </motion.p>

        {/* Paragraph */}
        <motion.p
          className="mt-6 mb-4 lg:w-2/4 text-xl sm:mt-8 md:mt-10 lg:mt-0 
                     text-sm sm:text-base md:text-lg lg:text-xl font-normal sm:w-[95%]"
          variants={fadeUp}
        >
          We offer a wide range of services, from carrier capacity to training. 
          If you have any questions please reach out to us.
        </motion.p>

        <hr />

        {/* Links Section */}
        <motion.div
          className="flex flex-col flex-wrap sm:flex-row gap-4 sm:gap-6 
                     text-white items-center justify-center 
                     text-base sm:text-lg sm:mt-16 md:mt-5 xl:mt-5"
          variants={container}
        >
          {["Drop & Hooks", "Dedicated", "Over the Road", "Expedited", "Entertainment", "Logistics Solutions"].map(
            (item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link to="" className="border-b hover:text-gray-300 transition">
                  {item}
                </Link>
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
