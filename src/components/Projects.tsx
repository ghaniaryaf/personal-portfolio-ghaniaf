// components/Projects.tsx

import React from "react";
import Card from "./Card";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      situation:
        "Client needed a modern e-commerce solution to increase online sales.",
      task: "Design and develop a responsive e-commerce platform with secure payment integration.",
      action:
        "Led a team of 3 developers to build the platform using Next.js, TypeScript, and Stripe API.",
      result:
        "Increased client's online sales by 45% in the first quarter post-launch.",
    },
    {
      title: "Healthcare Management System",
      situation:
        "Healthcare provider struggled with patient record management.",
      task: "Create an intuitive system for managing patient records and appointments.",
      action:
        "Developed a React-based application with secure authentication and real-time updates.",
      result:
        "Reduced administrative workload by 30% and improved patient satisfaction.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} title={project.title} description="">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-semibold">Situation:</h4>
                  <p className="text-gray-700">{project.situation}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Task:</h4>
                  <p className="text-gray-700">{project.task}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Action:</h4>
                  <p className="text-gray-700">{project.action}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Result:</h4>
                  <p className="text-gray-700">{project.result}</p>
                </div>
              </div>
              <div>
                <button className="ml-162.5 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  View Project
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
