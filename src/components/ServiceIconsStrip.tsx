import React from 'react';
import Image from 'next/image';

export default function ServiceIconsStrip() {
  return (
    <section className="py-12 bg-white flex justify-center px-4 md:px-0">
      <div className="relative w-full max-w-5xl h-32 md:h-40">
        <Image
          src="/benefits.png"
          alt="Service Highlights"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
