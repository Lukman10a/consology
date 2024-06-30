import React from "react";
import Button from "@/components/button";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import career from "../../public/assets/career.png";
import book from "../../public/assets/book.svg";
import coach from "../../public/assets/coach.svg";
import weight from "../../public/assets/weight.svg";
import kind from "../../public/assets/kind.svg";
import play from "../../public/assets/play.svg";
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

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
  ];

  const PROCESS = [
    {
      title: "Getting to know you",
    },
    {
      title: "Take-home task",
    },
    {
      title: "A chat in Slack",
    },
    {
      title: "Valuable feedback",
    },
  ];

  const CARDS = [
    {
      id: 1,
      backgroundImage: "/assets/book_bg.png",
      imageSrc: book,
      title: "An open book",
      descriptions: [
        "We are open as a team and as a product.",
        "We don’t put walls up unless it’s necessary.",
        "We become better when we share information.",
        "We are open to diversity of opinion, backgrounds, and thought.",
      ],
    },
    {
      id: 2,
      backgroundImage: "/assets/play_bg.png",
      imageSrc: play,
      title: "Play as a team",
      descriptions: [
        "We play because we’re a creator tool.",
        "Life is short. Let's build something meaningful.",
        "We play as a team because great teams build great things together.",
        "We keep those standards high.",
      ],
    },
    {
      id: 3,
      backgroundImage: "/assets/coach_bg.png",
      imageSrc: coach,
      title: "Be a coach",
      descriptions: [
        "We want the best for our customers and ourselves.",
        "We coach people to their best potential.",
        "That's why an 'Arcader' is both a teammate and a customer.",
      ],
    },
    {
      id: 4,
      backgroundImage: "/assets/weight_bg.png",
      imageSrc: weight,
      title: "Carry the weight",
      descriptions: [
        "We act like owners.",
        "Let’s empower each other.",
        "If we see something that needs change, we lead through it.",
      ],
    },
    {
      id: 5,
      backgroundImage: "/assets/kind_bg.png",
      imageSrc: kind,
      title: "Be kind",
      descriptions: [
        "        We can be honest and kind.",
        " We can have high standards and be kind.",
        " We can say no and be kind.",
        " Kindness can vary across cultures, upbringings and languages - but we try our best to be kind.",
      ],
    },
  ];

  return (
    <section>
      <header
        className="flex flex-col items-center justify-center p-20 md:px-10"
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
        <div className="grid grid-cols-2 place-items-start p-20">
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

      <div className="grid grid-cols-2 gap-10 p-24 px-36">
        <div>
          <h1 className="text-7xl font-medium">Our Values</h1>
          <p className="text-2xl">What we love and stand for every day</p>
        </div>
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="space-y-2 rounded-2xl p-4"
            style={{
              backgroundImage: `url(${card.backgroundImage})`,
              backgroundSize: "cover",
            }}
          >
            <Image src={card.imageSrc} alt="" className="py-4" />
            <div className="space-y-2 text-xl">
              <h3 className="text-4xl font-semibold">{card.title}</h3>
              {card.descriptions.map((description, index) => (
                <p key={index} className="border-b-2 py-3">
                  {description}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="bg-[#F7F7F7] p-24 px-36">
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
              className="my-8 grid cursor-pointer grid-cols-5 rounded-md border-2 p-5 text-lg transition duration-300 ease-in-out hover:bg-white hover:shadow-md"
            >
              <p className="col-span-2">{job.position}</p>
              <p>{job.department}</p>
              <p>{job.commitment}</p>
              <p>{job.location}</p>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-14">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Your application process</h2>
              <p>
                We value your time and the effort you put in to applying for a
                role, so we’ll do our best to make your application and
                interview process as enjoyable as possible.
              </p>
              <p>
                We aim for no more than four interviews in total, and inform you
                about what to expect at every stage.
              </p>
            </div>
            <div>
              {PROCESS.map((process, index) => (
                <div
                  className="flex items-center justify-between space-y-10 border-b-2 p-2"
                  key={process.title}
                >
                  <div className="flex items-center gap-2 text-lg font-medium">
                    <p>{index + 1}.</p>
                    <p>{process.title}</p>
                  </div>
                  <FiPlus />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
