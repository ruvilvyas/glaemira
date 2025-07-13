"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function OfferPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center relative border border-purple-200">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <X size={22} />
        </button>
        <h3 className="text-xl font-semibold text-[#5A3E85] mb-2">
          🎉 Special Offer!
        </h3>
        <p className="text-gray-700 mb-4">
          Get <span className="font-bold text-[#A88B6C]">20% OFF</span> on your first purchase.
        </p>
       <a href="#hero">
  <button className="bg-[#5A3E85] text-white px-6 py-2 rounded-lg hover:bg-[#452c68] transition">
    Shop Now
  </button>
</a>


      </div>
    </div>
  );
}
