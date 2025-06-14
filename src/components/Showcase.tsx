// components/Showcase.tsx
import React from 'react';
import Image from 'next/image';

const modelImages = [
  { name: 'Look 1', img: '/shruti.jpg' },
  { name: 'Look 3', img: '/shruti.jpg' },
  { name: 'Look 2', img: '/shruti.jpg' },
];

export default function Showcase() {
  return (
    <section className="bg-white py-8 px-4">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
        Style Inspiration
      </h2>

      <div className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
        <div className="flex space-x-4">
          {modelImages.map((item, index) => (
            <div
              key={index}
              className="relative min-w-full h-[500px] rounded-xl overflow-hidden flex-shrink-0"
            >
              <Image
                src={item.img}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
