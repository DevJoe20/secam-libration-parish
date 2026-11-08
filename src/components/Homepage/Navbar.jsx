
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white flex space-x-5 items-center px-4 py-2 shadow-md">

      {/* Logo section */}
      <div className="flex items-center h-16 shrink-0">
        <div className="px-4 py-2">
          <img
            src="/secam.png"
            alt="SECAM logo"
            className="h-8 w-auto object-contain"
          />
        </div>

        <div>
          <p className="text-lg font-semibold text-black whitespace-nowrap">
            SECAM Liberation Parish
          </p>
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-8 px-4 py-2">
        <Link href="/" className="text-black hover:text-gray-700">
          Home
        </Link>

        <Link href="/about" className="text-black hover:text-gray-700">
          About
        </Link>

        <Link href="/departments" className="text-black hover:text-gray-700">
          Departments
        </Link>

        <Link href="/live-streaming" className="text-black hover:text-gray-700">
          Live Streaming
        </Link>

        <Link href="/media-center" className="text-black hover:text-gray-700">
          Media Center
        </Link>

        <Link href="/testimonies" className="text-black hover:text-gray-700">
          Testimonies
        </Link>

        <Link href="/prayer-request" className="text-black hover:text-gray-700">
          Prayer Request
        </Link>

        <Link href="/give" className="text-black hover:text-gray-700">
          Give
        </Link>

        <Link
          href="/contact-us"
          className="text-blue-950 underline underline-offset-4 hover:text-blue-700"
        >
          Contact Us
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;
