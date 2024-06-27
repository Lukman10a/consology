import React from "react";

import Button from "../button";
import CaseCard from "./caseCard";
import Link from "next/link";
import { CASE_CARD_DATA } from "./data";

export default function CaseStudies({
  isDetailsPage = false,
}: {
  isDetailsPage?: boolean;
}) {
  return (
    <div className="bg-black p-12 md:px-8">
      {isDetailsPage === false && (
        <div className="mb-6 text-center">
          <Button
            text={"Our works"}
            className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
          />

          <h1 className="mt-3 text-8xl font-extrabold md:text-5xl">
            <span className="text-white">CASE </span>
            <span className="text-[#5D5D5D]">STUDIES.</span>
          </h1>
        </div>
      )}
      <div className="space-y-7">
        {CASE_CARD_DATA.map((item, index) => (
          <CaseCard text={item.text} img={item.img?.src || ""} key={index} />
        ))}
      </div>

      {isDetailsPage === false && (
        <div className="mb-12 mt-6 flex justify-center font-semibold">
          <Button
            asLink
            href="/case-studies"
            text="View more"
            className="rounded-xl bg-white px-4 py-2"
          />
        </div>
      )}
    </div>
  );
}
