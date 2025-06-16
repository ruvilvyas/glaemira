"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/918160977869?text=Hi%20Guruji%20SMSA%2C%20I'm%20interested%20in%20your%20video%20editing%20services."
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 sm:p-5 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
    </a>
  );
}
