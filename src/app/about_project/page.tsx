"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 mt-4">📁 DevConnect</h1>
      <p className="mb-6 text-lg text-gray-700">
        DevConnect is a full-featured user management platform where users can
        create, edit, and explore profiles. Built with modern technologies, it
        focuses on performance, scalability, and an intuitive user experience.
      </p>

      <h2 className="text-3xl font-semibold mt-6 mb-2">🚀 Technologies Used</h2>
      <ul className="flex flex-wrap gap-3 mb-4 mt-4 text-xl">
        <li className="bg-gray-100 px-3 py-1 rounded">Next.js</li>
        <li className="bg-gray-100 px-3 py-1 rounded">Tailwind CSS</li>
        <li className="bg-gray-100 px-3 py-1 rounded">TypeScript</li>
        <li className="bg-gray-100 px-3 py-1 rounded">Redux Toolkit</li>
        <li className="bg-gray-100 px-3 py-1 rounded">MockAPI</li>
      </ul>

      <h2 className="text-3xl font-semibold mt-6 mb-2">✅ Features</h2>
      <ul className="list-disc list-inside text-gray-700 mb-6 text-xl">
        <li>User profile creation and editing</li>
        <li>User listing with pagination</li>
        <li>Responsive and accessible UI</li>
        <li>Mock API integration for backend simulation</li>
      </ul>

      <div className="flex gap-4">
        <Link
          href="https://github.com/MrBakieth/devconnect-next"
          target="_blank"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          GitHub Repo
        </Link>
      </div>
    </main>
  );
};

export default page;
