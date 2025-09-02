import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropDown";
import { productsData, transportationData, resourcesData } from "./navbarData";

export default function NavbarLinks({ user, onLogout }) {
  return (
    <div className="hidden xl:flex space-x-8 text-black text-lg items-center">
      <Link to="/" className="hover:text-[#eb2556]">Home</Link>

      {/* Dropdown Menus */}
      <DropdownMenu title="Products" sections={productsData} />
      <DropdownMenu title="Transportation Solutions" sections={transportationData} />
      <DropdownMenu title="Resources" sections={resourcesData} />

      {/* Normal Links */}
      <Link to="/about" className="hover:text-[#eb2556]">About Us</Link>
      <Link to="/contact" className="hover:text-[#eb2556]">Contact Us</Link>

      {/* 🔍 Search Dropdown */}
      <DropdownMenu title="Search" isSearch={true} />

      {/* ✅ Auth Section */}
      {user ? (
        <>
          <span className="font-medium">{user.email}</span>
          <button
            onClick={onLogout}
            className="bg-red-500 text-white px-4 py-2 font-bold hover:bg-red-600 transition rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition rounded"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition rounded"
          >
            Signup
          </Link>
        </>
      )}
    </div>
  );
}
