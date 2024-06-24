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
        "rounded-md bg-white p-2 font-medium text-black",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
