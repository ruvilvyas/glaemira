"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ProductType = {
  _id: string;
  name: string;
  price: number;
  image: string;
};

export default function FeaturedProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products?limit=6");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      }  catch (err) {
  if (err instanceof Error) setError(err.message);
  else setError("Something went wrong");
} finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center text-gray-600">
        <p>Loading featured products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section  id="featured-products" className="bg-[#FDF9F3] py-16 px-6 md:px-24">
      <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
        ✨ Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative w-full h-60 sm:h-64">
              <Image
                src={product.image}
                alt={product.name || "Product Image"}
                fill
                className="object-cover rounded-t-xl"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-[#5A3E85] font-semibold mt-1">
                ₹{product.price}
              </p>
              <Link href={`/products/${product._id}`}>

<button className="mt-3 px-4 py-2 bg-[#5A3E85] text-white cursor-pointer rounded-md hover:bg-[#452c68] transition">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
