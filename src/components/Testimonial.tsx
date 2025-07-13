"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Quote, Star, CheckCircle } from "lucide-react";

interface Testimonial {
  _id: string;
  name: string;
  company: string;
  review: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/testimonials");
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSelectedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const selected = testimonials[selectedIndex];

  return (
    <section className="py-20 bg-[#FAF7F2]" id="reviews">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#4B3A2D] mb-10">
          💬 Client Testimonials
        </h2>

        <div className="text-center mb-8">
          <Link href="/review">
            <button className="bg-[#5A3E85] text-white px-6 py-2 rounded-lg hover:bg-[#452c68] transition">
              Leave Your Review
            </button>
          </Link>
        </div>

        {/* Main Testimonial Card */}
        {selected && (
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

            {testimonials.length > 1 && (
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
        )}
      </div>
    </section>
  );
}
