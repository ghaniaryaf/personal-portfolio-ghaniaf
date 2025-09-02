// components/Card.tsx
import React from 'react';


interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, children, className = '' }) => {
  return (
    <div style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)' }} className={`bg-white hover:bg-gray-100 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;