import React from "react";
import { motion } from "framer-motion";

export default function Solution() {
  return (
    <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side - Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <motion.img
            src="/media/images/truck3.jpg"
            alt="Trucking Services"
            className="w-full max-w-[600px] h-auto object-cover rounded-xl shadow-lg"
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
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-bold font-archivo text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-snug"
          >
            The First Choice for Carriers
          </motion.h2>

          {/* Point 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl font-semibold">
              Find the best loads first
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Find 2.5X more loads than any other load board with 644,500 loads posted daily.
            </p>
          </motion.div>

          {/* Point 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl font-semibold">
              Control your costs and maximize your revenue
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Cover every step of running your business in one place, from managing loads to planning trips to getting paid.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl font-semibold">
              Grow your profits with reliable, trusted partners
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Increase your negotiating power with the most accurate market rates based on $1 trillion in actual freight transactions, plus company reviews and credit scores.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
