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

export default function Career() {
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
        " We can be honest and kind.",
        " We can have high standards and be kind.",
        " We can say no and be kind.",
        " Kindness can vary across cultures, upbringings and languages - but we try our best to be kind.",
      ],
    },
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
        <h1 className="text-center text-8xl font-medium text-white 2md:text-5xl">
          Consology Careers
        </h1>
        <p className="pt-5 text-xl font-medium text-white">
          All Consology Job Vacancies will be posted here
        </p>

        <Link href={"/contact"} className="mt-6 inline-block">
          <Button
            text={"View all available jobs"}
            className="rounded-md bg-white p-2 px-4 font-semibold"
          />
        </Link>
      </header>

      <div>
        <div className="grid grid-cols-2 place-items-start p-20 md:grid-cols-1 md:gap-8 md:p-8">
          <h1 className="text-7xl font-medium md:text-4xl">
            We are a diverse team of people
          </h1>
          <p className="text-xl sm:text-xl">
            At the heart of our organization is a vibrant, multicultural team
            united by a shared passion for innovation and excellence. Our
            collective backgrounds, experiences, and perspectives shape a
            dynamic environment where creativity thrives, and unique ideas are
            celebrated.
          </p>
        </div>
        <Image src={career} alt="" className="md:hidden lg:hidden" />
      </div>

      <div className="grid grid-cols-2 gap-10 p-24 px-36 md:grid-cols-1 md:px-4 lg:px-6">
        <div>
          <h1 className="text-7xl font-medium md:text-4xl">Our Values</h1>
          <p className="text-2xl md:text-lg">
            What we love and stand for every day
          </p>
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
        <div className="bg-[#F7F7F7] p-24 px-36 md:px-4">
          <div className="grid grid-cols-2 gap-14 md:grid-cols-1 md:px-6">
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
