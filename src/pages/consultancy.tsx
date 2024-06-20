import Image from "next/image";
import React from "react";
import experienceImg from "@/../../public/assets/experience.png";
import Button from "@/components/button";
import Hero from "@/components/hero";

export default function Consultancy() {
  return (
    <section>
      <Hero />
      <div className="flex p-8 gap-3">
        <div
          className="rounded-md p-12 space-y-4"
          style={{
            background:
              "linear-gradient(180deg, #FFF7EB 0%, rgba(255, 255, 255, 0.56) 100%)",
            border: "1px solid #FFF3CF",
          }}
        >
          <div className="font-medium text-[71.97px] ">
            <p>Experienced</p>
            <p className="text-[#E1A029]">Consulting</p>
            <p>Experts</p>
          </div>
          <p className="text-xl">
            Our team of expert consultants has years of experience working with
            small and medium-sized business across a range of industries, and
            we’re dedicated to providing tailored solutions to meet your unique
            needs.
          </p>
          <Button text="Get started" />
        </div>
        <Image src={experienceImg} alt="" />
      </div>
    </section>
  );
}
