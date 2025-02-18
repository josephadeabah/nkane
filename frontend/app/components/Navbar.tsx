'use client'; // Add this line to enable client-side interactivity

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50 shadow-cyan-800">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Nkane
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-cyan-800 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-cyan-800 transition-colors">
            About
          </Link>
          <Link
            href="/stories"
            className="hover:text-cyan-800 transition-colors"
          >
            Stories
          </Link>
          <Link
            href="/contact"
            className="hover:text-cyan-800 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Call-to-Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/join-waitlist"
            className="bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-cyan-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="/stories"
              className="hover:text-cyan-500 transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/contact"
              className="hover:text-cyan-500 transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/join-waitlist"
              className="bg-cyan-800 text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors text-center"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
