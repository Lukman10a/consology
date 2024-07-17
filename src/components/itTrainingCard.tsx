import Image from "next/image";
import React from "react";
import technical from "../../public/assets/technical.png";
import handsOn from "../../public/assets/handsOn.png";
import service from "../../public/assets/service.png";
import cv from "../../public/assets/cv.png";
import classes from "../../public/assets/classes.png";
import interview from "../../public/assets/interview.png";
import guaranteed from "../../public/assets/guaranteed.png";
import salaries from "../../public/assets/salaries.png";
import classesOnSite from "../../public/assets/classes-on-site.png";

const ITDATA = [
  {
    title: "Technical Knowledge",
    description:
      "Essential skills and knowledge tailored for performing 1st line support duties.",
    image: technical,
  },
  {
    title: "Hands-on Experience",
    description:
      "Gain practical experience in our dedicated Consology Training office.",
    image: handsOn,
  },
  {
    title: "Service Desk Experience",
    description:
      "Work as a Service Desk or 1st Line Support technician, resolving tickets and troubleshooting issues.",
    image: service,
  },
  {
    title: "CV Updating and References",
    description:
      "Support in crafting a professional CV and reference provided by Consology I.T",
    image: cv,
  },
  {
    title: "Evening Classes",
    description:
      "Classes are scheduled in the evening to accommodate working professionals who want to learn while balancing their job commitments.",
    image: classes,
  },
  {
    title: "Interview coaching",
    description: "Guidance to excel in interviews and land your first role.",
    image: interview,
  },
  {
    title: "Garaunteed interviews",
    description:
      "Support in crafting a professional CV and reference provided by Consology I.T",
    image: guaranteed,
  },
  {
    title: "Job salaries ranging from 18k to 30k",
    description: "Guidance to excel in interviews and land your first role.",
    image: salaries,
  },
  {
    title:
      "Classes are held on-site in Birmingham, Tyseley but classes will also be held remotely",
    description: "",
    image: classesOnSite,
  },
];

export default function ItTrainingCard() {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4">
        {ITDATA.map((item, index) => (
          <div className="rounded-md border-2 p-4" key={index}>
            <div className="flex flex-col items-center space-y-8 border-b-2">
              <Image src={item.image} alt="" className="object-fill" />
              <div className="space-y-8">
                <p className="text-xl font-medium">{item.title}</p>
                <p className="pb-12 text-base">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-3 gap-4">
      <div className="rounded-md border-2 p-4">
        <div className="flex flex-col items-center space-y-8 border-b-2">
          <Image src={technical} alt="" className="object-fill" />
          <div className="space-y-8">
            <p className="text-xl font-medium">Technical Knowledge</p>
            <p className="pb-12 text-base">
              Essential skills and knowledge tailored for performing 1st line
              support duties.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    </section>
  );
}
