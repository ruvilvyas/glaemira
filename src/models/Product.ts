import mongoose, { Schema, models, model } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
     slug: { type: String },
    category: { type: String }, // optional: for filtering later
    featured: { type: Boolean, default: false }, // optional
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", ProductSchema);
