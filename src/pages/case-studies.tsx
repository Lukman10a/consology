import CaseStudies from "@/components/caseStudies";
import Hero from "@/components/hero";
import { cn } from "@/lib/utils";
import React, { Fragment } from "react";

const CaseStudiesPage = () => {
  return (
    <Fragment>
      <header
        className={cn(
          "relative isolate space-y-6 bg-cover bg-no-repeat p-20 md:px-10",
        )}
        style={{
          backgroundImage: `url(/assets/caseStudyBg.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="w-10/12 text-8xl font-medium text-white 2md:w-full 2md:text-5xl">
          Case Studies
        </h1>

        <p className="border-t-2 py-2 text-xl text-white 2md:text-lg">
          Discover how we&apos;ve helped businesses transform and thrive in the
          cloud.
        </p>
      </header>
      <section className="container mx-auto space-y-8 p-12">
        <ol className="space-y-8">
          <li>
            <h2 className="mb-4 text-lg font-semibold">
              1. Multi-Cloud Strategies Becoming the Norm
            </h2>
            <p className="mb-2">
              Businesses are increasingly adopting multi-cloud strategies to
              leverage the strengths of different cloud providers, avoid vendor
              lock-in, and enhance redundancy. This trend allows organizations
              to distribute workloads across multiple clouds, optimizing
              performance, cost, and compliance.
            </p>
            <p className="font-medium">Why it Matters:</p>
            <p>
              By diversifying their cloud investments, companies can achieve
              greater resilience and flexibility, tailoring their cloud
              environments to specific business needs and regulatory
              requirements.
            </p>
          </li>
          <li>
            <h2 className="mb-4 text-lg font-semibold">
              2. Edge Computing Gaining Momentum
            </h2>
            <p className="mb-2">
              Edge computing is set to play a crucial role in reducing latency
              and improving real-time data processing by bringing computation
              and storage closer to the data source. This trend is particularly
              relevant for applications requiring immediate insights, such as
              IoT, autonomous vehicles, and smart cities.
            </p>
            <p className="font-medium">Why it Matters:</p>
            <p>
              With the proliferation of connected devices and the need for
              instantaneous data processing, edge computing enables faster
              response times and more efficient use of bandwidth, enhancing the
              overall user experience.
            </p>
          </li>
          <li>
            <h2 className="mb-4 text-lg font-semibold">
              3. AI and Machine Learning Integration
            </h2>
            <p className="mb-2">
              Artificial intelligence (AI) and machine learning (ML) are
              becoming integral to cloud services, offering advanced analytics,
              automation, and decision-making capabilities. Cloud providers are
              continually enhancing their AI/ML offerings, making it easier for
              businesses to deploy and scale these technologies.
            </p>
            <p className="font-medium">Why it Matters:</p>
            <p>
              Integrating AI and ML into cloud environments allows businesses to
              unlock new insights from their data, automate routine tasks, and
              create more intelligent applications, driving innovation and
              competitive advantage.
            </p>
          </li>
          <li>
            <h2 className="mb-4 text-lg font-semibold">
              4. Serverless Computing Expanding
            </h2>
            <p className="mb-2">
              Serverless computing, where cloud providers manage the
              infrastructure and automatically allocate resources as needed, is
              gaining traction. This model simplifies development, reduces
              operational overhead, and can lead to cost savings, as businesses
              only pay for actual usage.
            </p>
            <p className="font-medium">Why it Matters:</p>
            <p>
              Serverless computing offers a highly scalable and efficient way to
              build and run applications, enabling developers to focus on
              writing code and delivering value rather than managing servers.
            </p>
          </li>
          <li>
            <h2 className="mb-4 text-lg font-semibold">
              5. Enhanced Cloud Security and Compliance
            </h2>
            <p className="mb-2">
              As cyber threats become more sophisticated, cloud security remains
              a top priority. In 2024, we see an increased focus on advanced
              security measures, including zero-trust architectures, AI-driven
              threat detection, and enhanced encryption methods. Additionally,
              compliance with global regulations, such as GDPR and CCPA,
              continues to shape cloud strategies.
            </p>
            <p className="font-medium">Why it Matters:</p>
            <p>
              Strengthening cloud security and ensuring compliance are essential
              for protecting sensitive data, maintaining customer trust, and
              avoiding legal repercussions.
            </p>
          </li>
          <li>
            <h2 className="mb-4 text-lg font-semibold">Conclusion</h2>
            <p className="mb-2">
              The future of cloud computing in 2024 is marked by innovation and
              transformation. Businesses that stay informed about these trends
              and proactively adapt their cloud strategies will be
              well-positioned to capitalize on the opportunities presented by
              this dynamic field. Whether it’s through embracing multi-cloud
              environments, leveraging AI and edge computing, or committing to
              sustainability, the cloud continues to be a catalyst for growth
              and efficiency in the digital age.
            </p>
            <p>
              Stay tuned to our blog for more insights and updates on cloud
              computing trends and best practices.
            </p>
          </li>
        </ol>
      </section>

      <CaseStudies isDetailsPage={true} />
    </Fragment>
  );
};

export default CaseStudiesPage;
