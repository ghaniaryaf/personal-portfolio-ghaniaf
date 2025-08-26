// components/Testimonials.tsx
'use client';
import React, { useState } from 'react';
import Card from './Card';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Jane Smith",
      role: "Product Manager at Tech Corp",
      content: "John delivered exceptional work on our project. His attention to detail and problem-solving skills are remarkable."
    },
    {
      name: "Michael Johnson",
      role: "CEO at Startup Innovations",
      content: "Working with John was a great experience. He consistently met deadlines and exceeded our expectations."
    },
    {
      name: "Sarah Williams",
      role: "Design Lead at Creative Agency",
      content: "John's technical expertise and collaborative approach made our project a huge success."
    },
    {
      name: "Robert Brown",
      role: "CTO at Enterprise Solutions",
      content: "John is one of the most skilled frontend developers I've worked with. His code is clean and maintainable."
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      content: "The website John built for us has significantly improved our conversion rates and user engagement."
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      content: "John's ability to understand complex requirements and translate them into functional solutions is impressive."
    },
    {
      name: "Jennifer Taylor",
      role: "UX Designer",
      content: "It's a pleasure to collaborate with John. He always considers the user experience in his implementations."
    },
    {
      name: "Thomas Anderson",
      role: "Software Architect",
      content: "John's expertise in React and TypeScript helped us build a scalable and robust application."
    },
    {
      name: "Lisa Martinez",
      role: "Product Owner",
      content: "John is proactive, communicative, and delivers high-quality work consistently."
    },
    {
      name: "James Thompson",
      role: "Development Lead",
      content: "John's contributions to our team have been invaluable. He's a true asset to any development project."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} title={testimonial.name} description={testimonial.role}>
                <p className="text-gray-700 mt-4">{testimonial.content}</p>
              </Card>
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-10 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            &lt;
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-10 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;