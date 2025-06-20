import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white/70 backdrop-blur-md border-t border-gray-300 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        {/* Left side - Logo or title */}
        <div className="text-indigo-600 font-bold text-lg">DevConnect</div>

        {/* Center - Links */}
        <div className="flex gap-32 text-gray-700 text-sm">
          <a href="/users" className="hover:text-indigo-600 transition">
            Users
          </a>
          <a href="/about_project" className="hover:text-indigo-600 transition">
            About
          </a>
        </div>

        {/* Right side - Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Robin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
