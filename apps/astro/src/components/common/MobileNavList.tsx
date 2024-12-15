import type { MutableRefObject } from "react";

import { cn } from "~/lib/utils";

const SECTION = ["INTRODUCTION", "EXPERIENCE", "BIO"];

interface MobileNavListProps {
  selectedSection: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const MobileNavList = ({
  selectedSection,
  containerRef,
}: MobileNavListProps) => {
  const handleClick = (index: number) => {
    const container = containerRef.current;

    if (!container) return;

    const scrollPercentage = index / (SECTION.length - 1);

    const scrollPosition =
      (container.scrollHeight - container.clientHeight) * scrollPercentage;

    container.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-2 border-t-[1px] border-[#444] p-4 lg:hidden">
      {SECTION.map((section, index) => (
        <button
          onClick={() => handleClick(index)}
          key={section}
          className={cn(
            "text-md font-sans font-semibold text-[#444]",
            index === selectedSection && "text-white",
          )}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default MobileNavList;
