// ✅ src/app/search/page.tsx

import connectDB from "@/lib/db";
import { Product } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await connectDB();

  // ✅ Await searchParams as required in Next.js 15+
  const params = await searchParams;
  const query = typeof params?.query === "string" ? params.query : "";

  // ✅ Case-insensitive regex for search
  const regex = new RegExp(query, "i");
  const products = await Product.find({ name: { $regex: regex } });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-6">
        Search Results for &quot;{query}&quot;
      </h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              className="border rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
