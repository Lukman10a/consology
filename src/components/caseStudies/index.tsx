import React from "react";
import slack from "../../../public/assets/slack.png";
import opera from "../../../public/assets/opera.png";
import figma from "../../../public/assets/figma.png";
import Button from "../button";
import CaseCard from "./caseCard";

export default function CaseStudies() {
  const CASE_CARD_DATA = [
    {
      text: "Improved Scalability: Slack’s Retail experienced a 50% improvement in website performance during peak traffic times, resulting in a 20% increase in online sales during sales events",

      img: slack,
    },
    {
      text: "Opera mini Cost Savings: Cloud migration led to a 30% reduction in IT costs, including lower maintenance and operational expenses.",

      img: opera,
    },
    {
      text: "Cost Savings: The migration led to a 30% reduction in IT costs,including lower maintenance and operational expenses.",
      img: figma,
    },
  ];

  return (
    <div className="bg-black p-12">
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
      <div className="space-y-5">
        {CASE_CARD_DATA.map((item, index) => (
          <CaseCard text={item.text} img={item.img?.src || ""} key={index} />
        ))}
      </div>

      <div className="flex justify-center mt-6 mb-12 font-semibold">
        <Button text="View more" className="bg-white px-4 py-2 rounded-xl" />
      </div>
    </div>
  );
}
