import React from 'react';

const broadcastsData = [
  {
    id: 1,
    title: 'Live Worship 10/2025',
    description: 'Join us as we gather in spirit for our weekly service broadcast.',
    image: '/live-worship-1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Weekly Sermon Series',
    description: 'Deepen your faith with our latest sermon on community and growth.',
    image: '/weekly-sermon.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Community Prayer',
    description: 'Experience the power of collective prayer in our online sanctuary.',
    image: '/community-prayer.jpg',
    link: '#',
  },
];

export default function RecentBroadcast() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 bg-white font-sans text-[#1e293b]">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-serif text-center font-bold tracking-tight mb-16 text-[#1e293b]">
        Recent Broadcasts
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {broadcastsData.map((broadcast) => (
          <div
            key={broadcast.id}
            className="border border-[#2c3e50] rounded-3xl bg-white overflow-hidden flex flex-col shadow-sm"
          >
            {/* Full-Length Card Image at the Top */}
            <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden">
              <img
                src={broadcast.image}
                alt={broadcast.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold text-[#1e293b] mb-3">
                {broadcast.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {broadcast.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered CTA Button */}
      <div className="flex justify-center">
        <a
          href="#"
          className="inline-block bg-[#96722b] hover:bg-[#7e5f22] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-sm"
        >
          View All Broadcasts
        </a>
      </div>
    </section>
  );
}