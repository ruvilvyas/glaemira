"use client"; // ✅ Required if using useSession

import { useSession, signIn } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome, {session.user?.name}</h1>
        <p className="text-gray-600">You&apos;re already logged in.</p>
      </div>
    );
  }

  return (
    <div className="p-8 text-center">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Login to Gleamira</h2>
      <p className="mb-6 text-gray-600">Choose a provider to login.</p>
      <button
        onClick={() => signIn("google")}
        className="bg-red-500 text-white px-4 py-2 rounded-lg mb-2"
      >
        Sign in with Google
      </button>
      <br />
      <button
        onClick={() => signIn("github")}
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
