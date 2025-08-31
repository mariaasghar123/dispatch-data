import React from 'react'
import { motion } from 'framer-motion'
import Hero3 from './Hero3'
import About2 from './About2'
import Logo from './Logo'
import Team from './Team'
import TeamData from './TeamData'

export default function AboutPage() {
  // animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  }

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.div 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Hero3 />
      </motion.div>

      {/* About Section */}
      <motion.div 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <About2 />
      </motion.div>

      {/* Logo Section */}
      <motion.div 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Logo />
      </motion.div>

      {/* Team Section */}
      <motion.div 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <Team />
      </motion.div>

      {/* TeamData Section */}
      <motion.div 
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <TeamData />
      </motion.div>
    </div>
  )
}
