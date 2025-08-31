import React from "react";
import { motion } from "framer-motion";

export default function TrackingSmoother() {
  return (
    <div className="w-full mt-20 px-4 sm:px-6 lg:px-20 mb-20">
      {/* Section 1 */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#71797E] font-bold text-4xl sm:text-5xl lg:text-4xl text-center mb-12"
      >
        Smarter tech = smoother ops.
      </motion.h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/media/images/tracking3.jpg"
            alt="Trucking Services"
            className="w-full max-w-[550px] h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0 space-y-8 text-gray-800"
        >
          {[
            {
              title: "ELD and telematics",
              desc: "With over 2,000 new integrations per month, ELD, temperature, trailer tracking, and more are effortless, ensuring your operations are protected and efficient.",
            },
            {
              title: "Reporting and dashboards",
              desc: "Analyze carrier performance, chart your users’ success, and see compliance scores in a simple dashboard.",
            },
            {
              title: "Take customer service up a notch",
              desc: "Provide shippers with white-glove service with their own portal for real-time visibility of their active freight tracks.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="flex items-center font-bold text-xl sm:text-2xl gap-3">
                <img
                  src="/media/images/checked.png"
                  alt=""
                  className="w-[22px] sm:w-[40px]"
                />
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
               {/* Buttons */}
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, delay: 0.4 }}
                          viewport={{ once: true }}
                          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mt-6"
                        >
                          <button className="border border-blue-600 rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
                           Request A Demo
                          </button>
                        </motion.div>
            </motion.div> 
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}
