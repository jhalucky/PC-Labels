"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-effect fixed w-full z-50 border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-3">
            <img src="/images/logos/logo.png" alt="PC Labels" className="w-12 h-12 rounded-xl" style={{ objectFit: 'contain' }} />
            <Link href="/" className="text-3xl mt-2 font-display font-bold gradient-text">
              PC Labels
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition hover:bg-gray-200/50 dark:hover:bg-gray-800/50"
              >
                Contact
              </Link>
            </div>
            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800">
            <Link
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

