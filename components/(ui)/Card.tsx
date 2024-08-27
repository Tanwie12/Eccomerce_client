import { Button } from '@nextui-org/react';
import React from 'react';

type CardProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({ title, icon, children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-card text-card-foreground p-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl focus:outline-none ${className}`}
    >
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </button>
  );
};

export default Card;
