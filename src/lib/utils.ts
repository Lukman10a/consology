import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Inter } from "next/font/google";
import { remark } from "remark";
import html from "remark-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// utils/formatDate.js

export function formatDate(dateString: string | number | Date) {
  const options: Intl.DateTimeFormatOptions | undefined = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
