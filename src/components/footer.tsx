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
      className={`${inter.variable} font-inter flex justify-between bg-black gap-11 py-10 px-10 text-white bg-[url('/assets/image 3.png')] md:flex-wrap`}
    >
      <div className="space-y-4 flex-1">
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

      <div className="flex gap-10 flex-1 justify-center md:flex-wrap">
        <div className="font-medium">
          <p className="mb-3 text-sm text-[#645D5D]">Company</p>
          <ul className="space-y-3">
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/"}>About</Link>
            </li>
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/"}>Blog</Link>
            </li>
            <li className="text-sm text-[#EAECF0]">
              <Link href={"/"}>Career</Link>
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
              <Link href={"/"}>Case Studies</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5 flex-1 justify-end">
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
