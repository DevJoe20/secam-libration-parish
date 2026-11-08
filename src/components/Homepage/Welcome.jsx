import Link from "next/link";

export default function Welcome() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF9F6] flex justify-center items-center">
      <div className="max-w-3xl text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1423] leading-tight tracking-tight mb-6">
          Welcome to Soaring Eagle Christians' Assembly and Ministry
        </h2>

        {/* Subtitle / Description */}
        <p className="font-sans text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mb-8">
          At Soaring Eagle Christians' Assembly and Ministry, we believe in a 
          spiritual journey that is as beautiful as it is meaningful. Our mission 
          is to provide a sacred space where faith meets community, fostering 
          growth through worship, service, and shared purpose.
        </p>

        {/* Learn More Action Link */}
        <div>
          <Link
            href="/about"
            className="font-sans text-base font-semibold text-[#9E783B] hover:text-[#7E5C25] underline underline-offset-8 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}