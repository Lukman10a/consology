import React from "react";
import Button from "../button";
import Image from "next/image";

interface CaseCardProps {
  text: string;
  img: string; // Use string for dynamic paths
}

export default function CaseCard({ text, img }: CaseCardProps) {
  return (
    <article
      className="flex md:flex-col gap-10 items-center justify-between rounded-lg p-10  bg-cover bg-no-repeat overflow-hidden"
      style={{
        border: "6px solid #006CFE0A",
        backgroundImage: "url('/assets/case_bg.jpg')",
      }}
    >
      <Image src={img} alt="" width={100} height={100} className="rounded-md" />
      <p className="flex-1 text-white text-xl ">{text}</p>
      <Button
        text={"Read more"}
        className="bg-[#006CFE] rounded-full p-3 text-white"
      />
    </article>
  );
}
