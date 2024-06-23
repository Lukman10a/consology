import Image from "next/image";
import { Fragment } from "react";

import serviceInfra from "../../public/assets/service-infra.png";
import serviceTailored from "../../public/assets/service-tailored.png";
import chat from "../../public/assets/chat.png";
import Button from "@/components/button";
import TechnologyVendors from "@/components/technologyVendors";
import CaseStudies from "@/components/caseStudies";

export default function Home() {
  return (
    <Fragment>
      <header className="isolate relative  bg-cover bg-no-repeat ">
        <div className="inset-0 absolute z-[-2] h-full p-0 ">
          <video width="100%" autoPlay muted loop preload="none">
            <source src="/assets/hero-video.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 -z-[2] bg-black opacity-50"></div>
        <div className="p-20 space-y-6  md:px-10">
          <h1 className="font-medium text-8xl text-white w-10/12 2md:text-5xl 2md:w-fit  text-balance">
            Unique Technology Solutions for Businesses
          </h1>
          <p className="text-xl text-white border-t-2 py-2 2md:text-lg">
            At Consology, we’re more than just cloud consultants—we’re your
            end-to-end I.T. support experts. Our mission is to empower
            businesses by seamlessly integrating technology solutions. Whether
            you’re considering cloud migration or need robust I.T. support,
            Consology has you covered.
          </p>
          <Button text={"Contact us"} />
          <TechnologyVendors />
        </div>
      </header>
      <section className="py-12 px-14 2md:px-10">
        <h3 className="text-5xl mb-10 2md:text-3xl 2md:mb-8">
          <span className="text-[#BBBBBB]">Our</span> <span>Services</span>
        </h3>
        <div className="space-y-7">
          <article className="relative isolate bg-cover bg-no-repeat overflow-hidden bg-[url('/assets/service-consultancy.jpg')] flex gap-10 p-10 rounded-xl justify-between h-[500px] 2md:flex-wrap">
            <div className="absolute inset-0 -z-[1] bg-black opacity-50"></div>
            <div className="self-end flex-1 text-white space-y-4">
              <p className="font-medium text-5xl 2md:text-2xl sm:text-xl">
                Cloud Consultancy
              </p>
              <p className="2md:text-sm">
                Unlock the Cloud: Our team specializes in Microsoft products and
                cloud solutions. We guide you through the entire process, from
                strategy to implementation.
              </p>
              <Button text="Learn more" />
            </div>
            <div className="">
              <Image src={chat} alt="chat" height={250} width={500} />
            </div>
          </article>
          <div className="flex justify-between gap-5 2md:flex-wrap">
            <article className="flex-1  space-y-5 border border-[#0000001F] rounded-lg pt-10 pl-10">
              <div className="space-y-3 pr-10 ">
                <p className="text-3xl font-medium  2md:text-2xl md:text-x  md:text-sm">
                  <span className="text-[#BBBBBB]">Tailored</span>{" "}
                  <span>Solutions</span>
                </p>
                <p className="font-normal text-lg 2md:text-base">
                  No two businesses are alike. We customize cloud strategies to
                  fit your unique needs.
                </p>
              </div>
              <div className="bg-[url('/assets/service-tailored.png')] h-[300px] bg-fill bg-no-repeat bg-center w-full"></div>
            </article>
            <article className="flex-1 bg-[#F9F9F9] border border-[#0000001F] rounded-lg  pl-10 pb-10">
              <div className="bg-[url('/assets/service-infra.png')] h-[300px] bg-cover bg-no-repeat bg-center w-full"></div>
              <div className="space-y-3 pr-10">
                <p className="text-3xl font-medium 2md:text-2xl md:text-xl">
                  <span className="text-[#BBBBBB]">End User to</span>{" "}
                  <span>Infrastructure</span>
                </p>
                <p className="font-normal text-lg 2md:text-base md:text-sm">
                  We manage it all. From individual end users to your entire
                  I.T. ecosystem, Consology ensures smooth operations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <CaseStudies />
    </Fragment>
  );
}
