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
      />
      <section className="p-10 space-y-8">
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

        <article className="flex gap-8">
          <div className="flex-[3] flex flex-col gap-5">
            <div className="text-black flex-1  space-y-6 rounded-md p-10 overflow-hidden bg-[url('/assets/vendor-1.jpg')]  bg-no-repeat bg-cover">
              <p className="text-5xl font-medium">Vendor Coordination</p>
              <p className="text-l font-normal">
                Dealing with multiple vendors can be complex. Let us manage
                vendor relationships for you. We collaborate with Microsoft,
                VMWare, Cisco, HP, and others to streamline support.
              </p>
            </div>
            <div className="rounded-md p-10 overflow-hidden bg-black flex gap-5 justify-between items-center">
              <Image src={microsoft} alt="" />
              <Image src={vmware} alt="" />
              <Image src={cisco} alt="" />
              <Image src={hp} alt="" />
            </div>
          </div>
          <div className="rounded-md overflow-hidden flex-[2] ">
            <Image src={vendor2} alt="" className="h-full" />
          </div>
        </article>
        <article className="flex gap-8">
          <div className="flex-[3] flex flex-col gap-5">
            <div className="text-black flex-1 gap-5  rounded-md p-10 overflow-hidden bg-white shadow-md  flex items-center">
              <div className="space-y-6">
                <p className="text-4xl font-medium">
                  Backup and Disaster Recovery
                </p>
                <p className="text-l font-normal">
                  We design reliable backup solutions to safeguard your critical
                  data. In case of emergencies, our disaster recovery plans
                  minimize downtime and data loss.
                </p>
              </div>
              <div>
                <Image src={backup} alt="" />
              </div>
            </div>
            <div className="text-black flex-1 flex gap-5 items-center  space-y-6 rounded-md  overflow-hidden bg-white shadow-md ">
              <div>
                <Image src={customer} alt="" />
              </div>
              <div className=" py-10 pr-5">
                <p className="text-4xl font-medium mb-4">
                  Customer-Centric Approach
                </p>
                <p className="text-l font-normal text-sm">
                  At Consology, your satisfaction is our top priority. Our
                  commitment includes:
                </p>
                <div className="space-y-3 mt-4">
                  <p>
                    <span className="font-medium">Clear Communication:</span> No
                    technical jargon—just straight-forward explanations.
                  </p>
                  <p>
                    <span className="font-medium">
                      Continuous Improvement:{" "}
                    </span>{" "}
                    We learn from every interaction to enhance our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md overflow-hidden flex-[2] bg-[#0A0F14] text-white">
            <div className="p-7">
              <p className="text-5xl font-medium mb-4">
                Security and Compliance
              </p>
              <p className="text-l font-normal">
                Protecting your data is paramount. We implement robust security
                measures and ensure compliance with industry standards.
              </p>
            </div>
            <>
              <Image
                src={security2}
                alt=""
                className="w-full h-full object-contain"
              />
            </>
          </div>
        </article>
      </section>
      <CaseStudies />
    </Fragment>
  );
};

export default ItSupport;
