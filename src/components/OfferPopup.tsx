"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function OfferPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Show popup after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSendToWhatsApp = () => {
    if (!email.trim()) return;

    const message = `Hi, someone submitted this email on Glaemira: ${email}`;
    const whatsappURL = `https://wa.me/919979089031?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center relative border border-purple-200">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition"
          aria-label="Close popup"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h3 className="text-xl font-semibold text-[#5A3E85] mb-2">
          🎉 Special Offer!
        </h3>

        {/* Offer Message */}
        <p className="text-gray-700 mb-3">
          Get{" "}
          <span className="font-bold text-[#A88B6C]">20% OFF</span> on your
          first purchase.
        </p>

        {/* Subtext */}
        <p className="text-gray-600 text-sm mb-4">
          Join our newsletter for exclusive offers.
        </p>

        {/* Email Input and WhatsApp Send Button */}
        <div className="flex max-w-xs mx-auto mb-4">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 text-black px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSendToWhatsApp}
            className="bg-[#c39254] text-white px-4 rounded-r-md hover:bg-[#a37741] transition"
            aria-label="Send to WhatsApp"
          >
            →
          </button>
        </div>

        {/* Submit Button (Navigates to Hero Section) */}
        <a href="#hero">
          <button className="bg-[#5A3E85] text-white px-6 py-2 rounded-lg hover:bg-[#452c68] transition">
            Submit
          </button>
        </a>
      </div>
    </div>
  );
}
