import React from "react";
import { motion } from "framer-motion";

export default function HeroReview({
  imageSrc,
  altText,
  heading,
  description1,
  description2,
  primaryBtnText,
  secondaryBtnText,
}) {
  return (
    <div className="w-full h-[700px] bg-black mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-20">
      <div className="flex flex-col mt-20 lg:flex-row items-center gap-10">
        
        {/* Left Side - Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.img
            src={imageSrc}
            alt={altText}
            className="w-full max-w-[600px] h-auto object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        {/* Right Side - Content with staggered animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-bold font-archivo text-2xl sm:text-3xl md:text-5xl lg:text-[75px] leading-tight text-blue-600"
          >
            {heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0"
          >
            {description1}
          </motion.p>

          {description2 && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0"
            >
              {description2}
            </motion.p>
          )}

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-6"
          >
            {primaryBtnText && (
              <button className="border border-blue-600 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
                {primaryBtnText}
              </button>
            )}
            {secondaryBtnText && (
              <button className="border border-blue-600 rounded-full bg-transparent px-6 py-3 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                {secondaryBtnText}
              </button>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
