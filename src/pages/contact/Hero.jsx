import React from "react";
import { motion } from "framer-motion";

export default function Hero4() {
  const text = "Contact Us";

  // Variants for each letter (heading)
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 8 }
    }
  };

  // Variants for subheading / paragraph
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative text-white flex items-center">
      {/* Background Image */}
      <img
        src="/media/images/contact1.jpg"
        alt="Trucking Services"
        className="absolute inset-0 w-full h-[700px] object-cover mt-10"
      />

      {/* Black Overlay covering full image */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Hero Content */}
      <div
        className="relative z-10 mt-40 md:mt-60 lg:mt-60 xl:mt-80 
                 text-left px-4 sm:px-6 md:px-10 lg:pl-40 
                 w-full sm:w-[90%] md:w-3/4 lg:w-full "
      >
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

        {/* Sub-heading */}
        <motion.h2
          className="mt-6 mb-20 text-lg sm:text-xl md:text-2xl font-semibold text-gray-200"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          We’d love to hear from you
        </motion.h2>
         <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >
            Start Your Dream Job Today and Contact Us
        </motion.p>
        {/* Paragraph */}
        <motion.p
          className="mt-4 mb-40 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.3 }}
        >
          Whether you have a question about our services, pricing, or anything else, 
          our team is ready to answer all your questions.
        </motion.p>
      </div>
    </section>
  );
}
