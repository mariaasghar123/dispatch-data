import React from "react";
import { motion } from "framer-motion";

export default function HeroSection({
  bgImage,
  headingText = "Default Heading",
  subHeading = "We’d love to hear from you",
  paragraph1 = "The freedom to create products people love",
  paragraph2 = "Join a team where innovation, passion, and dedication are celebrated. 🚀"
}) {
  // Letter animation
  const letterAnimation = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 }
    }
  };

  // Container for staggering letters
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // Fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  return (
    <section className="relative text-white flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.img
        src={bgImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-[700px] object-cover mt-10"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 mt-40 md:mt-60 lg:mt-60 xl:mt-80 
                   text-left px-4 sm:px-6 md:px-10 lg:pl-40 
                   w-full sm:w-[90%] md:w-3/4 lg:w-full"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Animated Heading */}
        <motion.h1
          className="font-bold font-archivo 
            text-3xl sm:text-4xl md:text-5xl lg:text-[60px] flex flex-wrap"
          variants={container}
        >
          {headingText.split("").map((char, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-heading */}
        <motion.h2
          className="mt-6 mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-200"
          variants={fadeInUp}
        >
          {subHeading}
        </motion.h2>

        {/* Paragraphs */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          {paragraph1}
        </motion.p>

        <motion.p
          className="mt-4 mb-40 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl"
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
        >
          {paragraph2}
        </motion.p>
      </motion.div>
    </section>
  );
}
