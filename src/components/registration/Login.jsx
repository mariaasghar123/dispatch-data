"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("shipper"); // default role
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");

      // Role ke hisaab se navigate karo
      // if (role === "carrier") {
      //   navigate("/carrier-dashboard");
      // } else if (role === "shipper") {
      //   navigate("/shipper-dashboard");
      // } else {
      //   navigate("/broker-dashboard");
      // }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96"
      >
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-center text-gray-800 mb-6"
        >
          Welcome Back 👋
        </motion.h2>

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
          className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Password */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="border p-3 w-full mb-4 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block font-semibold mb-2 text-gray-700">
            Select Role:
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="carrier">Carrier</option>
            <option value="shipper">Shipper</option>
            <option value="broker">Broker</option>
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-indigo-600 text-white w-full py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
        >
          Log in
        </motion.button>

        {/* Error */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 mt-3 text-center"
          >
            {error}
          </motion.p>
        )}
      </motion.form>
    </div>
  );
}
