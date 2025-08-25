// components/Experience.tsx
import React from 'react';
import Card from './Card';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Corp Inc.",
      period: "2020 - Present",
      description: "Leading frontend development for various client projects."
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions LLC",
      period: "2018 - 2020",
      description: "Developed responsive web applications using React and Vue.js."
    },
    {
      title: "Junior Developer",
      company: "StartUp Innovations",
      period: "2017 - 2018",
      description: "Started my career building basic websites and learning modern frameworks."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              title={exp.title}
              description={`${exp.company} | ${exp.period}`}
            >
              <p className="text-gray-700">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;