"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-[#2c3e50] text-white">
      <div className="text-2xl">
        <Link href="/">MyLogo</Link>
      </div>
      
      {/* Hamburger menu (only visible on small screens) */}
      <button
        className="block text-2xl focus:outline-none sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Full-Screen Popup (only visible on small screens) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#2c3e50] flex justify-center items-center z-[9999] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } sm:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-[#ecf0f1] text-2xl cursor-pointer z-[10000] focus:outline-none"
          onClick={closeMenu}
          aria-label="Close navigation"
        >
          ❌
        </button>
        <ul className="list-none text-center p-0">
          <li className="my-5">
            <a  onClick={closeMenu} className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
              Home
            </a>
          </li>
          <li className="my-5">
            <a  onClick={closeMenu} className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
              About
            </a>
          </li>
          <li className="my-5">
            <a  onClick={closeMenu} className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
              Services
            </a>
          </li>
          <li className="my-5">
            <a  onClick={closeMenu} className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Links (always visible on large screens) */}
      <ul className="hidden sm:flex list-none text-center p-0">
        <li className="mx-5">
          <a  className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
            Home
          </a>
        </li>
        <li className="mx-5">
          <a  className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
            About
          </a>
        </li>
        <li className="mx-5">
          <a  className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
            Services
          </a>
        </li>
        <li className="mx-5">
          <a  className="text-2xl text-[#ecf0f1] hover:text-[#f1c40f] transition-colors duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
