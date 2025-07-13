// components/CollectionsGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    _id: "1",
    name: "Necklaces",
    slug: "necklaces",
    image: "/neckles.png",
  },
  {
    _id: "2",
    name: "Rings",
    slug: "necklaces",
    image: "/ring.png",
  },
  {
    _id: "3",
    name: "Bracelets",
    slug: "necklaces",
    image: "/bracelet.png",
  },
  {
    _id: "4",
    name: "Earrings",
    slug: "necklaces",
    image: "/ring.png",
  },
  {
    _id: "5",
    name: "dress",
    slug: "necklaces",
    image: "/kurti.png",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="bg-white py-12 px-4 md:px-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
        Discover Our Collections
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat._id}
            href={`/category/${cat.slug}`}
            className="text-center group"
          >
            <div className="relative w-full h-40 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-2 text-gray-700 font-medium group-hover:text-[#5A3E85] transition">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
