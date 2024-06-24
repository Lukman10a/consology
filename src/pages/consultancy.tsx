import React, { Fragment } from "react";
import experienceImg from "../../public/assets/experience.png";
import swift from "../../public/assets/swift.png";
import collaborative from "../../public/assets/collaborative.png";
import Hero from "@/components/hero";
import CaseStudies from "@/components/caseStudies";
import ArticleCard from "@/components/consultancy/articleCard";

export default function Consultancy() {
  return (
    <Fragment>
      <Hero
        heroBg={"/assets/hero_bg.png"}
        heading="Cloud Consultancy at its Peak"
        subHeading="We harness the power of cloud to streamline operations & increase production for business. Our team of expert consultants has years of experience working with small and medium-sized businesses across a range of industries, and we’re dedicated to providing tailored solutions to meet your unique needs."
        ctaText="Get started"
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
      </section>
      <CaseStudies />
    </Fragment>
  );
}
