import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type { FC, ReactNode } from "react";

type CurrentPageProviderProps = {
  href: string;
  children: ReactNode;
};

export const CurrentPageProvider: FC<CurrentPageProviderProps> = ({
  href,
  children,
}) => {
  const pathname = usePathname();

  // I use `startsWith` here to handle nested routes
  const active = href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <div
      className={cn("group", {
        "active-page": active,
      })}
    >
      {children}
    </div>
  );
};
