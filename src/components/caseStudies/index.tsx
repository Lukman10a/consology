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
    <div className="bg-black p-12">
      {isDetailsPage === false && (
        <div className="text-center mb-6">
          <Button
            text={"Our works"}
            className="bg-[#006CFE] rounded-full p-2 text-white font-normal"
          />

          <h1 className="font-extrabold text-8xl">
            <span className="text-white">CASE </span>
            <span className="text-[#5D5D5D]">STUDIES.</span>
          </h1>
        </div>
      )}
      <div className="space-y-5">
        {CASE_CARD_DATA.map((item, index) => (
          <CaseCard text={item.text} img={item.img?.src || ""} key={index} />
        ))}
      </div>

      {isDetailsPage === false && (
        <Link
          href="/case-studies"
          className="flex justify-center mt-6 mb-12 font-semibold"
        >
          <Button text="View more" className="bg-white px-4 py-2 rounded-xl" />
        </Link>
      )}
    </div>
  );
}
