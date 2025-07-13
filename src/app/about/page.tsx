import React from "react";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#5A3E85]">About Gleamira</h1>

        <section className="mb-10 space-y-4">
          <p>
            Welcome to <strong>Gleamira</strong> — a demo e-commerce website built as a part of a web development learning project.
            This platform was designed to simulate a fully functional online jewelry store for educational and portfolio purposes.
            It is not a live commercial site, and no real transactions or deliveries occur through this website.
          </p>
          <p>
            Our demo store showcases beautiful UI/UX elements, modern front-end design using <strong>Next.js</strong>,
            dynamic backend integrations with <strong>MongoDB</strong>, and server-side rendering for enhanced performance.
            It includes features such as product filtering, shopping cart, wishlist, testimonials, and user login via social authentication.
          </p>
        </section>

        <h2 className="text-2xl font-semibold text-[#5A3E85] mb-4">Purpose of This Website</h2>
        <ul className="list-disc list-inside space-y-2 mb-10">
          <li>To demonstrate full-stack web development skills using Next.js App Router</li>
          <li>To test dynamic features such as MongoDB CRUD operations and authentication</li>
          <li>To build a personal portfolio project that simulates a real-world jewelry e-commerce website</li>
          <li>To provide practice for frontend animations, responsiveness, and styling with Tailwind CSS</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#5A3E85] mb-4">Terms & Conditions</h2>
        <ul className="list-disc list-inside space-y-2 mb-10 text-gray-700">
          <li>This website is intended solely for demonstration and learning purposes.</li>
          <li>None of the products listed are for sale, and no real payment gateways are connected.</li>
          <li>Any personal information entered is not stored or shared.</li>
          <li>Third-party services like Google/GitHub sign-in are simulated via secure OAuth integrations for learning only.</li>
          <li>All images used are sample placeholders and do not represent actual inventory or brand offerings.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#5A3E85] mb-4">Technology Stack</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Next.js 14</strong> – for building scalable server-rendered React apps</li>
          <li><strong>MongoDB Atlas</strong> – for storing product, category, and testimonial data</li>
          <li><strong>Tailwind CSS</strong> – for utility-first modern styling</li>
          <li><strong>NextAuth.js</strong> – for social authentication (Google/GitHub)</li>
        </ul>
      </main>
    </>
  );
}
