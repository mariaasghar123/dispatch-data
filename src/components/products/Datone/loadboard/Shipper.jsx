import React from "react";
import { motion } from "framer-motion";

export default function Shipper() {
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
            src="/media/images/load3.jpg"
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
            className="font-bold w-5/6 font-archivo text-2xl sm:text-3xl md:text-4xl lg:text-[45px] text-blue-700 leading-snug"
          >
            Shipper central
          </motion.h2>

          {/* Point 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg text-black sm:text-xl font-semibold">
              Find flexibility
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-black sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Navigate market volatility with access to the largest source of capacity.
            </p>
            <h3 className="mt-6 text-lg sm:text-xl text-black font-semibold">
              Fortify your routing guides
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-black sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Find carriers on your most problematic lanes with the unique LaneMakers tool.
            </p>
          </motion.div>
          {/* Point 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl text-black font-semibold">
              Anticipate and plan

            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-black  sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              See current rates and market conditions affecting your supply chain
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl text-black font-semibold">
              Grow your rates for the long haul
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-black sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Gain access to the tools and data that will get you the load you want at the price you need, including market data, credit scores, reviews, and more. Unlock the full power of DAT One mobile with a DAT Load Board subscription.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
