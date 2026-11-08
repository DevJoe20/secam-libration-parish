import React from 'react';

const eventsData = [
  {
    id: 1,
    title: 'Faith and Scripture Workshop',
    date: 'Tue, 01 Dec',
    location: 'Community Fellowship Hall',
    image: '/Faith.jpg',
    moreInfoUrl: '#',
    buttonText: 'Buy Tickets',
    buttonUrl: '#',
  },
  {
    id: 2,
    title: 'Christmas Carol Evening',
    date: 'Tue, 01 Dec',
    location: 'Grace Church Garden',
    image: '/Christmas.jpg',
    moreInfoUrl: '#',
    buttonText: 'RSVP',
    buttonUrl: '#',
  },
  {
    id: 3,
    title: 'Annual Gospel Choir Concert',
    date: 'Tue, 01 Dec',
    location: "St. Mary's Auditorium",
    image: '/Concert.jpg',
    moreInfoUrl: '#',
    buttonText: 'RSVP',
    buttonUrl: '#',
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 bg-white font-sans">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1e293b] tracking-tight">
          Upcoming Events
        </h2>
        <a
          href="#"
          className="inline-block border border-[#8c7a5b] text-[#8c7a5b] hover:bg-[#8c7a5b] hover:text-white transition-colors duration-200 px-6 py-2.5 text-sm font-medium tracking-wide uppercase"
        >
          View All Events
        </a>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="flex flex-col border border-gray-200 bg-white shadow-sm overflow-hidden text-center"
          >
            {/* Image Container */}
            <div className="relative aspect-square w-full bg-gray-100">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Event Details */}
            <div className="p-6 flex flex-col items-center flex-grow">
              <h3 className="text-xl font-serif text-[#1e293b] mb-2 leading-snug">
                {event.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3 tracking-wide">
                {event.date} <span className="mx-1">|</span> {event.location}
              </p>
              
              <a
                href={event.moreInfoUrl}
                className="text-xs text-[#8c7a5b] underline underline-offset-4 hover:text-[#6e5f46] mb-6 transition-colors"
              >
                More info
              </a>

              {/* Action Button */}
              <div className="mt-auto w-full flex justify-center">
                <a
                  href={event.buttonUrl}
                  className="w-32 border border-[#8c7a5b] text-[#8c7a5b] hover:bg-[#8c7a5b] hover:text-white transition-colors duration-200 py-2 text-xs font-medium uppercase tracking-wider text-center"
                >
                  {event.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}