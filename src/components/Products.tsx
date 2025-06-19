"use client";
import React from 'react';
import Image from 'next/image';

const featuredItems = [
  {
    id: 1,
    name: 'Elegant Emerald Ring',
    price: '₹34,999',
    image: '/ring.png',
  },
  {
    id: 2,
    name: 'Golden Chain Necklace',
    price: '51,499',
    image: '/hero.png',
  },
  {
    id: 3,
    name: 'Charming Stud Earrings',
    price: '₹18,750',
    image: '/bracelts.png',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#FDF9F3] py-16 px-6 md:px-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
        ✨ Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-60 sm:h-64">
              <Image src={item.image} alt={item.name} fill className="object-cover rounded-t-xl" />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
              <p className="text-[#5A3E85] font-semibold mt-1">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-[#5A3E85] text-white rounded-md hover:bg-[#452c68] transition">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
