import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.9 }} // start state
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 } // end state
          : { opacity: 0, y: 80, scale: 0.9 }
      }
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  );
}
