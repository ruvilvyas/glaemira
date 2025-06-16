"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const modelImages = [
  { name: "Look 1", img: "/shruti.jpg" },
  { name: "Look 2", img: "/shruti.jpg" },
  { name: "Look 3", img: "/shruti.jpg" },
];

export default function Showcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % modelImages.length;
      const scrollAmount = scrollContainer.offsetWidth * nextIndex;

      scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      setCurrentIndex(nextIndex);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="bg-white py-8 px-0">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
        ✨ Style Inspiration
      </h2>

      <div
        ref={scrollRef}
        className="overflow-x-auto scroll-smooth no-scrollbar"
      >
        <div className="flex w-full">
          {modelImages.map((item, index) => (
            <div
              key={index}
              className="relative w-screen h-[400px] md:h-[500px] flex-shrink-0"
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
