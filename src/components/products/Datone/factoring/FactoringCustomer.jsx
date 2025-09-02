import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FactoringCustomer() {
  const reviews = [
    {
      name: "John Carter",
      role: "Owner Operator",
      review:
        "DAT factoring has completely transformed my business cash flow. Getting paid quickly has made all the difference.",
      
    },
    {
      name: "Sarah Lee",
      role: "Freight Dispatcher",
      review:
        "The best decision I made was switching to this platform. Transparent, easy, and stress free!",
    
    },
    {
      name: "Michael Johnson",
      role: "Fleet Manager",
      review:
        "Super fast funding, no hidden fees, and excellent customer support. Highly recommended!",
    
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          What our customers are saying
        </h1>

        {/* Sub Heading */}
        <p className="mt-6 text-lg sm:text-xl font-semibold max-w-2xl">
          "It costs you more money not to have these tools. With DAT, there's
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
        <Link to="/career">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3 bg-blue-900 text-white rounded-full font-semibold text-lg shadow-md hover:bg-blue-800 transition"
        >
          Find the Carrier Plan
        </motion.button>
        </Link>


        {/* Reviews Section */}
        <p className="mt-12 text-lg sm:text-xl font-semibold">
          Hear directly from our users
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 text-left hover:scale-105 transition-transform duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                
                <div>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
