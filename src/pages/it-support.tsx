import Hero from "@/components/hero";
import Image from "next/image";
import React, { Fragment } from "react";
import support2 from "../../public/assets/support-2.png";
import infra1 from "../../public/assets/infra-1.png";
import vendor2 from "../../public/assets/vendor-2.jpg";
import security2 from "../../public/assets/security-2.png";
import microsoft from "../../public/assets/microsoft-icon.png";
import vmware from "../../public/assets/vmware.png";
import cisco from "../../public/assets/icons_cisco.png";
import hp from "../../public/assets/hp.png";
import backup from "../../public/assets/backup.jpg";
import customer from "../../public/assets/customer.png";
import CaseStudies from "@/components/caseStudies";
import ArticleCard from "@/components/itSupport/articleCard";

const ItSupport = () => {
  return (
    <Fragment>
      <Hero
        heading={"Comprehensive I.T. Support Services"}
        subHeading={
          "At Consology, we take pride in offering end-to-end I.T. support that ensures your business operates seamlessly. Our holistic approach covers every aspect of your technology ecosystem, from individual end users to the underlying infrastructure."
        }
        heroBg={"/assets/it-support.jpg"}
        showTechnologyVendors
      />
      <section className="space-y-8 p-10">
        <ArticleCard
          title="End User Support"
          description="We provide responsive help desk services to assist your employees with any technical issues they encounter. From software troubleshooting to hardware setup, our team ensures your end users stay productive."
          image={support2}
          bgImage="/assets/support-1.jpg"
        />
        <ArticleCard
          title="Infrastructure Management"
          description="Our experts oversee your entire infrastructure, including servers, networks, and cloud services. We optimize performance, monitor security, and handle maintenance tasks proactively."
          image={infra1}
          bgImage="/assets/infra-2.jpg"
          reverse
        />
        <article className="flex gap-8 md:flex-col">
          <div className="flex flex-[3] flex-col gap-5">
            <div className="flex-1 space-y-6 overflow-hidden rounded-md bg-[url('/assets/vendor-1.jpg')] bg-cover bg-no-repeat p-10 text-black">
              <p className="text-5xl font-medium md:text-3xl">
                Vendor Coordination
              </p>
              <p className="text-l font-normal">
                Dealing with multiple vendors can be complex. Let us manage
                vendor relationships for you. We collaborate with Microsoft,
                VMWare, Cisco, HP, and others to streamline support.
              </p>
            </div>
            <div className="flex items-center justify-between gap-5 overflow-hidden rounded-md bg-black p-10">
              <Image src={microsoft} alt="" />
              <Image src={vmware} alt="" />
              <Image src={cisco} alt="" />
              <Image src={hp} alt="" />
            </div>
          </div>
          <div className="flex-[2] overflow-hidden rounded-md">
            <Image src={vendor2} alt="" className="h-full" />
          </div>
        </article>
        <ArticleCard
          title="Backup and Disaster Recovery"
          description="Our experts oversee your entire infrastructure, including servers, networks, and cloud services. We optimize performance, monitor security, and handle maintenance tasks proactively."
          image={backup}
          bgImage="/assets/backupbg.jpg"
          className="text-black"
          reverse
        />
        <ArticleCard
          title="Security and Compliance"
          description={
            "Protecting your data is paramount. We implement robust security measures and ensure compliance with industry standards."
          }
          image={security2}
          bgImage=""
          className="bg-black"
        />
        <ArticleCard
          title="Customer-Centric Approach"
          description={
            <div className="pr-5 md:pl-5">
              <p className="text-l text-sm font-normal">
                At Consology, your satisfaction is our top priority. Our
                commitment includes:
              </p>
              <div className="mt-10 space-y-3">
                <p>
                  <span className="font-medium">Continous improvement:</span> No
                  We learn from every interaction to enhance our services.{" "}
                </p>
                <p>
                  <span className="font-medium">Clear Communication: </span> No
                  technical jargon—just straightforward explanations.{" "}
                </p>
              </div>
            </div>
          }
          image={customer}
          bgImage="/assets/infra-2.jpg"
          reverse
          sideImageClassName="border border-[#B7DEF2]"
        />
      </section>
      <CaseStudies />
    </Fragment>
  );
};

export default ItSupport;
