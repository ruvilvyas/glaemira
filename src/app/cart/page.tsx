"use client";

import { useCart } from "@/components/CartContext";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";
export default function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  return (
    <>
      <Header />
      <div className="max-w-6xl bg-white mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#2f1e4f]">Your cart</h1>
         <Link href="/" className="text-[#a585e3] underline text-sm hover:text-[#7e5dc9]">
  Continue shopping
</Link>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg text-center mt-20">
            Your cart is empty. Let's go shopping!
          </p>
        ) : (
          <>
            <div className="grid grid-cols-4 border-b pb-4 mb-6 text-sm font-medium text-gray-500">
              <div className="col-span-2">PRODUCT</div>
              <div className="text-center">QUANTITY</div>
              <div className="text-right">TOTAL</div>
            </div>

            {cart.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-4 items-center gap-4 border-b py-6"
              >
                {/* Product Info */}
                <div className="col-span-2 flex items-center gap-4">
                  <Image
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg border"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Rs. {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="border px-3 py-1 rounded text-xl"
                    onClick={() => updateQuantity(item._id, -1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="border px-3 py-1 rounded text-xl"
                    onClick={() => updateQuantity(item._id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 text-[#a585e3] hover:text-red-500"
                    onClick={() => removeFromCart(item._id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Total */}
                <div className="text-right font-semibold text-lg text-gray-800">
                  Rs. {(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            {/* Discount & Button */}
            <div className="mt-12">
              <p className="bg-green-400 text-white text-center py-2 font-semibold rounded-md text-sm max-w-xs mb-4">
                EXTRA ₹200 off on Prepaid Orders
              </p>

              <div className="flex justify-center">
                <button className="bg-[#a585e3] hover:bg-[#8e6fd4] text-white text-lg font-bold px-10 py-3 rounded-full shadow-md">
                  BUY NOW
                </button>
              </div>

              <p className="text-xs text-center mt-2 text-gray-400">
                Powered by <span className="underline">Shiprocket</span>
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
