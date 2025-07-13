"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");

    // Fake login logic (replace with real one)
    if (email === "test@example.com" && password === "123456") {
      localStorage.setItem("gleamira-user", email);
      setStatus("Login Successfully!");

      setTimeout(() => {
        router.push("/"); // Redirect to home/hero page
      }, 1500);
    } else {
      setStatus("❌ Invalid email or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFFDF4] px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-[#5A3E85] mb-6">
          Gleamira Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#5A3E85]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-[#5A3E85]"
            />
          </div>

          {status && (
            <p
              className={`text-sm mt-2 ${
                status.includes("Successfully") ? "text-green-600" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#5A3E85] text-white py-2 rounded-lg font-semibold hover:bg-[#452c68] transition"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}