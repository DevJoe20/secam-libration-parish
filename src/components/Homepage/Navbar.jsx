"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Services", href: "/services" },
    { name: "Live Streaming", href: "/live-streaming" },
    { name: "Media Center", href: "/media-center" },
    { name: "Testimonies", href: "/testimonies" },
    { name: "Prayer Request", href: "/prayer-request" },
    { name: "Give", href: "/give" },
  ];

  return (
    <nav className="bg-white shadow-md w-full relative z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center h-16 shrink-0">
          <div className="pr-3 py-2">
            <img
              src="/secam.png"
              alt="SECAM logo"
              className="h-8 w-auto object-contain"
            />
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold text-black whitespace-nowrap">
              SECAM Liberation Parish
            </p>
          </div>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="lg:hidden p-2 text-black hover:text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:text-gray-700 text-sm xl:text-base whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="text-blue-950 underline underline-offset-4 hover:text-blue-700 text-sm xl:text-base whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700 font-medium py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="text-blue-950 underline underline-offset-4 hover:text-blue-700 font-medium py-1"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;