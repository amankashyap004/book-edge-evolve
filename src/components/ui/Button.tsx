import React from "react";

interface ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white px-4 py-2 rounded transition-all duration-500 hover:opacity-80 bg-gradient-to-l from-[#8a2be2] to-[#4b0082] hover:from-[#4b0082] hover:to-[#8a2be2] ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
