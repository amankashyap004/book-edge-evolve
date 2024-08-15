import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded transition-all duration-300 hover:opacity-90 bg-gradient-to-l from-[#8a2be2] to-[#543a6d] hover:from-[#543a6d] hover:to-[#8a2be2] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
