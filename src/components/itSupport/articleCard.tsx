import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ArticleCardProps {
  title: string;
  description: React.ReactNode | string;
  className?: string;
  image: StaticImageData | string;
  bgImage: string;
  reverse?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  bgImage,
  reverse,
  className,
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
          `h-fit flex-[3] space-y-6 overflow-hidden rounded-md bg-cover bg-no-repeat p-8 text-white`,
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
        <button className="text-xl underline">Get started</button>
      </div>
      <div
        className="flex-[2] overflow-hidden rounded-md bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
        }}
      >
        {/* <Image src={image} alt="" className="h-fit object-cover" /> */}
      </div>
    </article>
  );
};

export default ArticleCard;
