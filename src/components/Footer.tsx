// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#f8f6f2] text-[#333] py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Newsletter */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/image.png" alt="Brado Jewellery" width={40} height={40} />
            <span className="text-lg font-semibold">Gleamira Jewellery</span>
          </div>
          <p className="text-sm mb-3">Don&apos;t miss updates or promotions by signing up to our newsletter.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded-l-md border border-gray-300 text-sm"
            />
            <button className="bg-[#c39254] text-white px-4 rounded-r-md">→</button>
          </div>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-semibold mb-3">Our Policies</h3>
          <ul className="text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Terms of Usage</li>
            <li>Shipping Policy</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful Links</h3>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>

        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-semibold mb-3">Contact Details</h3>
          <p className="text-sm mb-2">📞 +91 12345678</p>
          <p className="text-sm mb-2">📧 care@Gleamirajewellery.com</p>
          <p className="text-sm">
            📍 India
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
        <p>© Gleamira Jewellery | All rights reserved</p>
       
      </div>
    </footer>
  );
}
