import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ to, onClick, children, className = '', type = 'button' }: ButtonProps) => {
  const baseClasses = 'btn-glow px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 inline-flex items-center justify-center';
  const combinedClasses = `${baseClasses} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;