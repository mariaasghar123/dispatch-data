import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoadCard() {

  const cardsData = [
    {
      bg: "/media/images/dat1.jpg",
      title: "Carriers",
      btnText: "Learn More",
      path: "/career",
    },
    {
      bg: "/media/images/dat2.jpeg",
      title: "Brokers",
      btnText: "Get Started",
      path: "/brokers",
    },
    {
      bg: "/media/images/about2.png",
      title: "Shippers",
      btnText: "Learn More",
      path: "/career",
    },
  ];

  return (
    <>
      {/* Cards Section */}
      <div className="flex mt-40 flex-wrap justify-center gap-6 p-6">
        {cardsData.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-[412px] min-w-[280px] h-[400px] rounded-2xl text-black flex flex-col justify-center items-center p-6 relative border border-orange-100 cursor-pointer"
            style={{
              backgroundImage: `url(${card.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-black/50"></div>

            {/* Content */}
            <div className="relative text-white z-10 text-center flex flex-col items-center">
              <h1 className="text-2xl font-bold mt-2">{card.title}</h1>
              <p className="text-lg mt-2">{card.text}</p>

              <Link to={card.path}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 px-6 py-2 bg-[#eb2556] text-white rounded-lg font-semibold hover:bg-[#c41f47] transition"
                >
                  {card.btnText}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mt-20"
      >
        <div className="flex flex-col text-center w-2/3">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[#71797E] text-4xl sm:text-6xl lg:text-8xl font-bold"
          >
            Grow your business for the long haul.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl sm:text-3xl lg:text-5xl font-bold mt-10 mb-5 text-[#848884]"
          >
            Get the most relevant matches for your business –{" "}
            <span className="text-blue-800">the right load for the right truck at the right price,</span> no matter where you are.
          </motion.p>
        </div>
      </motion.div>
        
      

    </>
  );
}
