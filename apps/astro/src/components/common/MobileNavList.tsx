import { cn } from "~/lib/utils";

const SECTION = ["INTRODUCTION", "EXPERIENCE", "BIO"];

interface MobileNavListProps {
  selectedSectionIndex: number;
  scrollToSection: (index: number) => void;
}

const MobileNavList = ({
  selectedSectionIndex,
  scrollToSection,
}: MobileNavListProps) => {
  return (
    <div className="flex flex-col gap-2 border-t-[1px] border-[#444] p-4 lg:hidden">
      {SECTION.map((section, index) => (
        <button
          onClick={() => scrollToSection(index)}
          key={section}
          className={cn(
            "text-md font-sans font-semibold text-[#444]",
            index === selectedSectionIndex && "text-white",
          )}
        >
          {section}
        </button>
      ))}
    </div>
  );
};

export default MobileNavList;
