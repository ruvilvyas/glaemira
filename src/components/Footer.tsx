"use client";
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f8f6f2] text-[#333] py-10 px-4 sm:px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {/* Logo + Newsletter */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/image.png" alt="Gleamira Jewellery" width={36} height={36} />
            <span className="text-base sm:text-lg font-semibold">Gleamira Jewellery</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Don&apos;t miss updates or promotions. Join our newsletter.
          </p>
          <div className="flex max-w-xs">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-l-md border border-gray-300 text-sm focus:outline-none"
            />
            <button className="bg-[#c39254] text-white px-4 rounded-r-md text-sm hover:bg-[#a37741]">
              →
            </button>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold text-base mb-3">Our Policies</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Usage</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-base mb-3">Useful Links</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold text-base mb-3">Contact Details</h3>
          <p className="text-sm mb-2">📞 +91 12345678</p>
          <p className="text-sm mb-2">📧 care@gleamirajewellery.com</p>
          <p className="text-sm">📍 India</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
        © Gleamira Jewellery | All rights reserved
      </div>
    </footer>
  );
}
