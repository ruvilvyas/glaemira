"use client";

import React, { useState } from "react";

export default function CollectionForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    image: ""
  });
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    let imageUrl = form.image.trim();

    // If file is selected, upload it and get URL
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      } catch (err) {
        console.error("Upload failed", err);
      }
    } else {
      // Fix: If it's a local file (e.g., "gift.jpg"), prepend "/"
      if (imageUrl && !imageUrl.startsWith("/") && !imageUrl.startsWith("http")) {
        imageUrl = `/${imageUrl}`;
      }
    }

    const isValidUrl = /^(https?:\/\/.*\.(png|jpg|jpeg|webp|gif))$/i.test(imageUrl);
    const isLocalValid = imageUrl.startsWith("/") && /\.(png|jpg|jpeg|webp|gif)$/i.test(imageUrl);

    if (!imageUrl || (!isValidUrl && !isLocalValid)) {
      imageUrl = "/gift.jpg";
    }

    const res = await fetch("/api/categories", {
      method: "POST",
      body: JSON.stringify({ ...form, image: imageUrl }),
      headers: { "Content-Type": "application/json" }
    });

    if (res.ok) {
      alert("Collection saved successfully!");
      setForm({ name: "", slug: "", image: "" });
      setFile(null);
    } else {
      alert("Failed to save collection.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Collection</h2>
      <div className="space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Collection Name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <input
          name="slug"
          value={form.slug}
          onChange={handleChange}
          placeholder="Slug (URL-friendly name)"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder='Image URL or filename like "gift.jpg"'
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        {/* File Upload UI */}
        <div className="w-full">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M4 12l8-8m0 0l8 8m-8-8v16"
              ></path>
            </svg>
            Upload Image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {file && (
            <p className="text-sm text-green-600">Selected: {file.name}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Save Collection
        </button>
      </div>
    </div>
  );
}