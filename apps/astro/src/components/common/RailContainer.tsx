import type { ReactNode } from "react";

import { cn } from "~/utils/cn";

interface RailContainerProps {
  children: ReactNode;
  className?: string;
}

const RailContainer = ({ children, className }: RailContainerProps) => {
  return (
    <nav
      className={cn(
        "hidden w-fit flex-col border-[#444] py-20 pe-10 ps-10 lg:flex",
        className,
      )}
    >
      {children}
    </nav>
  );
};

export default RailContainer;
