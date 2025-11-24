"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] to-[#15151f] opacity-70"></div>

      {/* Grid Texture */}
      <div className="absolute inset-0 pointer-events-none bg-[url('/grid.png')] opacity-[0.08] mix-blend-soft-light"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-white to-[oklch(70%_0.12_240)] text-transparent bg-clip-text">
          404
        </h1>

        <p className="text-white/70 text-lg max-w-md mx-auto">
          This page does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="
            mt-8 inline-block px-8 py-4 rounded-2xl text-lg font-medium
            bg-[oklch(70%_0.12_240)] text-white border border-transparent
            shadow-xl transition-all duration-300

            hover:bg-white
            hover:text-[oklch(70%_0.12_240)]
            hover:border-[oklch(70%_0.12_240)]
          "
        >
          Back to Home
        </Link>
      </div>
      
    </div>
  );
}
