"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseconfig";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("carrier"); // default role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(cred.user, { displayName: name });

      // ✅ Save user data + role in Firestore
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        name,
        email,
        role,
        createdAt: serverTimestamp(),
      });

      // redirect to login page
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <motion.form
        onSubmit={handleSignup}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-extrabold mb-6 text-center text-gray-800"
        >
          Create an Account 🚀
        </motion.h2>

        {/* Full Name */}
        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#6366f1" }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#6366f1" }}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Password */}
        <motion.input
          whileFocus={{ scale: 1.05, borderColor: "#6366f1" }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-3 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Role Dropdown */}
        <motion.select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border p-3 w-full mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="carrier">Carrier</option>
          <option value="shipper">Shipper</option>
          <option value="broker">Broker</option>
        </motion.select>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-indigo-600 text-white w-full py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
        >
          Sign Up
        </motion.button>

        {error && (
          <p className="text-red-500 mt-3 text-center font-medium">{error}</p>
        )}

        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </motion.form>
    </div>
  );
}
