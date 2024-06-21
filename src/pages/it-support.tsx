import Hero from "@/components/hero";
import Image from "next/image";
import React, { Fragment } from "react";
import support2 from "../../public/assets/support-2.png";
import infra1 from "../../public/assets/infra-1.png";
import vendor2 from "../../public/assets/vendor-2.jpg";
import microsoft from "../../public/assets/microsoft-icon.png";
import vmware from "../../public/assets/vmware.png";
import cisco from "../../public/assets/icons_cisco.png";
import hp from "../../public/assets/hp.png";
import CaseStudies from "@/components/caseStudies";

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
        <article className="flex gap-8">
          <div className="text-white space-y-6 rounded-md p-8 overflow-hidden bg-[url('/assets/support-1.jpg')] flex-[3] bg-no-repeat bg-cover">
            <p className="text-5xl font-medium">End User Support</p>
            <p className="text-l font-normal">
              We provide responsive help desk services to assist your employees
              with any technical issues they encounter. From software
              troubleshooting to hardware setup, our team ensures your end users
              stay productive.
            </p>
            <button className="underline text-xl">Get started</button>
          </div>
          <div className="rounded-md overflow-hidden flex-[2]">
            <Image src={support2} alt="" className="h-full" />
          </div>
        </article>
        <article className="flex gap-8 ">
          <div className="rounded-md overflow-hidden flex-[2] ">
            <Image src={infra1} alt="" className="h-full" />
          </div>
          <div className="text-white space-y-6 rounded-md p-10 overflow-hidden bg-[url('/assets/infra-2.jpg')] flex-[3] bg-no-repeat bg-cover">
            <p className="text-5xl font-medium">Infrastructure Management</p>
            <p className="text-l font-normal">
              Our experts oversee your entire infrastructure, including servers,
              networks, and cloud services. We optimize performance, monitor
              security, and handle maintenance tasks proactively.
            </p>
            <button className="underline text-xl">Get started</button>
          </div>
        </article>
        <article className="flex gap-8">
          <div className="flex-[3] flex flex-col gap-5 ">
            <div className="text-black flex-1  space-y-6 rounded-md p-10 overflow-hidden bg-[url('/assets/vendor-1.jpg')]  bg-no-repeat bg-cover">
              <p className="text-5xl font-medium">Vendor Coordination</p>
              <p className="text-l font-normal">
                Dealing with multiple vendors can be complex. Let us manage
                vendor relationships for you. We collaborate with Microsoft,
                VMWare, Cisco, HP, and others to streamline support.
              </p>
              <button className="underline text-xl">Get started</button>
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
      </section>
      <CaseStudies />
    </Fragment>
  );
};

export default ItSupport;
