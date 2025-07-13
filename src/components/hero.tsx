"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative bg-[#FDF9F3] overflow-hidden pt-10 pb-14 sm:pt-12 sm:pb-20 md:min-h-[80vh] flex items-center justify-center">
      {/* Bubble-style background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-44 h-44 sm:w-72 sm:h-72 bg-[#D9C3FF] rounded-full mix-blend-multiply -top-20 -left-20 animate-blob"></div>
        <div className="absolute w-44 h-44 sm:w-72 sm:h-72 bg-[#FFEEDD] rounded-full mix-blend-multiply -top-10 -right-10 animate-blob animation-delay-2000"></div>
        <div className="absolute w-44 h-44 sm:w-72 sm:h-72 bg-[#FFF6E5] rounded-full mix-blend-multiply -bottom-20 left-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 px-4 sm:px-8 md:px-20 max-w-7xl w-full">
        {/* Text */}
        <div className="w-full text-center md:text-left flex flex-col items-center md:items-start space-y-4">
          <p className="text-sm sm:text-base text-[#5A3E85] font-medium">Discover</p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 leading-snug">
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
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md">
            1000+ timeless pieces made to sparkle your daily life. Curated collections. Gift-worthy. You deserve this.
          </p>
   <a
  href="#featured-products"
  className="inline-block mt-3 px-5 py-2.5 bg-[#5A3E85] text-white rounded-lg font-semibold hover:bg-[#452c68] transition"
>
  Shop Now
</a>

        </div>

        {/* Image */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] h-[220px] sm:h-[300px] md:w-[40%] md:h-[45vh]">
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
