import { inter } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/assets/logo.svg";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className={`${inter.variable} bg-[url('/assets/image 3.png')] flex justify-between gap-11 bg-black px-10 py-10 font-inter text-white md:flex-col`}
    >
      <div className="flex-1 space-y-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <p className="text-sm text-[#B7AFAF]">
          We assist small and medium-sized businesses across various industries
          in migrating to the cloud and optimizing their cloud software, with a
          particular emphasis on Microsoft products.
        </p>
        <p className="text-sm text-[#645D5D]">
          © 2024 Consology. All rights reserved.
        </p>
      </div>

      <div className="flex flex-1 justify-center gap-10 md:flex-wrap md:justify-start">
        <div className="font-medium">
          <p className="mb-3 text-sm text-[#645D5D]">Company</p>
          <ul className="space-y-3">
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/career"}>Career</Link>
            </li>
          </ul>
        </div>
        <div className="font-medium">
          <p className="mb-3 text-sm text-[#645D5D]">Business</p>
          <ul className="space-y-4">
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/"}>Our Services</Link>
            </li>
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/"}>Insights</Link>
            </li>
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/case-studies"}>Case Studies</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-5 md:justify-start">
        <Link target="_blank" href="https://www.linkedin.com/company/consolgy/">
          <FaLinkedin size={24} />
        </Link>
        <Link target="_blank" href="/">
          <FaFacebook size={24} />
        </Link>
        <Link target="_blank" href="https://x.com/consology">
          <FaXTwitter size={24} />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/consology/">
          <FaInstagram size={24} />
        </Link>
      </div>
    </footer>
  );
}
