import React from "react";
import Button from "./button";
import TechnologyVendors from "./technologyVendors";

export default function Hero() {
  return (
    <div
      className="p-20 space-y-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/hero_bg.png')",
        width: "100%",
      }}
    >
      <h1 className="font-medium text-8xl border-b-2 py-2 text-white">
        <p>Cloud Consultancy</p>
        <p>at its Peak</p>
      </h1>
      <p className="font-medium text-xl text-white">
        We harness the power of cloud to streamline operations & increase
        production for business. Our team of expert consultants has years of
        experience working with small and medium-sized businesses across a range
        of industries, and we’re dedicated to providing tailored solutions to
        meet your unique needs.
      </p>
      <Button
        text={"Get started"}
        className="bg-white p-2 rounded-md font-semibold"
      />
      <TechnologyVendors />
    </div>
  );
}
