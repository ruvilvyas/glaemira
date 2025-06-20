"use client";
import React from "react";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLock,
  FaUndo,
  FaTruck,
  FaInfoCircle,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f8f6f2] text-[#333] px-4 py-10 md:px-20 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Logo + Newsletter */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/image.png" alt="Gleamira" width={30} height={30} />
            <span className="text-base font-semibold text-gray-800">
              Gleamira Jewellery
            </span>
          </div>
          <p className="text-gray-600 text-xs mb-2">
            Join our newsletter for exclusive offers.
          </p>
          <div className="flex max-w-xs mt-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded-l-md border border-gray-300 text-xs focus:outline-none"
            />
            <button className="bg-[#c39254] text-white px-4 rounded-r-md hover:bg-[#a37741] transition">
              →
            </button>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Policies</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li className="flex items-center gap-2">
              <FaLock size={12} /> Privacy Policy
            </li>
            <li className="flex items-center gap-2">
              <FaUndo size={12} /> Refund Policy
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle size={12} /> Terms of Usage
            </li>
            <li className="flex items-center gap-2">
              <FaTruck size={12} /> Shipping Policy
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Links</h3>
          <ul className="space-y-1 text-xs text-gray-700">
            <li className="hover:text-[#5A3E85] transition">About Us</li>
            <li className="hover:text-[#5A3E85] transition">Contact Us</li>
            <li className="hover:text-[#5A3E85] transition">Sitemap</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Contact</h3>
          <p className="flex items-center gap-2 text-xs mb-1">
            <FaPhoneAlt size={12} /> +91 12345678
          </p>
          <p className="flex items-center gap-2 text-xs mb-1 break-all">
            <FaEnvelope size={12} /> care@gleamirajewellery.com
          </p>
          <p className="flex items-center gap-2 text-xs">
            <FaMapMarkerAlt size={12} /> India
          </p>
        </div>
      </div>

      <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Gleamira Jewellery | All rights reserved
      </div>
    </footer>
  );
}
