// components/Hero.tsx
'use client'
import React from "react";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gray-50 pt-16"
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
          Frontend Developer
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I create beautiful, functional, and responsive web applications using
          modern technologies.
        </p>
        <button onClick={() => scrollToSection("projects")} className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          View My Work
        </button>
        <button className="ml-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Hero;
