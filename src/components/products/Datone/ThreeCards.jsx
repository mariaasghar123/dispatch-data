import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ThreeCards() {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Get the best loads first
        </h1>

        {/* Sub Heading */}
        <p className="mt-6 text-lg sm:text-xl font-semibold text-gray-700">
          Select a tailored plan and gain access to loads and data exclusively on{" "}
          <span className="text-blue-800">DAT's network.</span>
        </p>

        {/* Divider with animation */}
        <motion.p
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 w-full max-w-md border-t-2 border-dashed border-blue-400"
        ></motion.p>

        <p className="mt-4 text-gray-600 font-medium">
          Need Help Deciding?
        </p>

        {/* Button with hover + scale animation */}
        <Link to="/career">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-blue-900 text-white rounded-full font-semibold text-lg shadow-md hover:bg-blue-800 transition"
        >
          Find the Carrier Plan
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
