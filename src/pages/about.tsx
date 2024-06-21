import Hero from "@/components/hero";
import React from "react";
import about from "@../../../public/assets/about.png";
import consult from "@../../../public/assets/consult.svg";
import reliable from "@../../../public/assets/reliable.svg";
import focus from "@../../../public/assets/focus.svg";
import Image from "next/image";

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
      <Hero
        heading={"Empowering Businesses with Innovative Cloud and IT Solutions"}
        subHeading={""}
        heroBg={"/assets/about_bg.png"}
      />

      <div className="flex gap-6 justify-between p-12 ">
        <div
          className="p-12 space-y-6"
          style={{
            backgroundImage: `url("../assets/about_consology.jpg")`,
            backgroundSize: "cover",
            borderRadius: 20,
          }}
        >
          <h1 className="font-medium text-8xl">
            <span className="text-[#3940AB]">At </span> <span>Consology,</span>
          </h1>
          <p className="text-2xl">
            At Consology, we are dedicated to transforming how small and
            medium-sized businesses operate through cutting-edge cloud
            technologies and comprehensive IT support. Our expertise spans
            across various industries, including retail, hospitality, and law
            enforcement, enabling us to tailor solutions that drive efficiency
            and growth.
          </p>
        </div>
        <Image src={about} alt="" />
      </div>

      <div className="bg-black p-12 ">
        <h1 className="font-medium text-8xl mb-4">
          <span className="text-[#5D5D5D]"> Why</span>
          <span className="text-white">Choose us?</span>
        </h1>

        <div className=" grid grid-cols-2 grid-rows-2 col-span-3 gap-6 my-10 md:flex md:flex-col ">
          {WHY_US_DATA.map((data, index) => (
            <div
              className={`bg-[#1F1F1F] p-7 rounded-md space-y-4 ${
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
