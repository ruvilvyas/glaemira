// models/Category.ts
import mongoose, { Schema, models } from "mongoose";

const categorySchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
});

export const Category = models.Category || mongoose.model("Category", categorySchema);
