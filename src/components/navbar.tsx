import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'All Jewellery', href: '/jewellery' },
  { name: 'Rings', href: '/rings' },
  { name: 'Daily Wear', href: '/daily-wear' },
  { name: 'Dress', href: '/dress' },
  { name: 'Collections', href: '/collections' },
  { name: 'Gifting', href: '/gifting' },
];

export default function Navbar() {
  return (
    <nav className="bg-[#EDE6F6] text-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-wrap gap-4 justify-center items-center">
        {categories.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-medium hover:text-purple-700 transition duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
