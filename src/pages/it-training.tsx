import Hero from "@/components/hero";
import React from "react";

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
    </section>
  );
}
