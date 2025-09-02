// components/About.tsx
import React from "react";
import Card from "./Card";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            className="h- rounded-full mx-auto mb-6"
            src="https://i.pinimg.com/736x/8c/dd/7d/8cdd7de1fe7e1dc44c19a36cb861acbc.jpg"
            alt="ghani-foto"
          />
          <div className="space-y-6 flex flex-col justify-center">
            <Card
              title="Background"
              description="I'm a passionate frontend developer with 5 years of experience creating web applications."
            >
              <p className="text-gray-700">
                I specialize in React, Next.js, and TypeScript, with a strong
                focus on user experience and clean code.
              </p>
            </Card>
            <Card
              title="Education"
              description="Bachelor's Degree in Computer Science from Tech University."
            >
              <p className="text-gray-700">
                Graduated with honors in 2018. Continued learning through online
                courses and professional development.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
