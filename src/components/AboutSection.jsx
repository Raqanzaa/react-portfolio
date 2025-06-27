import React, { useState } from "react";
import profileMain from "../assets/profile.png";
import ProfileCard from './animation/ProfileCard.jsx'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-between px-6 md:px-9 py-6 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-transparent dark:text-white mb-16 relative">
          About <span className="text-teal-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">

            <ProfileCard
              name=""
              title=""
              handle="Raqanzaa"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileMain}
              showUserInfo={false}
              enableTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
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
