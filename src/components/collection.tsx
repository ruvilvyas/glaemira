"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryType = {
  _id: string;
  name: string;
  slug: string;
  image: string;
};

export default function CollectionsGrid() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        if (!res.ok) throw new Error("Failed to fetch categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500 py-10">Loading collections...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>;
  }

  return (
    <section className="bg-white py-12 px-4 md:px-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-6">
        Discover Our Collections
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
        <Link
  key={cat._id}
  href={`/category/${cat._id}`}
  className="text-center group"
>

            <div className="relative w-full h-40 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw object-cover"
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
