import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Rev. Dr. Marcus Thorne',
    role: 'Senior Pastor',
    image: '/mark.jpg', // Replace with your image path
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Church Secretary',
    image: '/john.jpg', // Replace with your image path
  },
  {
    id: 3,
    name: 'James Sterling',
    role: 'Church Elder',
    image: '/alfred.jpg', // Replace with your image path
  },
  {
    id: 4,
    name: 'Elena Rodriguez',
    role: 'Church Administrator',
    image: '/eni.jpg', // Replace with your image path
  },
];

export default function LeadershipTeam() {
  return (
    <section className="w-full max-w-8xl mx-auto px-6 py-16 bg-white font-sans text-[#1e293b]">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 font-semibold tracking-tight">
        Leadership Team
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-center text-center">
            {/* Circular Image Container with Border */}
            <div className="relative w-44 h-44 rounded-full overflow-hidden border border-[#2c3e50] mb-6 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Member Details */}
            <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1e293b] mb-1">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 font-normal">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}