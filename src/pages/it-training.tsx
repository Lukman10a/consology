import ArticleCard from "@/components/consultancy/articleCard";
import Hero from "@/components/hero";
import React from "react";
import itImg from "../../public/assets/it-img.png";
import Button from "@/components/button";
import Image from "next/image";
import ItTrainingCard from "@/components/itTrainingCard";

export default function ItTraining() {
  return (
    <section>
      <Hero
        heading={"I.T Training "}
        subHeading={
          "At Consology, we specialize in preparing individuals for entry-level positions in the I.T industry. Our intensive training programs are crafted to provide participants with the essential skills and practical experience required for 1st line support roles. With our commitment to excellence, we guarantee to prepare you to confidently step into interview-level opportunities within the I.T support field."
        }
        heroBg={"/assets/ittraining.png"}
        // showTechnologyVendors={true}
        customStyles={{
          padding: "80px",
          paddingTop: "250px",
        }}
      />

      <section className="p-10">
        <article className="flex flex-row gap-3 md:flex-col">
          <div className="flex-[2] overflow-hidden rounded-lg md:h-[250px] md:flex-auto">
            <Image src={itImg} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-[3] items-center rounded-lg p-8 md:flex-auto md:p-12">
            <div className="space-y-8">
              <p className="text-6xl font-medium md:text-4xl">
                Launch Your I.T Support Career
              </p>
              <p className="text-xl md:text-base">
                At Consology, we specialize in preparing individuals for 1st
                line support roles with our comprehensive training program.
              </p>
              <Button
                text="Contact us at Training@Consology.co.uk to get started"
                className="rounded-full bg-black p-2 px-4 text-white"
              />
            </div>
          </div>
        </article>
      </section>

      <article className="p-10">
        <ItTrainingCard />
      </article>
    </section>
  );
}
