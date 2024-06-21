import Image from "next/image";
import React from "react";
import experienceImg from "@/../../public/assets/experience.png";
import swift from "@/../../public/assets/swift.png";
import collaborative from "@/../../public/assets/collaborative.png";
import Button from "@/components/button";
import Hero from "@/components/hero";
import CaseStudies from "@/components/caseStudies";
import NewsLetter from "@/components/newsLetter";

export default function Consultancy() {
  return (
    <section>
      <Hero
        heroBg={"/assets/hero_bg.png"}
        heading=" Cloud Consultancy at its Peak"
        subHeading="We harness the power of cloud to streamline operations & increase
        production for business. Our team of expert consultants has years of
        experience working with small and medium-sized businesses across a range
        of industries, and we’re dedicated to providing tailored solutions to
        meet your unique needs."
        ctaText="Get started"
      />
      <section className="p-8 space-y-4">
        <div className="flex gap-3">
          <div
            className="rounded-md p-12 space-y-4"
            style={{
              background:
                "linear-gradient(180deg, #FFF7EB 0%, rgba(255, 255, 255, 0.56) 100%)",
              border: "1px solid #FFF3CF",
            }}
          >
            <div className="font-medium text-[71.97px]">
              <p>Experienced</p>
              <p className="text-[#E1A029]">Consulting</p>
              <p>Experts</p>
            </div>
            <p className="text-xl">
              Our team of expert consultants has years of experience working
              with small and medium-sized business across a range of industries,
              and we’re dedicated to providing tailored solutions to meet your
              unique needs.
            </p>
            <Button text="Get started" />
          </div>
          <Image src={experienceImg} alt="" />
        </div>

        <div className="flex gap-3">
          <Image src={swift} alt="" />
          <div
            className="rounded-md p-12 space-y-4"
            style={{
              background:
                "linear-gradient(180deg, #B7C2FF 0%, rgba(255, 255, 255, 0.56) 100%)",
              border: "1px solid #CFF6FF",
            }}
          >
            <div className="font-medium text-[71.97px] ">
              <p>Swift Cloud</p>
              <p>
                <span className="text-[#4107BB]">Migration</span>{" "}
                <span>and</span>
              </p>
              <p className="text-[#4107BB]">Optimization</p>
            </div>
            <p className="text-xl">
              Enjoy swift and hassle-free migration or optimizaion of your
              business software to the cloud
            </p>
            <Button text="Get started" />
          </div>
        </div>

        <div className="flex gap-3">
          <div
            className="rounded-md p-12 space-y-4"
            style={{
              background:
                "linear-gradient(180deg, #E5E5E5 0%, rgba(255, 255, 255, 0.56) 100%)",
              border: "1px solid #CFF6FF",
            }}
          >
            <div className="font-medium text-[71.97px] ">
              <p>
                <span className="text-[#E1A029]">Collaborative</span>{" "}
                <span> and</span>
              </p>
              <p>
                <span className="text-[#E1A029]">Proactive</span>{" "}
                <span>Cloud</span>
              </p>
              <p> Consulting</p>
            </div>
            <p className="text-xl">
              We work closely with you to ensure that your technology is aligned
              with your business goals
            </p>
            <Button text="Get started" />
          </div>
          <Image src={collaborative} alt="" />
        </div>
      </section>
      <CaseStudies />
      <NewsLetter />
    </section>
  );
}
