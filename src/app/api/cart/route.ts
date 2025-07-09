// app/api/cart/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import { Cart } from "@/models/Cart";

export async function POST(req: Request) {
  await connectDB();
  const { userId, item } = await req.json();

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({ userId, items: [item] });
  } else {
    const existingItem = cart.items.find((i: any) => i.productId.equals(item.productId));

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.items.push(item);
    }
    await cart.save();
  }

  return NextResponse.json(cart);
}
