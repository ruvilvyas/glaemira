// app/category/[id]/page.tsx
import { notFound } from "next/navigation";
import connectDB from "@/lib/db";
import { Category } from "@/models/Category";
import Header from "@/components/header";
import CategoryDetailsClient from "@/components/CategoryDetailsClient";
import mongoose from "mongoose";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { id: categoryId } = await params;

  await connectDB();

  try {
    const category = await Category.findById(
      new mongoose.Types.ObjectId(categoryId)
    ).lean() as {
      _id: mongoose.Types.ObjectId;
      name: string;
      slug: string;
      image: string;
    } | null;

    if (!category) return notFound();

    const serializedCategory = {
      _id: category._id.toString(),
      name: category.name,
      slug: category.slug,
      image: category.image,
    };

    return (
      <>
        <Header />
        <CategoryDetailsClient category={serializedCategory} />
      </>
    );
  } catch (err) {
    console.error("Category fetch failed:", err);
    return notFound();
  }
}
