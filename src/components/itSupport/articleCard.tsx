import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import infra1 from "../../../public/assets/customer.png";
import Link from "next/link";

interface ArticleCardProps {
  title: string;
  description: React.ReactNode | string;
  className?: string;
  image: StaticImageData | string;
  bgImage: string;
  reverse?: boolean;
  sideImageClassName?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  bgImage,
  reverse,
  className,
  sideImageClassName,
}) => {
  return (
    <article
      className={cn(
        `flex gap-8 md:flex-col`,
        reverse ? "flex-row-reverse" : "",
      )}
    >
      <div
        className={cn(
          `flex flex-[3] flex-col items-start justify-center space-y-6 overflow-hidden rounded-md bg-cover bg-no-repeat p-8 text-white`,
          className,
        )}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <p className="text-5xl font-medium">{title}</p>
        {typeof description === "string" ? (
          <p className="text-l font-normal">{description}</p>
        ) : (
          description
        )}
        <Link href={"/contact"} className="text-xl underline">
          Get started
        </Link>
      </div>
      <div
        className={cn(
          "flex-[2] overflow-hidden rounded-md bg-center bg-no-repeat",
          sideImageClassName,
        )}
      >
        <Image src={image} alt="" className="h-fit object-cover" />
      </div>
    </article>
  );
};

export default ArticleCard;
