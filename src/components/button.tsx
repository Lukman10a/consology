import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={cn(
        "bg-white p-2 text-black rounded-md font-medium",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
