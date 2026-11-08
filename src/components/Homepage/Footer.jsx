
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-white text-[#172033]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10">

        {/* FOOTER TOP SECTION */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* BRAND */}
          <div className="flex items-start gap-4">
            <img
              src="/secam.png"
              alt="SECAM Libration Parish"
              className="mb-5 h-8 w-auto object-contain"
            />

            <p className="max-w-[290px] text-[15px] leading-[19px]">
              Soaring Eagle Christians' Assembly and
              Ministry. A platform for spiritual growth
              and community.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 font-serif text-[22px] font-bold">
              Get in Touch
            </h3>

            <ul className="space-y-2 text-[15px]">
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  123 Eagle Way, Libration Parish
                </a>
              </li>

              <li>
                <a
                  href="tel:+15550123456"
                  className="transition hover:text-blue-600"
                >
                  +1 (555) 012-3456
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@secamlibration.org"
                  className="transition hover:text-blue-600"
                >
                  hello@secamlibration.org
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL LINKS */}
          <div>
            <h3 className="mb-4 font-serif text-[22px] font-bold">
              Follow Us
            </h3>

            <ul className="space-y-2 text-[15px]">
              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-600">
                  Instagram
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-blue-600">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-4 font-serif text-[22px] font-bold">
              Legal
            </h3>

            <ul className="space-y-2 text-[15px]">
              <li>
                <a href="/privacy-policy" className="transition hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/terms-of-service" className="transition hover:text-blue-600">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="/accessibility" className="transition hover:text-blue-600">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-gray-300"></div>

        {/* COPYRIGHT SECTION */}
        <div className="flex flex-col gap-5 text-[14px] md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Soaring Eagle Christians'
            Assembly and Ministry. All rights reserved.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-7">
            <span>SECAM Libration Parish</span>

            <span>Soaring Eagle Christians' Assembly</span>
          </div>

        </div>

        {/* DEVELOPER CREDIT */}
        <div className="mt-5 border-t border-gray-100 pt-4 text-center text-sm text-gray-500">
          Developed by{" "}
          <span className="font-semibold text-gray-800">
            Oluwatimileyin J. Asha
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
