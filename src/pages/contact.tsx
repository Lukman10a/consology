import Button from "@/components/button";
import React, { Fragment } from "react";
import contactbg from "../../public/assets/contactbg.jpg";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3, MdMessage } from "react-icons/md";

export default function Contact() {
  return (
    <Fragment>
      <section className="relative isolate text-white">
        <div className="absolute inset-0 z-[-1] flex flex-col">
          <div className="h-1/2 w-full overflow-hidden bg-[url(/assets/contactbg.jpg)] bg-cover">
            {/* <Image src={contactbg} alt="contactbg" /> */}
          </div>
          <div className="h-1/2 bg-black"></div>
        </div>
        <div className="flex justify-between gap-7 px-16 py-10 md:flex-wrap md:px-8 md:py-8">
          <div className="flex flex-col justify-between gap-7 md:justify-normal">
            <div className="space-y-4">
              <Button
                asLink
                href="/contact"
                text={"Contact Us"}
                className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
              />
              <h1 className="mb-7 text-8xl font-medium 2md:w-full 2md:text-5xl">
                Let’s hear from you
              </h1>
              <p className="mt-7">
                Contact us and we will get back to you right away!
              </p>
            </div>

            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FaLocationDot color="#006CFE" />
                  <span>
                    1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MdWifiCalling3 color="#006CFE" />{" "}
                  <span>+1 234 678 9108 99</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdMessage color="#006CFE" />
                  <span>Contact@moralizer.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="shadown-lg rounded-lg bg-white p-5 text-black md:w-full">
            <h3 className="mb-5 text-2xl font-medium">
              Fill out the form and we will be touch!
            </h3>
            <div className="space-y-4">
              <label htmlFor="" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">Name</p>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-400 p-3"
                />
              </label>
              <label htmlFor="" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">Email</p>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-400 p-3"
                />
              </label>
              <label htmlFor="" className="mb-4 block">
                <p className="mb-2 text-sm font-semibold">
                  How can we help you
                </p>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="w-full rounded-lg border border-gray-400 p-3"
                ></textarea>
              </label>
            </div>
            <Button
              asLink
              href="/contact"
              text={"Send"}
              className="mt-5 w-full rounded-lg bg-black p-2 font-normal text-white"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
