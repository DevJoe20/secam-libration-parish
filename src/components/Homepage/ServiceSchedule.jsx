export default function ServiceSchedule() {
  const scheduleItems = [
    {
      day: "Sunday",
      title: "Sunday Service & Celebration",
      timeAndLocation: "08:00 AM & 06:00 PM | Main Sanctuary, SECAM Headquarters, Benin City",
    },
    {
      day: "Monday",
      title: "Small Group & Bible Study",
      timeAndLocation: "09:00 AM | Sanctuary Hall, 2nd Floor",
    },
    {
      day: "Wednesday",
      title: "Midweek Prayer & Communion",
      timeAndLocation: "10:30 AM | Prayer Pavilion",
    },
  ];

  return (
    <section className="w-full py-20 px-8 sm:px-6 lg:px-8 bg-[#FAF9F6] flex justify-center">
      <div className="max-w-7xl w-full">
        
        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A1423] mb-12">
          Weekly Service Schedule
        </h2>

        {/* Schedule Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Day Label */}
                <span className="font-serif text-sm sm:text-base font-semibold text-[#9E783B] tracking-wide block mb-3">
                  {item.day}
                </span>

                {/* Service Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1423] leading-tight mb-6">
                  {item.title}
                </h3>
              </div>

              {/* Time and Location Info */}
              <p className="font-sans text-xs sm:text-sm text-gray-600 font-medium leading-relaxed border-t border-gray-200/60 pt-4">
                {item.timeAndLocation}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}