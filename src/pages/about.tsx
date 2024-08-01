import React from "react";
import at_about from "../../public/assets/at_about.jpg";
import consult from "../../public/assets/consult.svg";
import reliable from "../../public/assets/reliable.svg";
import focus from "../../public/assets/focus.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import TechnologyVendors from "@/components/technologyVendors";
import Button from "@/components/button";

const WHY_US_DATA = [
  {
    image: consult,
    title: "Consulting Excellence",
    subTitle:
      "At Consology, we are dedicated to transforming how small and medium-sized businesses operate through cutting-edge cloud technologies and comprehensive IT support. Our expertise spans across various industries, including retail, hospitality, and law enforcement, enabling us to tailor solutions that drive efficiency and growth.",
  },
  {
    image: reliable,
    title: "Reliable IT Support",
    subTitle:
      "From remote assistance to on-site support, our proactive IT services ensure your systems are secure, efficient, and always operational. We offer comprehensive solutions, including data backup, disaster recovery, and advanced network security, to protect your business from potential threats and minimize downtime. Our support team is available 24/7 to resolve issues quickly and keep your business running smoothly.",
  },
  {
    image: focus,
    title: "Our Focus",
    subTitle:
      "With a focus on innovation and customer satisfaction, Consology helps your business leverage the power of the cloud to streamline operations, enhance productivity, and achieve strategic goals. We believe in building long-term partnerships with our clients, offering expert guidance and support every step of the way.",
  },
];

export default function About() {
  return (
    <div>
      <header
        className={cn(
          "relative isolate space-y-6 bg-cover bg-no-repeat p-20 md:px-10",
        )}
        style={{
          backgroundImage: `url(/assets/about_bg.png)`,
          backgroundSize: "cover",
        }}
      >
        <Button
          text={"About Us"}
          className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
        />
        <h1 className="w-11/12 text-8xl font-medium text-white 2md:w-full 2md:text-4xl">
          Empowering Businesses with Innovative Cloud and IT Solutions
        </h1>
        <TechnologyVendors />
      </header>

      <section className="flex justify-between gap-6 p-12 md:flex-wrap">
        <div
          className="flex-[2] space-y-6 p-12 md:flex-auto"
          style={{
            backgroundImage: `url("../assets/about_consology.jpg")`,
            backgroundSize: "cover",
            borderRadius: 20,
          }}
        >
          <h1 className="text-8xl font-medium md:text-4xl">
            <span className="text-[#3940AB]">At </span> <span>Consology,</span>
          </h1>
          <p className="text-2xl md:text-lg">
            At Consology, we are dedicated to transforming how small and
            medium-sized businesses operate through cutting-edge cloud
            technologies and comprehensive IT support. Our expertise spans
            across various industries, including retail, hospitality, and law
            enforcement, enabling us to tailor solutions that drive efficiency
            and growth.
          </p>
        </div>
        <div className="flex-[2] overflow-hidden rounded-lg md:h-[200px] md:flex-auto">
          <Image src={at_about} alt="" className="h-full object-cover" />
        </div>
      </section>

      <div className="bg-black p-12">
        <h1 className="mb-4 text-8xl font-medium md:text-4xl">
          <span className="text-[#5D5D5D]">Why </span>
          <span className="text-white">Choose us?</span>
        </h1>

        <div className="col-span-3 my-10 grid grid-cols-2 grid-rows-2 gap-6 md:flex md:flex-col">
          {WHY_US_DATA.map((data, index) => (
            <div
              className={`space-y-4 rounded-md bg-[#1F1F1F] p-7 ${
                index === 2 ? "col-span-2 h-fit" : ""
              }`}
              key={index}
            >
              <Image src={data.image} alt="" />
              <h3 className="text-white">{data.title}</h3>
              <p className="text-[#6C6C6C]">{data.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
