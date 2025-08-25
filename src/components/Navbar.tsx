// components/Navbar.tsx
'use client';
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">Portfolio</div>
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">About</button>
          <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600">Experience</button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600">Projects</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600">Testimonials</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;