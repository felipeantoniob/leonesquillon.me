import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

interface RailNavProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
  className?: string;
}

const RailNav = ({
  children,
  href,
  isActive,
  className,
  ...props
}: PropsWithChildren<RailNavProps>) => {
  return (
    <a
      {...props}
      href={href}
      aria-label={`Navigate to ${href}`}
      className={cn(
        "whitespace-nowrap font-sans text-xl font-bold text-muted-foreground transition group-hover/nav:text-foreground",
        isActive && "text-foreground",
        className,
      )}
    >
      {children}
    </a>
  );
};

export default RailNav;
