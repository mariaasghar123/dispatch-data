import React from "react";
import { motion } from "framer-motion";
import Hero2 from "./Hero";
import Drop1 from "./Drop";
import Drop2 from "./Drop2";
import Dollar from "../home/Dollar";

export default function TransportationPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }} // har section thora delay se aye
      className="space-y-10"
    >
      <motion.div variants={fadeInUp}>
        <Hero2 />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Drop1 heading={"Drop & Hooks"} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Drop2 heading={"Dedicated"} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Dollar />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Drop1 heading={"Over the Road"} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Drop2 heading={"Expedited"} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Dollar />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Drop1 heading={"Entertainment"} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Drop2 heading={"Logistics Solutions"} />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Dollar />
      </motion.div>
    </motion.div>
  );
}
