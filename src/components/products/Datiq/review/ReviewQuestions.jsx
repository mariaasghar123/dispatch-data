import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-[#3a4a59] text-white px-6 sm:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Title Section */}
        <div>
          <p className="text-sm uppercase tracking-wide mb-3">FAQs</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-snug">
            {title}
          </h2>
        </div>

        {/* Right Accordion Section */}
        <div className="lg:col-span-2 space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-500 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {/* Answer (Animated Expand) */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 text-gray-200 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
