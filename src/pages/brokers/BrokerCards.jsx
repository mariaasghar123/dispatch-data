import React from "react";
import { motion } from "framer-motion";

export default function ResourceCards({ title = "Broker Resources", cards = [] }) {
  return (
    <section className="bg-[#1e293b] py-16 px-6">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          {title}
          <span className="h-[2px] flex-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
        </h2>

        {/* Cards Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0f172a] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-sm text-gray-300">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
