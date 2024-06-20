import React from "react";
import Button from "../button";
import Image from "next/image";

interface CaseCardProps {
  text: string;
  img: string; // Use string for dynamic paths
}

export default function CaseCard({ text, img }: CaseCardProps) {
  return (
    <div
      className="flex items-center justify-between my-2 p-10 rounded-md"
      style={{
        border: "2px solid rgba(0, 108, 254, 0.04)",
        backgroundImage: "url('/assets/case_bg.jpg')",
        width: "100%",
      }}
    >
      <Image src={img} alt="" width={100} height={100} className="rounded-md" />
      <p className="text-white text-xl whitespace-pre-line">{text}</p>
      <Button text={"Read more"} className="bg-[#006CFE] rounded-xl p-4 px-8" />
    </div>
  );
}
