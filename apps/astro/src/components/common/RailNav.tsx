import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

interface RailNavProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  isActive?: boolean;
  className?: string;
}

const RailNavProps = ({
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
      className={cn(
        "whitespace-nowrap font-sans text-xl font-bold text-[#444]",
        isActive && "text-white",
        className,
      )}
    >
      {children}
    </a>
  );
};

export default RailNavProps;
