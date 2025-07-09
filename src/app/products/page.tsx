// components/CollectionsGrid.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export default async function CollectionsGrid() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });

  const categories: CategoryType[] = await res.json();

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
