import Image from "next/image";
import { Fragment } from "react";
import { FaBed } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { RiPoliceBadgeFill } from "react-icons/ri";

import help_desk from "../../public/assets/help-desk.png";
import chat from "../../public/assets/chat.png";
import chat2 from "../../public/assets/chat2.png";
import Button from "@/components/button";
import TechnologyVendors from "@/components/technologyVendors";
import CaseStudies from "@/components/caseStudies";

export default function Home() {
  return (
    <Fragment>
      <header className="isolate relative  bg-cover bg-no-repeat overflow-hidden">
        <div className="inset-0 absolute z-[-2] h-full p-0 ">
          <video width="100%" autoPlay muted loop preload="none">
            <source src="/assets/hero-video.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 z-[-1] bg-black opacity-50"></div>
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
      <section className="py-12 px-14 2md:px-8">
        <h3 className="text-7xl mb-10 2md:text-4xl 2md:mb-8">
          <span className="text-[#BBBBBB]">Our</span> <span>Services</span>
        </h3>
        <div className="space-y-7">
          <article className="relative isolate bg-cover bg-no-repeat overflow-hidden bg-[url('/assets/service-consultancy.jpg')] flex gap-10 p-10 rounded-xl justify-between h-[400px] 2md:h-auto 2md:flex-wrap-reverse">
            <div className="absolute inset-0 -z-[1] bg-black opacity-50"></div>
            <div className="self-end flex-1 text-white space-y-4">
              <p className="font-medium text-5xl 2md:text-2xl">
                Cloud Consultancy
              </p>
              <p className="">
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
                <p className="text-5xl font-medium  2md:text-2xl md:text-x  md:text-sm">
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
                <p className="text-5xl font-medium 2md:text-2xl md:text-xl">
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
          <article className="relative isolate bg-cover bg-no-repeat overflow-hidden bg-black flex gap-10 p-10 rounded-xl justify-between h-[500px] 2md:h-auto 2md:flex-wrap-reverse">
            <div className="self-end flex-1 text-white space-y-4">
              <p className="text-5xl font-medium 2md:text-2xl md:text-xl">
                <span className="text-[#BBBBBB]">Responsive</span>{" "}
                <span>Help Desk</span>
              </p>
              <p className="2md:text-base text-[#BBBBBBBB] text-lg">
                Responsive Help Desk: Our friendly support staff is ready to
                assist, whether it’s software troubleshooting or hardware setup.
              </p>
              <Button text="Learn more" />
            </div>
            <div className="relative">
              <div className="h-full">
                <Image
                  src={help_desk}
                  alt="help_desk"
                  height={250}
                  width={500}
                  className="h-full"
                />
              </div>
              <div className="absolute top-3 -left-1/3 2md:right-0 2md:w-52 2md:left-auto 2md:top-auto 2md:-bottom-4">
                <Image src={chat2} alt="chat" height={250} width={500} />
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="bg-[url('/assets/experience.jpg')] bg-cover bg-no-repeat flex gap-10 items-center p-10 bg-center text-white md:flex-wrap">
        <h3 className="text-7xl md:text-4xl">
          Our experience spans across various sectors
        </h3>
        <div>
          <div className="flex items-center gap-8 bg-[#3E3E3E73] rounded-lg p-6 justify-between mb-5 md:p-4">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#FFFFFF17] p-2 rounded-lg">
                <FaShop size={24} color="#00ADEF" />
              </div>
              <p className="md:text-sm">Retail</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#FFFFFF17] p-2 rounded-lg">
                <FaBed size={24} color="#91C0FF" />
              </div>
              <p className="md:text-sm">Hospitality</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#FFFFFF17] p-2 rounded-lg">
                <RiPoliceBadgeFill size={24} color="#FBBC09" />
              </div>
              <p className="md:text-sm">Law enforcement</p>
            </div>
          </div>
          <p>
            Including retail, hospitality, law enforcement, and more. We
            understand your industry-specific challenges and deliver
            targeted solutions.
          </p>
        </div>
      </section>
      <CaseStudies />
    </Fragment>
  );
}
