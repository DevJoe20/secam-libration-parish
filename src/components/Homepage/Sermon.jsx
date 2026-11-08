import React from 'react';

const sermonsData = [
  {
    id: 1,
    title: 'Healing Through Faith',
    date: 'Oct 12, 2026',
    link: '#',
  },
  {
    id: 2,
    title: 'Stewardship and Grace',
    date: 'Oct 05, 2026',
    link: '#',
  },
  {
    id: 3,
    title: "God's Promises to Us",
    date: 'Sep 28, 2026',
    link: '#',
  },
];

export default function Sermon() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans text-[#1e293b]">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1e293b] font-bold tracking-tight mb-4">
          Latest Sermons
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl leading-relaxed">
          Explore our most recent messages of hope, guidance, and spiritual reflection from our Soaring Eagle ministry.
        </p>
      </div>

      {/* Sermons List */}
      <div className="divide-y divide-gray-200 border-b border-gray-200 mb-12">
        {sermonsData.map((sermon) => (
          <div
            key={sermon.id}
            className="flex flex-row justify-between items-center py-6 group cursor-pointer"
          >
            <a
              href={sermon.link}
              className="text-2xl md:text-3xl font-serif font-bold text-[#1e293b] group-hover:text-[#96722b] transition-colors duration-200"
            >
              {sermon.title}
            </a>
            <span className="text-xs md:text-sm text-gray-400 font-normal whitespace-nowrap ml-4">
              {sermon.date}
            </span>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-block bg-[#96722b] hover:bg-[#7e5f22] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
        >
          View All Sermons
        </a>
      </div>
    </section>
  );
}