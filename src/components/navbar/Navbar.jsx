"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import { productsData, transportationData, resourcesData } from "./navbarData";

// 👇 Firebase imports
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {app, auth} from "../firebase/firebaseconfig";
// import { app } from "../firebase/firebaseconfig"; // apna firebase config ka path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [user, setUser] = useState(null);

  // const auth = getAuth(app);
  const navigate = useNavigate();

  // Track user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate("/login"); // logout ke baad login page par bhej do
  };

  // Variants for animations
  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { x: "100%", transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-10 py-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ x: -40, opacity: 0, rotate: 0 }}
          animate={{ x: 0, opacity: 1, rotate: 360 }}
          transition={{ duration: 1 }}
          className="p-2 bg-white/80 backdrop-blur-md rounded-lg"
        >
          <img
            src="/media/images/logo3.jpg"
            alt="Goods Carrier Logo"
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="hidden xl:flex space-x-8"
        >
          <motion.div variants={linkVariants}>
            <NavbarLinks user={user} onLogout={handleLogout}/>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="xl:hidden"
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
        >
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl flex flex-col items-start px-6 py-10 space-y-4 text-lg overflow-y-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={28} />
            </button>

            {/* Animated Links */}
            {["products", "transport", "resources"].map((menu, idx) => (
              <motion.div key={idx} variants={linkVariants} className="w-full">
                <button
                  onClick={() => toggleDropdown(menu)}
                  className="flex items-center justify-between w-full py-2 text-left font-semibold"
                >
                  {menu === "products"
                    ? "Products"
                    : menu === "transport"
                    ? "Transportation Solutions"
                    : "Resources"}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeDropdown === menu ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === menu && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 space-y-2"
                    >
                      {(menu === "products"
                        ? productsData
                        : menu === "transport"
                        ? transportationData
                        : resourcesData
                      ).map((section, idx) => (
                        <div key={idx}>
                          <p className="font-medium">{section.title}</p>
                          <ul className="pl-4 space-y-1">
                            {section.links.map((link, i) => (
                              <li key={i}>
                                <Link
                                  to={link.path}
                                  onClick={() => setIsOpen(false)}
                                  className="hover:text-[#eb2556] block"
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* Static Links */}
            {["Home", "About Us", "Careers", "Contact Us"].map((name, idx) => (
              <motion.div key={idx} variants={linkVariants}>
                <Link
                  to={
                    name === "Home"
                      ? "/"
                      : name === "About Us"
                      ? "/about"
                      : name === "Careers"
                      ? "/career"
                      : "/contact"
                  }
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#eb2556]"
                >
                  {name}
                </Link>
              </motion.div>
            ))}

            {/* Auth Section */}
            <motion.div
              variants={linkVariants}
              className="flex flex-col gap-2 w-full mt-4"
            >
              <a
                href="/search"
                className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition text-center"
              >
                
              </a>

              {user ? (
                // 👇 If logged in → show name + logout
                <div className="flex flex-col gap-2 w-full">
                  <span className="text-center font-medium">
                    { user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 font-bold hover:bg-red-600 transition text-center"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                // 👇 If not logged in → show Login/Signup
                <>
                  <a
                    href="/login"
                    className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition text-center"
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition text-center"
                  >
                    Signup
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
