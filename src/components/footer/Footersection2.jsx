import React from 'react';
import { FaFacebookF, FaYoutube, FaYelp, FaInstagram } from 'react-icons/fa';

export default function Footersection2() {
  return (
    <footer className="relative bg-[#06113C] text-white px-10 py-16 min-h-[600px]">
      {/* Background Map Image */}
      <img
        src="/media/images/image 7.png"
        alt="Map background"
        className="absolute bottom-0 right-0 object-cover opacity-20 z-10"
        style={{ width: '699px', maxWidth: '90vw', height: 'auto' }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-20">
        {/* Left Section */}
        <div>
          <span className="bg-white text-black px-3 py-1 rounded font-semibold inline-block mb-4">
            Goods Carrier
          </span>
          <h2 className="font-bold text-lg mb-3">The Logistics Company That Always Delivers</h2>
          <p className="mb-6 max-w-xs">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <div className="flex space-x-5 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gray-300"><FaYoutube /></a>
            <a href="#" aria-label="Yelp" className="hover:text-gray-300"><FaYelp /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Terms Section */}
        <div>
          <h3 className="font-semibold mb-4">TERMS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-semibold mb-4">LINKS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Job Application</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="font-semibold mb-4">CONTACT INFO</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Map Location</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        TOP TEAM CARRIERS © 2025 | All Rights Reserved.
      </div>
    </footer>
  );
}
