import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
  asLink?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  href,
  asLink,
  onClick,
}) => {
  const buttonClasses = cn("font-medium text-black", className);

  if (asLink && href) {
    return (
      <button className={buttonClasses}>
        <Link href={href} passHref legacyBehavior>
          <a>{text}</a>
        </Link>
      </button>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
