import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function PricingPlans() {
  const plans = [
    {
      title: "DAT One Enhanced",
      recommended: "Recommended for New OTR Owner-Operators",
      price: 99, // number me rakhen
      per: "/month",
      features: [
        "Broker Credit Score & Days to Pay",
        "Load Counts by State",
        "30-day Average Lane Rates",
      ],
      buttonText: "BUY NOW",
      highlight: false,
    },
    {
      title: "DAT One Pro",
      recommended: "Recommended for OTR Owner-Operators with 1-3 Trucks",
      price: 149,
      per: "/month",
      features: [
        "TriHaul Triangular Routing Tool",
        "DAT Assurance Payment Support",
        "Canadian Loads",
        "15-day Average Lane Rates",
      ],
      buttonText: "BUY NOW",
      highlight: true,
    },
    {
      title: "DAT One Select",
      recommended: "Recommended for Small Fleets with 3+ Trucks",
      price: 199,
      per: "/month",
      extra: "$99 additional/user",
      features: [
        "LIVE Load Board Results",
        "Market Conditions Tool",
        "Exact Match Alarms",
        "Multiple Searches & Filtering",
      ],
      buttonText: "BUY NOW",
      highlight: false,
    },
  ];

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
    hover: { scale: 1.05, boxShadow: "0px 8px 30px rgba(0,0,0,0.5)" },
  };

  return (
    <div className="bg-black text-white py-20 px-6">
      <div className="flex flex-col lg:flex-row flex-wrap gap-8 justify-center items-center max-w-6xl mx-auto">
        {plans.map((plan, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3,
          });

          return (
            <motion.div
              key={idx}
              ref={ref}
              className={`relative w-full sm:w-[90%] md:w-[400px] lg:w-[350px] bg-[#111827] rounded-lg shadow-lg flex flex-col justify-between ${
                plan.highlight ? "border-2 border-blue-500" : ""
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-400 to-purple-600 text-xs font-bold px-4 py-1 rounded"
                >
                  MOST POPULAR
                </motion.div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold">{plan.title}</h2>
                <p className="mt-2 text-gray-400 text-sm">{plan.recommended}</p>

                <div className="mt-6">
                  <span className="text-4xl font-extrabold">
                    {inView ? (
                      <CountUp start={0} end={plan.price} duration={2} />
                    ) : (
                      plan.price
                    )}
                  </span>
                  <span className="text-lg font-medium text-gray-400">
                    {plan.per}
                  </span>
                </div>

                {plan.extra && (
                  <p className="text-sm text-gray-400 mt-1">{plan.extra}</p>
                )}

                {/* Features */}
                <ul className="mt-6 space-y-3 text-gray-300 text-sm w-full">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-700 pb-2"
                    >
                      {feature}
                      <span className="text-gray-500 text-xs ml-2">ⓘ</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="p-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-semibold transition"
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 text-sm mt-10"
      >
        DAT One Mobile app is included in all subscriptions
      </motion.p>
    </div>
  );
}
