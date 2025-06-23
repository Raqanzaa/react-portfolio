import React, { useState } from "react";
import profileMain from "../assets/profile.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-between px-6 md:px-9 py-6 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-transparent dark:text-white mb-16 relative">
          About <span className="text-blue-700">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
            <div className="relative w-full h-full bg-gray-400/50 rounded-full border-2 border-gray-200 overflow-hidden group">
              <img
                src={profileMain}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-blue-700 z-10 relative"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Web Full-Stack Developer & AI Specialist
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I build production-ready applications using AI as my coding
              partner. With solid programming fundamentals, I leverage AI to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
              <li>Generate and refine code with AI assistance</li>
              <li>Enhance development speed without compromising quality</li>
              <li>Verify and adapt AI outputs to real-world requirements</li>
              <li>Maintain clean architecture and best practices</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300">
              This hybrid approach delivers efficient, maintainable solutions
              that combine AI efficiency with developer expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
