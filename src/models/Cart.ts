// models/Cart.ts
import mongoose, { Schema, models, model } from "mongoose";

const CartSchema = new Schema(
  {
    userId: { type: String, required: true },
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        image: String,
        quantity: Number,
      },
    ],
  },
  { timestamps: true }
);

export const Cart = models.Cart || model("Cart", CartSchema);
