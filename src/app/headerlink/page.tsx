// ✅ src/app/rings/page.tsx

import Header from "@/components/header";
import FeaturedProducts from "@/components/Products";

export default function RingsPage() {
  return (
    <>
      <Header />
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold">our Collection✨</h1>
        <p className="mt-4 text-gray-600">This page is under construction.</p>
      </div>
      <FeaturedProducts />
    </>
  );
}
