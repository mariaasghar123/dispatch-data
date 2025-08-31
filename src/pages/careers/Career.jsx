"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, HeartHandshake } from "lucide-react";

export default function Career() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 lg:px-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl lg:text-6xl font-extrabold text-center text-gray-900"
      >
        Careers at <span className="text-blue-600">Our Company</span>
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
      >
        Join our passionate team and help us build innovative solutions for the
        future. Explore opportunities that match your skills and ambition.
      </motion.p>

      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {/* Job Openings */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-8 text-center"
        >
          <Briefcase className="w-12 h-12 text-blue-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Open Positions</h2>
          <p className="text-gray-600 mt-2">
            Browse current job openings and apply to be a part of our growing
            team.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Jobs
          </button>
        </motion.div>

        {/* Culture */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-8 text-center"
        >
          <Users className="w-12 h-12 text-green-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Our Culture</h2>
          <p className="text-gray-600 mt-2">
            A collaborative environment where innovation and creativity thrive.
          </p>
          <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Learn More
          </button>
        </motion.div>

        {/* Benefits */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-8 text-center"
        >
          <HeartHandshake className="w-12 h-12 text-purple-500 mx-auto" />
          <h2 className="text-xl font-semibold mt-4">Perks & Benefits</h2>
          <p className="text-gray-600 mt-2">
            From flexible hours to health coverage, we care about our employees’
            well-being.
          </p>
          <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            See Benefits
          </button>
        </motion.div>
      </div>
    </div>
  );
}
