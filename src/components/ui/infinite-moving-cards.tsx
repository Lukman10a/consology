import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import teams from "../../../public/assets/teams.svg";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    //  max-w-7xl [mask-image:linear-gradient(to_right,transparent,white_20%,#FDFDFD_97%,transparent)]
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[450px] max-w-full flex-shrink-0 rounded-2xl border-slate-700 bg-white px-8 py-6 text-[#4F4F4F] shadow-md md:w-[350px]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <p className="relative z-20 mb-3 flex items-center gap-3">
                <FaCircleUser color="#006CFE" size={24} />
                <span className="font-semibold leading-[1.6]">{item.name}</span>
              </p>
              <p className="relative z-20 my-5 text-sm font-normal leading-[1.6]">
                {item.quote}
              </p>
              <p className="relative z-20 flex items-center gap-3">
                <div className="w-6">
                  <Image src={teams} alt="Teams" className="h-auto w-full" />
                </div>
                <span className="font text-sm font-normal leading-[1.6] text-black">
                  {item.title}
                </span>
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
