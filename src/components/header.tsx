import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#FFFDF4] text-gray-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 h-auto py-4 md:py-0">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/image.png" alt="Logo" width={50} height={50} />
            <span className="text-2xl font-bold text-purple-700">Gleamira</span>
          </Link>

          {/* Search Bar */}
          <form className="hidden md:flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1">
            <input
              type="search"
              placeholder="Search products"
              className="outline-none w-64 bg-transparent text-sm placeholder-gray-500"
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
      </div>
    </header>
  );
}
