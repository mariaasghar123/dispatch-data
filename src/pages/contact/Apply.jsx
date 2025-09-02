"use client";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import { db } from "../../components/firebase/firebaseconfig"; // 👈 apna firebaseconfig ka path
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Apply() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role"); // 👈 URL se role aa jayega

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "applications"), {
        ...form,
        role: role || "Unknown",
        createdAt: Timestamp.now(),
      });

      alert(`✅ Application submitted for ${role}!`);
      setForm({ name: "", email: "", phone: "", resume: "" }); // reset form
    } catch (error) {
      console.error("Error saving application:", error);
      alert("❌ Failed to submit. Try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-white shadow-2xl rounded-2xl p-6 sm:p-10 w-full max-w-lg"
      >
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Apply for {role || "Job"} 🚀
        </h1>

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          name="resume"
          placeholder="Write your experience here..."
          value={form.resume}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
          rows="4"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-bold shadow-md hover:from-indigo-700 hover:to-purple-700 transition"
        >
          Submit Application
        </motion.button>
      </motion.form>
    </div>
  );
}
