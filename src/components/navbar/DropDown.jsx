"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function DropdownMenu({ title, sections, path, isSearch }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent Title */}
      <div className="flex items-center gap-1">
        {isSearch ? (
          <button
            onClick={() => setOpen(!open)}
            className="hover:text-[#eb2556] transition"
          >
            {title}
          </button>
        ) : (
          <Link to={path || "#"} className="hover:text-[#eb2556] transition">
            {title}
          </Link>
        )}

        {!isSearch && (
          <ChevronDown size={16} className="transition-transform duration-300" />
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full  mt-4 bg-white shadow-2xl rounded-lg p-6 z-50 
              ${isSearch ? "w-[300px]" : "w-[900px] grid grid-cols-2 md:grid-cols-4 gap-6"}
                ${title === "Resources" ? "right-0" : "left-0"}`}
              
          >
            {isSearch ? (
              // 🔍 Search Dropdown
              <div className="flex flex-col space-y-3">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="border px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#eb2556]"
                />
                <button className="bg-black text-white py-2 rounded-md hover:bg-gray-800">
                  search
                </button>
              </div>
            ) : (
              // 🔽 Normal Sections Dropdown
              sections.map((section, idx) => (
                <div key={idx}>
                  <Link
                    to={section.path || "#"}
                    className="font-semibold mb-2 border-b border-gray-300 pb-1 text-black flex items-center hover:text-[#eb2556]"
                  >
                    {section.title}
                    <ChevronRight className="ml-1" size={14} />
                  </Link>

                  <ul className="space-y-2 text-sm mt-2">
                    {section.links.map((link, i) => (
                      <li key={i} className="group">
                        <Link
                          to={link.path}
                          className="hover:underline hover:text-[#eb2556] cursor-pointer flex items-center justify-between text-gray-700"
                        >
                          {link.name}
                          <ChevronRight
                            size={14}
                            className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
