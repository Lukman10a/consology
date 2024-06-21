import React from "react";
import Button from "./button";
import TechnologyVendors from "./technologyVendors";
import { StaticImageData } from "next/image";

export default function Hero({
  heading,
  subHeading,
  heroBg,
  sideImage,
  containerClass,
  hasBg = true,
}: {
  heading: string;
  subHeading: string;
  heroBg?: string | StaticImageData;
  sideImage?: string;
  containerClass?: string;
  hasBg?: boolean;
}) {
  return (
    <header
      className="p-20 isolate relative space-y-6 bg-cover bg-no-repeat"
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
        <p className="text-xl text-white border-t-2 py-2 2md:text-lg">
          {subHeading}
        </p>
      )}
      <Button
        text={"Get started"}
        className="bg-white p-2 rounded-md font-semibold"
      />
      <TechnologyVendors />
    </header>
  );
}
