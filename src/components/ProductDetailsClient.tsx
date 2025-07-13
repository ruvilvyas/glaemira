"use client";

import Image from "next/image";
import { useCart } from "@/components/CartContext";
import toast, { Toaster } from "react-hot-toast";
import CollectionsGrid from "@/app/products/page";
import FeaturedProducts from "./Products";

type Props = {
  product: {
    _id: string;
    name: string;
    slug: string;
    image: string;
    price: number;
  };
};

export default function ProductDetailsClient({ product }: Props) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <>
    <div className="max-w-6xl mx-auto py-12 px-4 md:px-12 flex flex-col md:flex-row gap-12 items-start">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="w-full md:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-2xl text-[#5A3E85] font-semibold">₹{product.price}</p>

        <div className="bg-purple-100 border-l-4 border-[#5A3E85] text-sm p-4 rounded-lg">
          <p className="text-gray-900"><strong>🎁 B1G1:</strong> Buy 1 Get 1 Free — Add any 2 products to cart!</p>
          <p className="mt-1 text-gray-800">Pay online and get a <strong>&apos;Unisex Evil Eye Bracelet&apos;</strong> worth ₹399/- free + ₹250 Off 💝</p>
        </div>

        <label className="flex items-center space-x-3 mt-4">
          <input type="checkbox" className="w-5 h-5" />
          <span>Add Gift Wrap 🎁 (₹69)</span>
        </label>

        <button
          onClick={handleAddToCart}
          className="mt-6 w-full py-3 px-6 bg-[#5A3E85] text-white text-lg font-medium rounded-md hover:bg-[#432b6a] transition duration-300"
        >
          Add to Cart
        </button>

      <a
  href="https://wa.me/919925931537?text=Hi%20Gleamira%2C%20I'm%20interested%20in%20your%20jewellery%20collections."
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-6 w-full py-3 px-6 bg-white text-black text-lg font-medium rounded-md hover:bg-[#432b6a] hover:text-white transition">
    Buy Now
  </button>
</a>

      </div>
    </div>
    
    <CollectionsGrid />
    <FeaturedProducts />
    </>
  );
}
