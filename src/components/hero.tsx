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
  showTechnologyVendors = false,
  customStyles = {},
}: {
  heading: string;
  subHeading: string;
  heroBg?: string | StaticImageData;
  containerClass?: string;
  ctaHref?: string;
  ctaText?: string;
  hasBg?: boolean;
  showTechnologyVendors?: boolean;
  customStyles?: React.CSSProperties;
}) {
  return (
    <header
      className={cn(
        "relative isolate space-y-6 bg-cover bg-no-repeat p-20 md:px-10",
        containerClass,
      )}
      style={{
        ...customStyles,
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
      }}
    >
      <h1 className="w-10/12 text-8xl font-medium text-white 2md:w-full 2md:text-5xl">
        {heading}
      </h1>
      {subHeading && (
        <p className="border-t-2 py-2 text-xl text-white 2md:text-lg">
          {subHeading}
        </p>
      )}
      <Button
        asLink
        text={ctaText}
        href={ctaHref}
        className="mt-6 inline-block rounded-md bg-white p-2 font-semibold md:w-full"
      />
      {showTechnologyVendors && <TechnologyVendors />}
    </header>
  );
}
