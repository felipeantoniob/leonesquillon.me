import type { MutableRefObject } from "react";

import leonLogoSvg from "~/assets/leon-logo-white.svg";
import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import { cn } from "~/lib/utils";

const SECTION = ["Introduction", "Experience", "Bio"] as const;

interface DesktopNavListProps {
  selectedSection: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const DesktopNavList = ({
  selectedSection,
  containerRef,
}: DesktopNavListProps) => {
  const handleClick = (index: number) => {
    const container = containerRef.current;

    if (!container) return;

    const scrollPercentage = index / (SECTION.length - 1);

    const scrollPosition =
      (container.scrollHeight - container.clientHeight) * scrollPercentage;

    container.scrollTo({ top: scrollPosition, behavior: "smooth" });
  };

  return (
    <RailContainer disableGradient>
      <RailNav href="/" isActive className="hidden flex-row gap-4 lg:flex">
        <img
          src={leonLogoSvg.src}
          alt="logo"
          width="24"
          height="24"
          className="max-w-fit"
        />
        LEON ESQUILLON
      </RailNav>
      <div className={cn("mt-10 flex w-full flex-col items-start gap-5")}>
        {SECTION.map((section, index) => {
          return (
            <button
              onClick={() => handleClick(index)}
              key={section}
              className="w-full"
            >
              <p
                className={cn(
                  "text-left font-sans text-base font-medium text-[#444]",
                  index === selectedSection && "text-white",
                )}
              >
                {section}
              </p>
            </button>
          );
        })}
      </div>
    </RailContainer>
  );
};

export default DesktopNavList;
