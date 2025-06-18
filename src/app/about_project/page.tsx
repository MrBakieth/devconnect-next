"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-center">
        📁 DevConnect
      </h1>

      <p className="text-base sm:text-lg text-gray-700 mb-8 text-center">
        DevConnect is a full-featured user management platform where users can
        create, edit, and explore profiles. Built with modern technologies, it
        focuses on performance, scalability, and an intuitive user experience.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
          🚀 Technologies Used
        </h2>
        <ul className="flex flex-wrap justify-center sm:justify-start gap-3 text-base sm:text-xl">
          {[
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Redux Toolkit",
            "MockAPI",
          ].map((tech) => (
            <li
              key={tech}
              className="bg-gray-100 px-4 py-2 rounded-md shadow text-gray-800"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center sm:text-left">
          ✅ Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-base sm:text-xl space-y-2">
          <li>User profile creation and editing</li>
          <li>User listing with pagination</li>
          <li>Responsive and accessible UI</li>
          <li>Mock API integration for backend simulation</li>
        </ul>
      </section>

      <div className="flex justify-center sm:justify-start">
        <Link
          href="https://github.com/MrBakieth/devconnect-next"
          target="_blank"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition text-base sm:text-lg"
        >
          GitHub Repo
        </Link>
      </div>
    </main>
  );
};

export default page;
