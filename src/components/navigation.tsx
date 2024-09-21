// "@/components/Navigation.jsx"
"use client";
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-2">
      <h1 className="text-2xl font-bold">Stevenson Chiropractic</h1>
      <ul className="flex space-x-8">
        <li>
          <Link href="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
