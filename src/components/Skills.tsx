// components/Skills.tsx

import React from 'react';
import Card from './Card';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "Webpack", "Jest", "Agile Methodology", "CI/CD", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} title={category.title} description="">
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;