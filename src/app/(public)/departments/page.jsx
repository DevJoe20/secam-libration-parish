import React from 'react';

const departmentsData = [
  {
    id: 1,
    name: 'Choir',
    description:
      'Join our vibrant choir in worshiping God through beautiful vocal harmonies and sacred music.',
    lead: 'Sarah Jenkins',
    email: 'choir@secam.org',
    image: '/choir.jpg',
  },
  {
    id: 2,
    name: 'Ushering',
    description:
      'Our welcoming team ensures a seamless experience for every visitor, providing hospitality and service.',
    lead: 'Michael Thompson',
    email: 'ushering@secam.org',
    image: '/ushering.jpg',
  },
  {
    id: 3,
    name: 'Youth',
    description:
      'Empowering the young generation through spiritual growth, fellowship, and dynamic ministry activities.',
    lead: 'David Okon',
    email: 'youth@secam.org',
    image: '/youth.jpg',
  },
  {
    id: 4,
    name: 'Evangelism',
    description:
      'Dedicated to spreading the Gospel of Jesus Christ across our local community and beyond.',
    lead: 'Emmanuel Adebayo',
    email: 'evangelism@secam.org',
    image: '/evangelism.jpg',
  },
  {
    id: 5,
    name: 'Children',
    description:
      'Nurturing young minds in the love of Christ with interactive Bible lessons and engaging fun.',
    lead: 'Grace Williams',
    email: 'children@secam.org',
    image: '/children.jpg',
  },
  {
    id: 6,
    name: 'Media',
    description:
      'Capturing, streaming, and managing our digital content to broadcast the Gospel to the world.',
    lead: 'Daniel Vance',
    email: 'media@secam.org',
    image: '/media.jpg',
  },
  {
    id: 7,
    name: 'Technical',
    description:
      'Managing sound production, acoustics, lighting, and stage technology for high-quality worship services.',
    lead: 'Peter Mensah',
    email: 'technical@secam.org',
    image: '/technical.jpg',
  },
  {
    id: 8,
    name: 'Welfare',
    description:
      'Showing Christ’s love by supporting members in need through care packages, visitation, and benevolence.',
    lead: 'Hannah Brooks',
    email: 'welfare@secam.org',
    image: '/welfare.jpg',
  },
  {
    id: 9,
    name: 'Sanctuary Keeper',
    description:
      'Ensuring God’s house is maintained, pristine, beautiful, and prepared for every service.',
    lead: 'Josephine Adams',
    email: 'sanctuary@secam.org',
    image: '/sanctuary.jpg',
  },
];

export default function Department() {
  return (
    <section className="w-full mx-auto px-12 py-16 bg-[#faf9f6] font-sans text-[#1e293b]">
      {/* Header Title */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1e293b] tracking-tight mb-12">
        Our Departments
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {departmentsData.map((dept) => (
          <div
            key={dept.id}
            className="border border-gray-300 bg-white p-5 flex flex-col justify-between shadow-sm"
          >
            {/* Department Image */}
            <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden mb-6">
              <img
                src={dept.image}
                alt={dept.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Department Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-[#1e293b] mb-3">
                {dept.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {dept.description}
              </p>

              {/* Lead & Contact Footer */}
              <div className="mt-auto text-xs text-gray-500 space-y-1">
                <p>
                  <span className="font-normal">Lead:</span> {dept.lead}
                </p>
                <a
                  href={`mailto:${dept.email}`}
                  className="block hover:underline text-gray-500"
                >
                  {dept.email}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}