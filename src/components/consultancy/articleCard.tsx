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
      className={`flex flex-row gap-3 md:flex-col ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`flex flex-[3] items-center rounded-lg p-8 md:flex-auto md:p-12`}
        style={{
          background: bgColor,
          border: `1px solid ${borderColor}`,
        }}
      >
        <div className="space-y-4">
          <p className="text-6xl font-medium md:text-4xl">{title}</p>
          <p className="text-xl md:text-base">{description}</p>
          <Button
            asLink
            href="/contact"
            text="Get started"
            className="border-b-2 border-black"
          />
        </div>
      </div>
      <div className="flex-[2] overflow-hidden rounded-lg md:h-[250px] md:flex-auto">
        <Image src={image} alt="" className="h-full w-full object-cover" />
      </div>
    </article>
  );
};

export default ArticleCard;
