import { cn, formatDate } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";

type BlogCardProps = {
  children?: React.ReactNode;
  title: string;
  slug: string;
  publishedAt: string;
  author: string;
  description: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Illustration() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 336 201"
      className="w-64 sm:w-80"
    >
      <g clip-path="url(#a)">
        <path fill="#F4D04E" d="M0 .5h336v200H0z" />
        <rect
          width="139"
          height="95"
          x="87.996"
          y="77.729"
          fill="#fff"
          rx="47.5"
          transform="rotate(-45 87.996 77.729)"
        />
        <rect
          width="139"
          height="95"
          x="54.055"
          y="77.729"
          fill="#111"
          rx="47.5"
          transform="rotate(-45 54.055 77.729)"
        />
        <path
          fill="#111"
          d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
        />
        <rect
          width="139"
          height="95"
          x="20.114"
          y="77.729"
          fill="#fff"
          rx="47.5"
          transform="rotate(-45 20.114 77.729)"
        />
        <rect
          width="204.19"
          height="270.554"
          fill="#111"
          rx="102.095"
          transform="scale(-1 1) rotate(45 -103.887 14.564)"
        />
        <path
          stroke="#fff"
          stroke-width="3"
          d="m6.69-357.5 135.583 135.727c12.481 12.494 12.481 32.737 0 45.231L-45.544 11.475c-12.481 12.494-12.481 32.737 0 45.23L107.088 209.5"
        />
        <path
          stroke="#111"
          stroke-width="3"
          d="M69.965 71.719v23.334h23.334M136.079 52.273V28.94h-23.334M102.845 38.838v46.67M210.364-37.5l60.873 60.873c12.497 12.496 12.497 32.758 0 45.254l-77.745 77.746c-12.497 12.496-12.497 32.758 0 45.254l69.872 69.873"
        />
        <path
          stroke="#111"
          stroke-width="3"
          d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.144"
        />
        <path
          stroke="#fff"
          stroke-width="5"
          d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
        />
        <mask
          id="b"
          width="285"
          height="285"
          x="234"
          y="-8"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#111"
            d="M234.864 209.036 451.4-7.5l67.175 67.175-216.536 216.536z"
          />
        </mask>
        <g stroke="#fff" mask="url(#b)">
          <path
            stroke-width="3"
            d="m253.339 149.574-12.144 12.145 14.256 14.257v12.672h12.673l13.729 13.729 12.145-12.145M278.685 124.228l-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145M304.031 98.883l-12.145 12.144 14.257 14.257v12.673h12.673l13.729 13.729 12.144-12.145M329.376 73.537l-12.145 12.145 14.257 14.257v12.672h12.673l13.729 13.729 12.145-12.145"
          />
          <path
            stroke-width="5"
            d="m354.722 48.191-12.145 12.145 14.257 14.257v12.673h12.673l13.729 13.729 12.145-12.145"
          />
        </g>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 .5h336v200H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function BlogCard({
  className,
  slug,
  title,
  publishedAt,
  author,
  description,
}: BlogCardProps) {
  return (
    <Card
      className={cn(
        "max-w-[19rem] border-black shadow-[7px_7px_0_hsl(0_0%_0%)] dark:border-none dark:shadow-[7px_7px_0_hsl(0_0%_100%)] sm:max-w-[23rem]",
        className,
      )}
    >
      <CardHeader>
        <Illustration />
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-2">
          {/* <span className="block w-min rounded bg-background px-3 py-1 text-xs font-extrabold">
            Learning
          </span> */}
          <p className="text-sm font-medium">
            Published {formatDate(publishedAt)}
          </p>
          <Link href={`/blog/${slug}`}>
            <h1 className="cursor-pointer text-xl font-extrabold text-primary hover:text-gray-400 dark:text-foreground">
              {title}
            </h1>
          </Link>

          <p className="text-sm leading-5 text-muted-foreground">
            {description}
          </p>
        </section>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-3">
          <RxAvatar />
          <p className="font-extrabold">{author}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
