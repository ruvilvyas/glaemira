// src/app/api/categories/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Category } from "@/models/Category";

export async function GET() {
  try {
    await connectDB();
    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET /api/categories error:", error); // ✅ used here
    return NextResponse.json({ message: "Failed to fetch categories" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();

  try {
    const body = await req.json();
    const { name, slug, image } = body;

    if (!name || !slug || !image) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newCategory = await Category.create({
      name,
      slug,
      image,
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (err) {
    console.error("POST /api/categories error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
