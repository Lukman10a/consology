import React from "react";
import logo from "../../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/utils";
import Button from "./button";

export default function NavBar() {
  return (
    <nav
      className={`${inter.variable} font-inter flex items-center justify-between bg-black  py-5 px-10 text-white bg-[url('/assets/image 3.png')]`}
    >
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex gap-10 items-center">
        <ul className="flex gap-5 items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/it-support"}>IT Support</Link>
          </li>
          <li>
            <Link href={"/consultancy"}>Consultancy</Link>
          </li>
          <li>
            <Link href={"/career"}>Career</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
        <Button text="Contact us" />
      </div>
    </nav>
  );
}
