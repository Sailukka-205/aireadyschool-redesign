"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-semibold text-gray-900 text-sm tracking-tight">
            AI Ready School
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#products"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Schools
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="#contact"
            className="bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-700"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <Link
            href="#products"
            className="text-sm text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-sm text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="text-sm text-gray-700"
            onClick={() => setMenuOpen(false)}
          >
            Schools
          </Link>
          <Link
            href="#contact"
            className="bg-indigo-600 text-white text-sm px-5 py-2.5 rounded-lg text-center font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
