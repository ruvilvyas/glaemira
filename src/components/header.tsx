"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";

const categories = [
  { name: "All Jewellery", href: "/jewellery" },
  { name: "Rings", href: "/rings" },
  { name: "Daily Wear", href: "/daily-wear" },
  { name: "Dress", href: "/dress" },
  { name: "Collections", href: "/collections" },
  { name: "Gifting", href: "/gifting" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#FFFDF4] text-gray-800 shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3 md:py-0 md:px-8 max-w-[1440px] mx-auto">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-purple-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/image.png" alt="Logo" width={40} height={40} />
            <span className="text-xl font-bold text-purple-700 hidden sm:block">
              Gleamira
            </span>
          </Link>

          {/* Search Bar - Desktop Only */}
          <form className="hidden md:flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1 flex-1 mx-6 max-w-md">
            <input
              type="search"
              placeholder="Search products"
              className="outline-none w-full bg-transparent text-sm placeholder-gray-500"
              aria-label="Search"
            />
          </form>

          {/* Icons */}
          <div className="flex space-x-4 items-center">
            <Link href="/wishlist" className="text-purple-700 hover:text-purple-900">
              <Heart size={22} />
            </Link>
            <Link href="/cart" className="text-purple-700 hover:text-purple-900">
              <ShoppingCart size={22} />
            </Link>
            <Link href="/profile" className="text-purple-700 hover:text-purple-900">
              <User size={22} />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <form className="flex items-center bg-white border border-gray-300 rounded-lg px-3 py-2">
            <input
              type="search"
              placeholder="Search for Gold Jewellery, Diamond Jewellery..."
              className="outline-none w-full bg-transparent text-sm placeholder-gray-500"
            />
          </form>
        </div>
      </header>

      {/* Navbar for desktop */}
      <nav className="hidden md:flex bg-[#EDE6F6] text-gray-800 shadow-sm">
        <div className="px-8 py-3 flex gap-6 justify-center w-full max-w-[1440px] mx-auto">
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-purple-700 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col p-6 gap-4">
          <h3 className="text-xl font-semibold text-purple-700">Categories</h3>
          {categories.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-purple-700"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
