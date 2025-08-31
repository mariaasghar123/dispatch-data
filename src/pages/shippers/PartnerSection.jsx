import React from "react";
import { motion } from "framer-motion";

export default function PartnerSection() {
  const partners = [
    { logo: "/media/images/Oracle-1.png", name: "Oracle" },
    { logo: "/media/images/ShipWell-2.png", name: "Shipwell" },
    { logo: "/media/images/Keelvar.png", name: "Keelvar" },
  ];

  return (
    <div className="w-full">
      {/* Top Section */}
      <div className="bg-[#3a00e5] text-white py-20 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold"
        >
          <span className="text-[120px] md:text-[150px] font-extrabold">13</span>{" "}
          of the top 25 supply chains <br /> are DAT iQ customers
        </motion.h2>

        <p className="mt-4 text-lg md:text-xl">
          Based on{" "}
          <a
            href="#"
            className="underline font-semibold hover:text-gray-200"
          >
            The Gartner Supply Chain Top 25 for 2024
          </a>
        </p>
      </div>

      {/* Partner Logos Section */}
      <div className="bg-white py-16 flex flex-col items-center justify-center px-6 -mt-16 rounded-xl shadow-lg max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-800">
          Expand what's possible with our <br /> trusted partner ecosystem
        </h3>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          {partners.map((partner, idx) => (
            <motion.img
              key={idx}
              src={partner.logo}
              alt={partner.name}
              className="h-10 md:h-14 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            />
          ))}

          <span className="font-bold text-lg text-gray-800">+More</span>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#3a00e5] text-white font-semibold rounded-full hover:bg-[#2a00b3] transition"
        >
          LEARN MORE
        </motion.button>
      </div>
    </div>
  );
}
