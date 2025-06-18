"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          DevConnect
        </Link>
        <div className="hidden md:flex space-x-6 mr-12">
          <Link
            href="/users"
            className="text-gray-700 hover:text-indigo-600 transition text-xl font-medium"
          >
            Users
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 mr-12">
          <Link
            href="/about_project"
            className="text-gray-700 hover:text-indigo-600 transition text-xl font-medium"
          >
            About Project
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white p-4 shadow-md md:hidden z-50">
            <Link
              href="/users"
              className="block text-gray-700 hover:text-indigo-600 transition text-lg font-medium py-2"
            >
              Users
            </Link>
            <Link
              href="/about_project"
              className="block text-gray-700 hover:text-indigo-600 transition text-lg font-medium py-2"
            >
              About Project
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
