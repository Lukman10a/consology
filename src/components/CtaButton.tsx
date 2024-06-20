import { cn } from "@/lib/utils";
import React from "react";

const CtaButton = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "bg-white p-2 text-black rounded-md font-medium",
        className
      )}
    >
      {content}
    </button>
  );
};

export default CtaButton;
