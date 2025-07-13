const mongoose = require('mongoose');

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/glaemira';

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  description: { type: String },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

const Category = mongoose.model('Category', CategorySchema);

const categories = [
  {
    name: "Necklaces",
    slug: "necklaces",
    image: "/neckles.png",
    description: "Elegant necklaces for every occasion"
  },
  {
    name: "Rings",
    slug: "rings",
    image: "/ring.png",
    description: "Beautiful rings to adorn your fingers"
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    image: "/bracelet.png",
    description: "Stylish bracelets for your wrists"
  },
  {
    name: "Earrings",
    slug: "earrings",
    image: "/ring.png",
    description: "Gorgeous earrings to complement your look"
  },
  {
    name: "Dress",
    slug: "dress",
    image: "/kurti.png",
    description: "Traditional and modern dress collections"
  }
];

async function seedCategories() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing categories
    await Category.deleteMany({});
    console.log('Cleared existing categories');

    // Insert new categories
    const result = await Category.insertMany(categories);
    console.log(`Inserted ${result.length} categories`);

    console.log('Categories seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding categories:', error);
    process.exit(1);
  }
}

seedCategories(); 