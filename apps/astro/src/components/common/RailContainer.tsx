import type { ReactNode } from "react";

import { cn } from "~/lib/utils";

interface RailContainerProps {
  children: ReactNode;
  className?: string;
  disableGradient?: boolean;
}

const RailContainer = ({
  children,
  className,
  disableGradient,
}: RailContainerProps) => {
  return (
    <nav
      className={cn(
        "group/nav relative hidden w-fit flex-col border-[#444] py-20 pe-10 ps-10 lg:flex",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-white/15 opacity-0 transition group-hover/nav:opacity-100",
          disableGradient && "invisible",
        )}
      />
      {children}
    </nav>
  );
};

export default RailContainer;
