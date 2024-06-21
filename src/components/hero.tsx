import React from "react";
import Button from "./button";
import TechnologyVendors from "./technologyVendors";
import { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero({
  heading,
  subHeading,
  heroBg,
  containerClass,
  ctaHref = "/contact",
  ctaText = "Contact us",
}: {
  heading: string;
  subHeading: string;
  heroBg?: string | StaticImageData;
  containerClass?: string;
  ctaHref?: string;
  ctaText?: string;
  hasBg?: boolean;
}) {
  return (
    <header
      className={cn(
        "p-20 isolate relative space-y-6 bg-cover bg-no-repeat",
        containerClass
      )}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="font-medium text-8xl text-white w-10/12 2md:text-5xl 2md:w-full">
        {heading}
      </h1>
      {/* <hr /> */}
      {subHeading && (
        <p className="text-xl text-white border-t-2 py-2 2md:text-lg ">
          {subHeading}
        </p>
      )}
      <Link href={ctaHref} className="mt-6 inline-block">
        <Button
          text={ctaText}
          className="bg-white p-2 rounded-md font-semibold"
        />
      </Link>
      <TechnologyVendors />
    </header>
  );
}
