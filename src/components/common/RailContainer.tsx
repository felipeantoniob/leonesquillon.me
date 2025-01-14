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
        "group/nav relative hidden w-fit flex-col border-border py-20 pe-10 ps-10 lg:flex",
        className,
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full opacity-0 transition group-hover/nav:opacity-100",
          "bg-gradient-to-t from-black/10 dark:bg-gradient-to-b dark:from-white/15",
          disableGradient && "invisible",
        )}
      />
      {children}
    </nav>
  );
};

export default RailContainer;
