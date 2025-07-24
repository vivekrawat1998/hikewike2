import React from "react";

export default function Enge() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <img
        src="/images/mountains-realistic.jpg" // Replace with your image path
        alt="Mountain adventure"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-green-900/60 to-transparent z-10"></div>
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow font-extrabold text-green-800 text-3xl tracking-tight">
            HW
          </div>
        </div>
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-md mb-6">
          Track. <span className="text-yellow-300">Trek.</span>{" "}
          <span className="bg-gradient-to-r from-lime-200 to-green-200 bg-clip-text text-transparent">
            Trailblaze.
          </span>
        </h1>
        <p className="text-white/90 text-lg md:text-2xl mb-8">
          Guided mountain adventures & real-time tracking for modern explorers.
        </p>
        {/* CTA */}
        <a
          href="#trips"
          className="inline-block px-8 py-4 rounded-full bg-yellow-300 text-green-900 font-bold text-lg hover:bg-yellow-200 shadow-lg transition"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
}
