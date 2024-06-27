import Button from "@/components/button";
import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <section className="p-10">
        <Button
          asLink
          href="/contact"
          text={"Contact Us"}
          className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
        />
        <h1 className="w-11/12 text-8xl font-medium 2md:w-full 2md:text-5xl">
          Let’s hear from you
        </h1>

        <p>Contact us and we will get back to you right away!</p>
      </section>
    </Fragment>
  );
}
