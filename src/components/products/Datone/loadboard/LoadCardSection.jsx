import React from "react";
import { motion } from "framer-motion";

export default function LoadCardSection() {
  return (
    <div className="w-full bg-black mx-auto px-4 sm:px-6 md:px-10 lg:px-20 mt-20 py-20">
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
            src="/media/images/load1.jpg"
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
            The DAT One mobile app is included in your subscription
          </motion.h2>

          {/* Point 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg text-white sm:text-xl font-semibold">
              The single source for all things freight.
            </h3>
            <h3 className="mt-6 text-lg sm:text-xl text-white font-semibold">
              Run your business with efficiency
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              DAT One mobile combines 15 apps into one fast and easy set of tools to find and book loads, plan and optimize trips, and get paid in as little as 24 hours.
            </p>
          </motion.div>
          {/* Point 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl text-white font-semibold">
              Save time and money on every trip you plan
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white  sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              The app includes an interactive map with truck stops, truck parking, weigh stations, rest stops and fuel price information that could save you up to $1,000 every month.
            </p>
          </motion.div>

          {/* Point 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="mt-6 text-lg sm:text-xl text-white font-semibold">
              Grow your rates for the long haul
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white sm:w-[95%] lg:w-3/4 mx-auto lg:mx-0">
              Gain access to the tools and data that will get you the load you want at the price you need, including market data, credit scores, reviews, and more. Unlock the full power of DAT One mobile with a DAT Load Board subscription.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
