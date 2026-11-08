'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: 'Our Mission',
    description:
      'To spread the message of Christ and build a community of faith that seeks to live by His teachings in every aspect of life.',
    icon: (
      /* Dove Icon */
      <svg
        className="w-8 h-8 text-[#b89547]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C10.5 4 8 6.5 4 6c1.5 2.5 4.5 4 7 4-1 2-3 4.5-6 6 3-1 6-3 7-5.5.5 2 2 4.5 5 5.5-2-1.5-3.5-3.5-3.5-6 2.5 0 5.5-1.5 7-4-4 .5-6.5-2-8-4z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Our Vision',
    description:
      'To be a beacon of hope and spiritual growth, empowering our members to lead with wisdom and compassion in the modern world.',
    icon: (
      /* Cross Icon Container */
      <div className="w-10 h-10 bg-gradient-to-b from-gray-400 to-gray-600 rounded flex items-center justify-center text-[#d4af37]">
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M11 2h2v6h6v2h-6v12h-2V10H5V8h6V2z" />
        </svg>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Our Values',
    description:
      'Integrity, Compassion, Unity, and Service are the core pillars that define our identity as a modern Christian assembly.',
    icon: (
      /* Flame Icon */
      <svg
        className="w-8 h-8 text-[#e5a93c]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2c0 0-5 5-5 10 0 3.87 3.13 7 7 7s7-3.13 7-7c0-2-1-4-2-5 0 0 .5 2-1 3.5C16.5 12 14.5 11 14 9c-.5 2-2 3.5-3.5 4-1-1-1-2.5 0-4 1-1.5 1.5-4 1.5-7z" />
      </svg>
    ),
  },
];

export default function Mission() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans text-[#1e293b] overflow-hidden">
      {/* Header Section - Fades in slowly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e293b] tracking-tight mb-6">
          Our Mission &amp; Values
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          At Soaring Eagle Christians' Assembly and Ministry, we are dedicated to building a vibrant community of faith, fostering spiritual growth, and leading with integrity in the heart of SECAM Libration Parish.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="flex flex-col items-start bg-[#f9f9fb] border border-[#c4a459] rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Icon Slot */}
            <div className="mb-6 flex items-center justify-center h-10">
              {card.icon}
            </div>

            {/* Title - Slides from right to left */}
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
              className="text-2xl md:text-3xl font-serif font-bold text-[#1e293b] mb-4"
            >
              {card.title}
            </motion.h3>

            {/* Description - Slides downward */}
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
              className="text-gray-600 text-sm md:text-base leading-relaxed"
            >
              {card.description}
            </motion.p>
          </div>
        ))}
      </div>
    </section>
  );
}