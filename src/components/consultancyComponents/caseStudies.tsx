import React from "react";
import Button from "../button";
import CaseCard from "./caseCard";
import slack from "@../../../public/assets/slack.png";
import opera from "@../../../public/assets/opera.png";
import figma from "@../../../public/assets/figma.png";

export default function CaseStudies() {
  const CASE_CARD_DATA = [
    {
      text: "Improved Scalability: Slack’s Retail experienced a 50% improvement\n in website performance during peak traffic times,\nresulting in a 20% increase in online sales during sales events",
      //   img: "/../../public/assets/slack.png",
      img: slack,
    },
    {
      text: "Opera mini Cost Savings: Cloud migration led to a 30% reduction\nin IT costs, including lower maintenance and operational expenses.",
      //   img: "/../../public/assets/opera.png",
      img: opera,
    },
    {
      text: "Cost Savings: The migration led to a 30% reduction in IT costs,\nincluding lower maintenance and operational expenses.",
      //   img: "/../../public/assets/figma.png",
      img: figma,
    },
  ];

  return (
    <div className="bg-black p-12">
      <div className="text-center mb-6">
        <Button text={"Our works"} className="bg-[#006CFE] rounded-xl p-2" />
        <h1 className="font-extrabold text-8xl">
          <span className="text-white">CASE</span>
          <span className="text-[#5D5D5D]">STUDIES.</span>
        </h1>
      </div>
      {CASE_CARD_DATA.map((item, index) => (
        <CaseCard text={item.text} img={item.img?.src || ""} key={index} />
      ))}
      <div className="flex justify-center mt-6 mb-12 font-semibold">
        <Button text="View more" className="bg-white px-4 p-2 rounded-xl" />
      </div>
    </div>
  );
}
