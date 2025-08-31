import React from "react";
import { motion } from "framer-motion";

export default function FactoringSmart() {
  return (
    <div className="w-full mt-20 px-4 sm:px-6 lg:px-20 mb-20">
      {/* Section 1 */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#71797E] font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-12"
      >
        Get smart factoring
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
            src="/media/images/factoring2.jpg"
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
              title: "Fast funding",
              desc: "Supercharge your company's cash flow: 25% of invoices are ready to factor in 15 minutes or less.",
            },
            {
              title: "No annual contracts",
              desc: "Enjoy no annual contracts and no hidden fees. Just transparent payments made fast and easy.",
            },
            {
              title: "Instant access to funds",
              desc: "With the Outgo debit card, you access funds instantly and lower your factoring rate to 1.0% on every purchase.",
            },
            {
              title: "Automated invoicing",
              desc: "Get streamlined invoicing with Outgo, which will ID the best invoices to factor based on saving you the most money.",
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
                  className="w-[32px] sm:w-[40px]"
                />
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="mt-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#71797E] font-bold text-4xl sm:text-5xl lg:text-6xl text-center mb-6"
        >
          Keep more of what you earn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-gray-600 text-base sm:text-lg mb-12"
        >
          The old ways of factoring are over. New smart factoring technology
          from Outgo puts the power in your hands, giving you the lowest rates
          and unlocking the biggest savings, all so you can get paid fast for
          the work you do.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-8 text-gray-800"
          >
            {["Fast funding", "Low rates", "No hidden fees", "Automated invoicing"].map(
              (item, i) => (
                <motion.h2
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center font-bold text-xl sm:text-2xl gap-3"
                >
                  <img
                    src="/media/images/checked.png"
                    alt=""
                    className="w-[32px] sm:w-[40px]"
                  />
                  {item}
                </motion.h2>
              )
            )}
          </motion.div>

          {/* Left Side - Video */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <video
              src="/media/images/videofactoring.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full max-w-[550px] h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
