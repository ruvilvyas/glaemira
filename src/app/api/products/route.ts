import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Product } from "@/models/Product";

// GET products with optional ?limit=
export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const limit = req.nextUrl.searchParams.get("limit") || "6";
    const products = await Product.find().limit(parseInt(limit));
    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: Add product
export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, price, image } = await req.json();

    if (!name || !price || !image) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const newProduct = await Product.create({ name, price, image });
    return NextResponse.json(newProduct, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
