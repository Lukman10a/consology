import CaseStudies from "@/components/caseStudies";
import Hero from "@/components/hero";
import React, { Fragment } from "react";

const CaseStudiesPage = () => {
  return (
    <Fragment>
      <Hero
        heading={"Case Studies"}
        heroBg={"/assets/caseStudyBg.jpg"}
        subHeading={
          "Discover how we've helped businesses transform and thrive in the cloud."
        }
      />
      <CaseStudies isDetailsPage={true} />
    </Fragment>
  );
};

export default CaseStudiesPage;
