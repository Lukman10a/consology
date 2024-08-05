import Image from "next/image";
import { Fragment } from "react";

import help_desk from "../../public/assets/help-desk.png";
import chat from "../../public/assets/chat.png";
import chat2 from "../../public/assets/chat2.png";
import Button from "@/components/button";
import TechnologyVendors from "@/components/technologyVendors";
import headPhone from "../../public/assets/head-phone.png";

export default function Home() {
  return (
    <Fragment>
      <header className="relative isolate overflow-hidden bg-[url('/assets/home_hero_bg.png')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 z-[-1] bg-black opacity-50"></div>
        <div className="space-y-6 p-20 md:px-10">
          <h1 className="w-10/12 text-balance text-8xl font-medium text-white 2md:w-fit 2md:text-4xl">
            Your Trusted I.T. Support & Cloud Consultancy Partners
          </h1>
          <p className="border-t-2 py-2 text-xl text-white 2md:text-lg">
            At Consology, we’re more than just cloud consultants—we’re your
            comprehensive I.T. support experts. Our mission is to empower
            businesses by seamlessly integrating advanced technology solutions.
            Whether you’re considering cloud migration or need robust I.T.
            support, Consology has you covered.
          </p>

          <Button
            asLink
            text={"Contact us"}
            className="rounded-md bg-white p-2 px-3 md:w-full"
            href="/contact"
          />

          <TechnologyVendors />
        </div>
      </header>
      <section className="px-14 py-12 2md:px-8">
        <h3 className="mb-10 text-7xl 2md:mb-8 2md:text-4xl">
          <span className="text-[#BBBBBB]">Our</span> <span>Services</span>
        </h3>
        <div className="space-y-7">
          <article className="relative isolate flex h-[400px] justify-between gap-10 overflow-hidden rounded-xl bg-[url('/assets/service-consultancy.jpg')] bg-cover bg-no-repeat p-10 2md:h-auto 2md:flex-wrap-reverse">
            <div className="absolute inset-0 -z-[1] bg-black opacity-50"></div>
            <div className="flex-1 space-y-4 self-end text-white">
              <p className="text-5xl font-medium 2md:text-2xl">
                Complete I.T. Support Solutions
              </p>
              <p className="">
                Let us handle your I.T. support needs so you can focus on what
                truly matters—growing your business. From software
                troubleshooting to hardware setup, our responsive help desk
                services ensure your end users remain productive while we manage
                the technical challenges.
              </p>
              <Button
                asLink
                href="/contact"
                text="Learn more"
                className="rounded-md bg-white p-2 px-4"
              />
            </div>
            <div className="">
              <Image src={chat} alt="chat" height={250} width={500} />
            </div>
          </article>
          <div className="flex justify-between gap-5 2md:flex-wrap">
            <article className="flex-1 space-y-5 rounded-lg border border-[#0000001F] pl-10 pr-10 pt-10">
              <div className="space-y-3 pr-10">
                <p className="md:text-x text-5xl font-medium md:text-sm 2md:text-2xl">
                  <span className="text-[#BBBBBB]">
                    We provide Cloud IT Tailored
                  </span>{" "}
                  <span>Solutions</span>
                </p>
                <p className="text-lg font-normal 2md:text-base">
                  No two businesses are alike. We customize cloud strategies to
                  fit your unique needs.
                </p>
              </div>

              <div className="bg-fill h-[300px] w-full bg-[url('/assets/service-tailored.png')] bg-center bg-no-repeat md:bg-contain"></div>
            </article>
            <article className="flex-1 rounded-lg border border-[#0000001F] bg-[#F9F9F9] pb-10 pl-10">
              <div className="h-[300px] w-full bg-[url('/assets/service-infra.png')] bg-cover bg-center bg-no-repeat md:bg-contain"></div>
              <div className="space-y-3 pr-10">
                <p className="text-5xl font-medium md:text-xl 2md:text-2xl">
                  <span className="text-[#BBBBBB]">End User to</span>{" "}
                  <span>Infrastructure</span>
                </p>
                <p className="text-lg font-normal md:text-sm 2md:text-base">
                  We manage it all. From individual end users to your entire
                  I.T. ecosystem, Consology ensures smooth operations.
                </p>
              </div>
            </article>
          </div>
          <article className="relative isolate flex h-[500px] justify-between gap-10 overflow-hidden rounded-xl bg-black bg-cover bg-no-repeat p-10 2md:h-auto 2md:flex-wrap-reverse">
            <div className="flex-1 space-y-4 self-end text-white">
              <p className="text-5xl font-medium md:text-xl 2md:text-2xl">
                <span className="text-[#BBBBBB]">Responsive</span>{" "}
                <span>Help Desk</span>
              </p>
              <p className="text-lg text-[#BBBBBBBB] 2md:text-base">
                Responsive Help Desk: Our friendly support staff is ready to
                assist, whether it’s software troubleshooting or hardware setup.
              </p>
              <Button
                asLink
                href="/contact"
                text="Learn more"
                className="rounded-md bg-white p-2 px-4"
              />
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
              <div className="absolute -left-1/3 top-3 2md:-bottom-4 2md:left-auto 2md:right-0 2md:top-auto 2md:w-52">
                <Image src={chat2} alt="chat" height={250} width={500} />
              </div>
            </div>
          </article>
        </div>
      </section>
      <article className="bg-black p-6 text-white">
        <div className="flex items-center justify-center rounded-2xl bg-custom-gradient p-10 md:flex-col md:gap-10">
          <div className="space-y-4">
            <p className="text-[90px] font-medium md:w-full 2md:mb-8 2md:text-5xl">
              <span>Need Support</span> <span>Right Now?</span>
            </p>
            <div className="flex justify-between md:flex-col md:items-center md:gap-5">
              <Button
                asLink
                href="/contact"
                text="Contact us"
                className="rounded-full bg-[#006CFE] p-4 px-6 text-white"
              />

              <p className="text-4xl md:text-sm">Call +44 121 345 9225</p>
            </div>
          </div>
          <div>
            <Image src={headPhone} alt="" />
          </div>
        </div>
      </article>
    </Fragment>
  );
}
