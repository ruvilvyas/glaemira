"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] bg-[#FDF9F3] overflow-hidden">
      {/* Bubble-style background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-[#D9C3FF] rounded-full mix-blend-multiply -top-20 -left-20 animate-blob"></div>
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-[#FFEEDD] rounded-full mix-blend-multiply -top-10 -right-10 animate-blob animation-delay-2000"></div>
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-[#FFF6E5] rounded-full mix-blend-multiply -bottom-20 left-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full px-4 sm:px-8 md:px-20 gap-8 z-10">
        {/* Text */}
        <div className="flex flex-col justify-center space-y-4 w-full text-center md:text-left">
          <p className="text-base sm:text-lg text-[#5A3E85] font-medium">Discover</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-snug sm:leading-tight">
            <Typewriter
              words={["Perfect pick for you", "Exclusive trends", "Timeless elegance"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            1000+ timeless pieces made to sparkle your daily life. Curated collections. Gift-worthy. You deserve this.
          </p>
          <a
            href="/collections"
            className="mt-3 inline-block px-5 py-2.5 bg-[#5A3E85] text-white rounded-lg font-semibold hover:bg-[#452c68] transition"
          >
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full h-[240px] sm:h-[300px] md:w-[40%] md:h-[45vh]">
          <Image
            src="/hero.png"
            alt="Hero Jewellery"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
