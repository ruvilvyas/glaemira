import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import { Product } from "@/models/Product";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import Header from "@/components/header";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id: productId } = await params;

  await connectDB();

  try {
    const product = await Product.findById(productId).lean();

    if (!product || Array.isArray(product)) {
      return notFound();
    }

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
  } catch {
    return notFound();
  }
}