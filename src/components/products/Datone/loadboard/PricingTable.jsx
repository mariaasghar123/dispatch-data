import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PricingTable() {
  const [activeTab, setActiveTab] = useState("CARRIERS");

  const tabs = ["CARRIERS", "BROKERS", "COMBO", "SHIPPERS"];

  const plans = [
    { name: "DAT One Standard", price: 49, per: "/month", highlight: false },
    { name: "DAT One Enhanced", price: 99, per: "/month", highlight: false },
    { name: "DAT One Pro", price: 149, per: "/month", highlight: true },
    { name: "DAT One Select", price: 199, per: "/month", highlight: false },
    { name: "DAT One Office", price: 299, per: "/month", highlight: false },
  ];

  const features = [
    {
      title: "Recommended",
      values: [
        "Partial Loads (Sprinter Van / Box Truck)",
        "Owner-Operators",
        "Owner-Operators",
        "Small Fleets",
        "Mid to Large Fleets",
      ],
    },
    { title: "Searching & Truck Posting", values: ["✔", "✔", "✔", "✔", "✔"] },
    { title: "DAT One Mobile App", values: ["✔", "✔", "✔", "✔", "✔"] },
    { title: "Load Match Alarms", values: ["-", "✔", "✔", "✔", "✔"] },
    { title: "Broker Credit Data", values: ["✔", "✔", "✔", "✔", "✔"] },
    {
      title: "Average Lane Rates",
      values: ["", "30-day", "15-day", "15-day", "15-day"],
    },
    {
      title: "Preferred & Blocked Companies",
      values: ["", "", "", "", "✔"],
    },
    { title: "LaneMakers Tool", values: ["", "", "", "", "✔"] },
  ];

  // refs for scroll animations
  const plansRef = useRef(null);
  const featuresRef = useRef(null);

  const plansInView = useInView(plansRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  return (
    <div className="bg-[#0B0F19] text-white py-10">
      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-10">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-t-lg font-bold transition-colors ${
              activeTab === tab ? "bg-purple-600" : "bg-[#111827]"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Plans Header */}
      <div ref={plansRef} className="grid grid-cols-6 gap-4 px-6 max-w-7xl mx-auto">
        <div className="col-span-1"></div>
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={plansInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(139,92,246,0.5)" }}
            className={`p-6 rounded-lg flex flex-col items-center relative ${
              plan.highlight ? "border-2 border-blue-500" : "bg-[#111827]"
            }`}
          >
            {plan.highlight && (
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={plansInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="absolute -top-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-xs font-bold px-3 py-1 rounded"
              >
                MOST POPULAR
              </motion.span>
            )}
            <h3 className="font-bold text-lg">{plan.name}</h3>
            <p className="mt-2 text-3xl font-extrabold">${plan.price}</p>
            <p className="text-gray-400">{plan.per}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm"
            >
              BUY NOW
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Feature Rows */}
      <motion.div
        ref={featuresRef}
        initial={{ opacity: 0 }}
        animate={featuresInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0 }}
        className="grid grid-cols-6 gap-4 px-6 max-w-7xl mx-auto mt-10 text-sm"
      >
        {features.map((feature, idx) => (
          <React.Fragment key={idx}>
            <div className="font-semibold py-3 border-t border-gray-700">
              {feature.title}
            </div>
            {feature.values.map((val, i) => (
              <div
                key={i}
                className="text-center py-3 border-t border-gray-700 text-gray-300"
              >
                {val}
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
