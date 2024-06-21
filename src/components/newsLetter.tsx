import React from "react";
import Image from "next/image";
import mailbox from "../../public/assets/mailbox.png";
import Button from "./button";
export default function NewsLetter() {
  return (
    <div className="flex items-center justify-center p-14">
      <div className="space-y-6">
        <h1 className="font-medium text-7xl">
          <span className="text-[#BBBBBB]"> Subscribe to our </span>
          <br />
          <span> Newsletter.</span>
        </h1>
        <p>
          Don&apos;t miss out on the latest updates, exclusive offers, and
          insightful content. By subscribing to our newsletter, you&apos;ll be
          the first to know about
        </p>
        <div className="flex gap-2 ">
          <input
            type="text"
            className="bg-[#F8F8F8] rounded-md border border-[#DDDDDD]"
          />
          <Button
            text="Subscribe"
            className="bg-black p-2 px-8 rounded-md text-white font-normal"
          />
        </div>
      </div>
      <Image src={mailbox} alt="" width={700} />
    </div>
  );
}
