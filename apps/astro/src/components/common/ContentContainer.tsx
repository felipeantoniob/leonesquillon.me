import type { PropsWithChildren } from "react";

import { cn } from "~/utils/cn";

const ContentContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col border-[#222] lg:flex-row",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
