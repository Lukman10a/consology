import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import Button from "./button";

const servicesSubnav = [
  {
    title: "Microsoft security",
    href: "/microsoft-security",
  },
  {
    title: "Microsoft exchange and online premise",
    href: "/microsoft-exchange",
  },
  {
    title: "Microsoft Identity",
    href: "/microsoft-identity",
  },
  {
    title: "Microsoft Collaboration and Productivity tools",
    href: "/microsoft-security",
  },
];

const insightsSubnav = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "News",
    href: "/news",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
];

export function MobileMenu() {
  const [menuIsOpen, toggleMenuIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    toggleMenuIsOpen(false);
  }, [router]);

  return (
    <DropdownMenu onOpenChange={toggleMenuIsOpen} open={menuIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="text-violet11 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center  outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Navigation Bar"
        >
          <RxHamburgerMenu color="white" size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>Consology</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="w-full" href={"/"}>
              <button className="text-black">Home</button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Our Services</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent sideOffset={-60}>
                {servicesSubnav.map((service) => (
                  <DropdownMenuItem key={service.title} asChild>
                    <Link href={service.href}>{service.title}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Insights</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {insightsSubnav.map((insight) => (
                  <DropdownMenuItem key={insight.title}>
                    <Link href={insight.href} className="w-full">
                      {insight.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Link className="w-full" href={"/training"}>
              <button className="text-black">Solution</button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link className="w-full" href={"/about"}>
              <button className="text-black">About us</button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link className="w-full" href={"/contact"}>
            <Button text={"Contact us"} />
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
