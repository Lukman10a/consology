import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  bgImage: string;
  reverse?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  bgImage,
  reverse,
}) => {
  return (
    <article className={cn(`flex gap-8 `, reverse ? "flex-row-reverse" : "")}>
      <div
        className={`text-white space-y-6 rounded-md p-8 overflow-hidden flex-[3] bg-no-repeat bg-cover`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <p className="text-5xl font-medium">{title}</p>
        <p className="text-l font-normal">{description}</p>
        <button className="underline text-xl">Get started</button>
      </div>
      <div className="rounded-md overflow-hidden flex-[2]">
        <Image src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </article>
  );
};

export default ArticleCard;
