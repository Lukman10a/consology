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
    <article
      className={cn(
        `flex gap-8 md:flex-col`,
        reverse ? "flex-row-reverse" : "",
      )}
    >
      <div
        className={`flex-[3] space-y-6 overflow-hidden rounded-md bg-cover bg-no-repeat p-8 text-white`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <p className="text-5xl font-medium">{title}</p>
        <p className="text-l font-normal">{description}</p>
        <button className="text-xl underline">Get started</button>
      </div>
      <div className="flex-[2] overflow-hidden rounded-md">
        <Image src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </article>
  );
};

export default ArticleCard;
