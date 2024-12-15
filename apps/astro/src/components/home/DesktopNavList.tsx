import type { Dispatch, SetStateAction } from "react";

import leonLogoSvg from "~/assets/leon-logo-white.svg";
import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import { cn } from "~/lib/utils";

type Section = (typeof SECTION)[number];

const SECTION = ["Introduction", "Experience", "Bio"] as const;

interface DesktopNavListProps {
  selectedSection: Section;
  setSelectedSection: Dispatch<SetStateAction<Section>>;
}

const DesktopNavList = ({
  selectedSection,
  setSelectedSection,
}: DesktopNavListProps) => (
  <RailContainer>
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
      {SECTION.map((section) => {
        return (
          <button
            onClick={() => setSelectedSection(section)}
            key={section}
            className="w-full"
          >
            <p
              className={cn(
                "text-left font-sans text-base font-medium text-[#444]",
                section === selectedSection && "text-white",
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

export default DesktopNavList;
