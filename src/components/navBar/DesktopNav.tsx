import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { insightsSubnav, servicesSubnav } from ".";
import { cn } from "@/lib/utils";
import Button from "../button";

function DesktopNavbar() {
  return (
    <NavigationMenu className="2md:hidden">
      <NavigationMenuList className="space-x-5 rounded-full px-7 py-2 text-black">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent p-0 text-white hover:bg-transparent hover:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2">
              {servicesSubnav.map((services) => (
                <li key={services.href}>
                  <Link href={services.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "block select-none space-y-1 rounded-md bg-transparent p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      )}
                    >
                      <div className="text-sm font-medium leading-none">
                        {services.title}
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent p-0 text-white hover:bg-transparent">
            Insight
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="p-2">
              {insightsSubnav.map((insights) => (
                <li key={insights.href}>
                  <Link href={insights.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      )}
                    >
                      <p className="text-sm font-medium leading-none">
                        {insights.title}
                      </p>
                    </NavigationMenuLink>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        <NavigationMenuItem>
          <Link href="/it-support" legacyBehavior passHref>
            <NavigationMenuLink className="bg-transparent text-white">
              I.T Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/consultancy" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Consultancy
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Career
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asLink
            className="w-full"
            href={"/contact"}
            text={"Contact us"}
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DesktopNavbar;
