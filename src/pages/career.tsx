import React from "react";
import Button from "@/components/button";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import career from "../../public/assets/career.png";
import { FaSearch } from "react-icons/fa";

export default function Career({
  containerClass,
  ctaHref = "/contact",
  ctaText = "Contact us",
}: {
  containerClass?: string;
  ctaHref?: string;
  ctaText?: string;
  hasBg?: boolean;
}) {
  const JOBPOSITIONS = [
    {
      position: "Site Reliability Engineer",
      department: "Technology",
      commitment: "Full time",
      location: "European Union",
    },
    {
      position: "Open application",
      department: "Any team",
      commitment: "Full time",
      location: "European Union / United States",
    },
    // Add more job positions here if needed
  ];
  return (
    <section>
      <header
        className="flex flex-col items-center justify-center p-20"
        style={{
          backgroundImage: `url("/assets/career_bg.png")`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="text-center text-8xl font-medium text-white 2md:w-full 2md:text-5xl">
          <span>Work at</span> <span className="text-[#FFE59C]">CONSOLOGY</span>{" "}
          <span>Work in the Great Beyond</span>
        </h1>

        <div className="mt-6 flex items-center gap-2">
          <div className="">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-xl border-2 border-white p-2 px-20 opacity-25"
            />
          </div>
          <div>
            <FaSearch size={30} color="white" />
          </div>
        </div>

        <Link href={ctaHref} className="mt-6 inline-block">
          <Button
            text={"View all available jobs"}
            className="rounded-md bg-white p-2 px-4 font-semibold"
          />
        </Link>
      </header>

      <div>
        <div className="flex justify-center">
          <h1 className="text-7xl font-medium">
            We are a diverse team of people
          </h1>
          <p className="text-xl">
            At the heart of our organization is a vibrant, multicultural team
            united by a shared passion for innovation and excellence. Our
            collective backgrounds, experiences, and perspectives shape a
            dynamic environment where creativity thrives, and unique ideas are
            celebrated.
          </p>
        </div>
        <Image src={career} alt="" />
      </div>

      <div>
        <div className="bg-[#F7F7F7] p-20">
          <h1 className="text-center text-7xl font-medium">Open positions</h1>

          <div className="my-8 grid grid-cols-5 rounded-md p-5 text-lg">
            <p className="col-span-2">Position</p>
            <p>Department</p>
            <p>Commitment</p>
            <p>Location</p>
          </div>

          {JOBPOSITIONS.map((job, index) => (
            <div
              key={index}
              className="my-8 grid cursor-pointer grid-cols-5 rounded-md p-5 text-lg transition duration-300 ease-in-out hover:bg-white hover:shadow-md"
            >
              <p className="col-span-2">{job.position}</p>
              <p>{job.department}</p>
              <p>{job.commitment}</p>
              <p>{job.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
