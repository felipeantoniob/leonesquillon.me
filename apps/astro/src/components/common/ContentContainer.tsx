import type { PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

const ContentContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col border-border/10 lg:flex-row",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
