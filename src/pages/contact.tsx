import Button from "@/components/button";
import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <section className="p-10">
        <Button
          text={"Contact Us"}
          className="bg-[#006CFE] rounded-full p-2 text-white font-normal"
        />
        <h1 className="font-medium text-8xl  w-11/12 2md:text-5xl 2md:w-full">
          Let’s hear from you
        </h1>

        <p>Contact us and we will get back to you right away!</p>
      </section>
    </Fragment>
  );
}
