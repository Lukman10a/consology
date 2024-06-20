import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={`border-b-4 border-black ${className}`}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
