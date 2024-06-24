import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../button";

interface ArticleCardProps {
  title: React.ReactNode;
  description: string;
  image: StaticImageData;
  bgColor: string;
  borderColor: string;
  reverse?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  bgColor,
  borderColor,
  reverse,
}) => {
  return (
    <article
      className={`flex md:flex-col flex-row gap-3 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`rounded-lg p-8 md:p-12 flex-[3] md:flex-auto flex items-center`}
        style={{
          background: bgColor,
          border: `1px solid ${borderColor}`,
        }}
      >
        <div className="space-y-4">
          <p className="font-medium md:text-4xl text-6xl">{title}</p>
          <p className="md:text-base text-xl">{description}</p>
          <Button text="Get started" />
        </div>
      </div>
      <div className="flex-[2] md:flex-auto rounded-lg overflow-hidden md:h-[250px]">
        <Image src={image} alt="" className="w-full h-full object-cover" />
      </div>
    </article>
  );
};

export default ArticleCard;
