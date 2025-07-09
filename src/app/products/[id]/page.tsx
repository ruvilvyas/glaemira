// app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import {Product} from "@/models/Product";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import Header from "@/components/header";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  // ✅ Access params.id FIRST before any async operations
  const productId = params.id;
  
  await connectDB();

  let product = null;

  try {
    // Use the captured productId
    product = await Product.findById(productId).lean();
  } catch (error) {
    console.error("❌ Invalid product ID:", productId);
    return notFound();
  }

  if (!product) return notFound();

  // Ensure product is not an array
  if (Array.isArray(product)) return notFound();

  const serializedProduct = {
    ...product,
    _id: product._id?.toString?.() || "",
    name: product.name || "",
    slug: product.slug || "",
    image: product.image || "",
    price: product.price ?? 0,
  };

  return (
    <>
      <Header />
      <ProductDetailsClient product={serializedProduct} />
    </>
  );
}