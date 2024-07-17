import React, { Fragment } from "react";
import experienceImg from "../../public/assets/experience.png";
import swift from "../../public/assets/swift.png";
import cloud from "../../public/assets/cloud.png";
import collaborative from "../../public/assets/collaborative.png";
import Hero from "@/components/hero";
import CaseStudies from "@/components/caseStudies";
import ArticleCard from "@/components/consultancy/articleCard";
import Image from "next/image";
import analyse from "../../public/assets/analyse.png";
import design from "../../public/assets/design.png";
import build from "../../public/assets/build.jpg";
import testing from "../../public/assets/testing.png";
import chat from "../../public/assets/chat.png";
import Button from "@/components/button";

export default function Consultancy() {
  const steps = [
    {
      step: "Step 1",
      bgColor: "bg-black",
      title: "Analyse",
      description:
        "Examine the current situation and identify the benefits and drawbacks of the current systems and processes.",
      imgSrc: analyse,
      imgAlt: "analyse",
    },
    {
      step: "Step 2",
      bgColor: "bg-[#FEA02A]",
      title: "Design",
      description:
        "Devise proposed frameworks and methodologies that can streamline your business goals.",
      imgSrc: design,
      imgAlt: "design",
    },
    {
      step: "Step 3",
      bgColor: "bg-[#57A0E5]",
      title: "Build",
      description:
        "Develop and implement the suggested framework and ascertain the need for use case testing.",
      imgSrc: build,
      imgAlt: "build",
    },
    {
      step: "Step 4",
      bgColor: "bg-black",
      title: "Testing",
      description:
        "Address any issues, apply needed adjustments, perform user testing, and train both Power Users and Administrators.",
      imgSrc: testing,
      imgAlt: "testing",
    },
  ];

  return (
    <Fragment>
      <Hero
        heroBg={"/assets/hero_bg.png"}
        heading="Your Cloud Strategy Partners"
        subHeading="Wondering how the cloud can help your business? Our expert consultants are here to guide you through the possibilities. With years of experience working with small and medium-sized businesses across various industries, we provide tailored cloud solutions that streamline operations and enhance productivity."
        ctaText="Get started"
        showTechnologyVendors
      />
      <section className="space-y-4 p-8">
        <ArticleCard
          title={
            <>
              <span>Experienced </span>
              <span className="text-[#E1A029]">Consulting </span>
              <span>Experts</span>
            </>
          }
          description="Our team of expert consultants has years of experience working with small and medium-sized business across a range of industries, and we’re dedicated to providing tailored solutions to meet your unique needs."
          image={experienceImg}
          bgColor="linear-gradient(180deg, #FFF7EB 0%, rgba(255, 255, 255, 0.56) 100%)"
          borderColor="#FFF3CF"
        />
        <ArticleCard
          title={
            <>
              <span>Swift Cloud </span>
              <span className="text-[#4107BB]">Migration</span>{" "}
              <span>and </span>
              <span className="text-[#4107BB]">Optimization</span>
            </>
          }
          description="Enjoy swift and hassle-free migration or optimization of your business software to the cloud."
          image={swift}
          bgColor="linear-gradient(180deg, #B7C2FF 0%, rgba(255, 255, 255, 0.56) 100%)"
          borderColor="#CFF6FF"
          reverse
        />
        <ArticleCard
          title={
            <>
              <span className="text-[#E1A029]">Collaborative</span>{" "}
              <span>and</span> <span className="text-[#E1A029]">Proactive</span>{" "}
              <span>Cloud</span> <span>Consulting</span>
            </>
          }
          description="We work closely with you to ensure that your technology is aligned with your business goals."
          image={collaborative}
          bgColor="linear-gradient(180deg, #E5E5E5 0%, rgba(255, 255, 255, 0.56) 100%)"
          borderColor="#CFF6FF"
        />
        <ArticleCard
          title={
            <>
              <span>Exploring</span>{" "}
              <span className="text-[#4107BB]">Cloud</span>{" "}
              <span className="text-[#4107BB]"> Migration </span>{" "}
              <span> Options?</span>
            </>
          }
          description="Navigating between fully cloud or hybrid solutions? Our tailored approach ensures you make informed decisions. Let's craft a strategy that fits your business seamlessly."
          image={cloud}
          bgColor="linear-gradient(180deg, #B7C2FF 0%, rgba(255, 255, 255, 0.56) 100%)"
          borderColor="#CFF6FF"
          reverse
        />
      </section>

      <div className="ml-14 rounded-s-3xl bg-[url('/assets/strategyBg.png')] bg-cover pb-4 md:ml-0 md:rounded-s-none">
        <div className="px-14 py-12 2md:px-8">
          <Button
            text={"How we work"}
            className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
          />
          <h3 className="mb-8 mt-3 text-7xl font-medium text-white md:w-full 2md:mb-8 2md:text-5xl">
            Our Strategies
          </h3>
        </div>
        <div className="grid grid-cols-responsive250 gap-4 px-14 md:px-8">
          {steps.map((step, index) => (
            <article
              key={index}
              className="flex flex-col justify-between gap-4 rounded-2xl bg-white p-6"
            >
              <div className="space-y-3">
                <Button
                  text={step.step}
                  className={`w-fit rounded-full px-2 py-1 font-normal text-white ${step.bgColor}`}
                />
                <p className="text-2xl font-medium">{step.title}</p>
              </div>

              <p className="text-[#737373]">{step.description}</p>
              <div className="relative max-h-[200px] flex-1 self-end overflow-hidden rounded-2xl">
                <Image
                  src={step.imgSrc}
                  alt={step.imgAlt}
                  className="h-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>

      <CaseStudies />
    </Fragment>
  );
}
