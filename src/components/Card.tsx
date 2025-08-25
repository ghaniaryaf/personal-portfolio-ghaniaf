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
    <div className={`bg-white border rounded-lg shadow-md p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;