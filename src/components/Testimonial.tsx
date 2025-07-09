"use client";

import { Quote, Star, CheckCircle } from "lucide-react";
import { useState } from "react";

const hardcodedTestimonials = [
  {
    _id: "1",
    name: "Priya Mehta",
    company: "Surat",
    review:
      "Absolutely love the necklace I ordered! The design is elegant and the quality exceeded my expectations.",
  },
  {
    _id: "2",
    name: "Ravi Shah",
    company: "Ahmedabad",
    review:
      "The packaging, delivery, and jewelry quality were all amazing. Highly recommended for gifting too!",
  },
  {
    _id: "3",
    name: "Sneha Patel",
    company: "Mumbai",
    review:
      "Brado Jewellery has become my favorite brand. Their bangles collection is just beautiful.",
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextTestimonial = () => {
    setSelectedIndex((prev) => (prev + 1) % hardcodedTestimonials.length);
  };

  const prevTestimonial = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + hardcodedTestimonials.length) % hardcodedTestimonials.length
    );
  };

  const selected = hardcodedTestimonials[selectedIndex];

  return (
    <section className="py-20 bg-[#FAF7F2]" id="reviews">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4B3A2D] mb-10">
          💬 Client Testimonials
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 relative border border-gray-200">
          <Quote className="w-6 h-6 text-[#A88B6C] mb-4" />
          <p className="text-lg text-gray-700 italic mb-6">“{selected.review}”</p>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <p className="font-semibold">{selected.name}</p>
            <span className="text-[#A88B6C]">({selected.company})</span>
          </div>
          <div className="flex mt-4 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500" />
            ))}
          </div>

          {/* Navigation */}
          {hardcodedTestimonials.length > 1 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="text-[#5A3E85] hover:underline"
              >
                ← Previous
              </button>
              <button
                onClick={nextTestimonial}
                className="text-[#5A3E85] hover:underline"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
