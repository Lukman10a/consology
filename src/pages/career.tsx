import React from "react";
import Button from "@/components/button";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import careerBg from "../../public/assets/career_bg.png";
import { FaSearch } from "react-icons/fa";

export default function Career({
  containerClass,
  ctaHref = "/contact",
  ctaText = "Contact us",
}: {
  containerClass?: string;
  ctaHref?: string;
  ctaText?: string;
  hasBg?: boolean;
}) {
  return (
    <header
      className="flex flex-col items-center justify-center p-20"
      style={{
        backgroundImage: `url("/assets/career_bg.png")`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-center text-8xl font-medium text-white 2md:w-full 2md:text-5xl">
        <span>Work at</span> <span className="text-[#FFE59C]">CONSOLOGY</span>{" "}
        <span>Work in the Great Beyond</span>
      </h1>

      <div className="flex items-center justify-center gap-2">
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="mt-6 rounded-xl border-2 p-2 px-20"
          />
        </div>
        <FaSearch size={25} color="white" />
      </div>

      <Link href={ctaHref} className="mt-6 inline-block">
        <Button
          text={"View all available jobs"}
          className="rounded-md bg-white p-2 px-4 font-semibold"
        />
      </Link>
    </header>
  );
}
