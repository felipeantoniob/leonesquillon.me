import leonLogoSvg from "~/assets/leon-logo-white.svg";
import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import { cn } from "~/lib/utils";

const SECTION = ["Introduction", "Experience", "Bio"] as const;

interface DesktopNavListProps {
  selectedSectionIndex: number;
  scrollToSection: (index: number) => void;
}

const DesktopNavList = ({
  selectedSectionIndex,
  scrollToSection,
}: DesktopNavListProps) => {
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
              onClick={() => scrollToSection(index)}
              key={section}
              className="w-full"
            >
              <p
                className={cn(
                  "text-left font-sans text-base font-medium text-muted-foreground",
                  index === selectedSectionIndex && "text-foreground",
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
