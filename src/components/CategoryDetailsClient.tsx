"use client";

import Image from "next/image";
import CollectionsGrid from "@/components/collection";
import FeaturedProducts from "./Products";

type Props = {
  category: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
};

export default function CategoryDetailsClient({ category }: Props) {
  return (
    <>
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-12 flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <Image
            src={category.image}
            alt={category.name}
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {category.name}
          </h1>
          <p className="text-lg text-gray-700">
            Discover the exclusive jewellery in our <strong>{category.name}</strong> collection. All styles curated with love.
          </p>

          <a
            href="https://wa.me/919925931537?text=Hi%20Gleamira%2C%20I'm%20interested%20in%20your%20jewellery%20collections."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 w-full py-3 px-6 bg-[#5A3E85] text-white text-lg font-medium rounded-md hover:bg-[#432b6a] transition">
              Enquire on WhatsApp
            </button>
          </a>
        </div>
      </div>

      <FeaturedProducts />
      <CollectionsGrid />
    </>
  );
}
