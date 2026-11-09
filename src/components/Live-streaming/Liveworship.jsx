import React from 'react';

export default function LiveWorship() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16 bg-white font-sans text-[#1e293b] text-center">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e293b] tracking-tight mb-4">
        Live Worship Streaming
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8">
        Join our congregation in real-time for a vibrant and communal experience. Watch the live broadcast of our weekly services and prayers from the comfort of your home.
      </p>

      {/* Watch Live Button */}
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-block bg-[#96722b] hover:bg-[#7e5f22] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
        >
          Watch Live
        </a>
      </div>
    </section>
  );
}