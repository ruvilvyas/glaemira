import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";
import Image from "next/image";
import Link from "next/link";
import CollectionsGrid from "@/app/products/page";
import FeaturedProducts from "@/components/Products";
import Header from "@/components/header";

type Props = {
  params: { slug: string };
};

export default async function CategoryPage({ params }: Props) {
  await connectDB();

  const category = await Category.findOne({ slug: params.slug });
  if (!category) return notFound();

  const products = await Product.find({ category: category._id });

  return (
    <>
    <Header />
    <div className="max-w-7xl mx-auto px-4 md:px-12 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
        ✨ {category.name} Collection
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product._id}
              href={`/product/${product._id}`}
              className="group block bg-white border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#5A3E85] transition">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-700 mt-1">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    <CollectionsGrid />
    <FeaturedProducts />
    </>
  );
}
