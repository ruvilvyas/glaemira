// /app/api/categories/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Category } from "@/models/Category";

// GET: Fetch all categories
export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (error) {
    console.error("GET /api/categories error:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

// POST: Add a new category
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { name, slug, image } = await req.json();

    if (!name || !slug || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const category = await Category.create({ name, slug, image });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error("POST /api/categories error:", error);
    return NextResponse.json(
      { error: "Failed to create category" },
      { status: 500 }
    );
  }
}