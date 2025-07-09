import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true }, // used for dynamic URL like /category/necklaces
  image: { type: String, required: true }, // URL of category image
});

export const Category = mongoose.models.Category || mongoose.model("Category", CategorySchema);
