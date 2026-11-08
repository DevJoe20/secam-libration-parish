'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Legacy() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans text-[#1e293b]">
      {/* Centered Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center font-bold tracking-tight mb-16 max-w-3xl mx-auto leading-tight">
        A Legacy of Faith and Aspiration
      </h2>

      {/* Two-Column Text Content with Downward Slide Animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-gray-700 text-base md:text-lg leading-relaxed"
      >
        <p>
          Founded on the principles of divine guidance and community service, Soaring Eagle Christians' Assembly and Ministry began as a small gathering of believers seeking a deeper connection with God. What started as a local fellowship has grown into a vibrant sanctuary where spiritual growth and communal strength are nurtured through every service and outreach initiative.
        </p>
        <p>
          Our journey is defined by a commitment to excellence in worship and a heart for the marginalized. From our early days in the sanctuary to our modern ministry platform, we remain dedicated to fostering an environment where every member can soar, guided by the grace of the Holy Spirit and the power of shared purpose.
        </p>
      </motion.div>
    </section>
  );
}