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
      className="flex items-center justify-between gap-10 overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat p-10 outline outline-8 outline-[#006CFE0A] md:flex-col md:items-start"
      style={{
        backgroundImage: "url('/assets/case_bg.jpg')",
      }}
    >
      <Image src={img} alt="" width={100} height={100} className="rounded-md" />
      <p className="flex-1 text-xl text-white md:text-lg">{text}</p>
      <Button
        asLink
        href="/case-studies"
        text={"Read more"}
        className="rounded-full bg-[#006CFE] p-3 text-white"
      />
    </article>
  );
}
