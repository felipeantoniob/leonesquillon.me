import type { Project } from "~/constants/projects";
import { cn } from "~/lib/utils";

interface NavListProps {
  projects: Project[];
  selectedSectionIndex: number;
  scrollToSection: (index: number) => void;
}

const NavList = ({
  projects,
  selectedSectionIndex,
  scrollToSection,
}: NavListProps) => {
  return (
    <div className="mt-10 flex max-w-64 flex-col gap-5">
      {projects.map((project, index) => (
        <button
          key={index}
          onClick={() => scrollToSection(index)}
          className={cn(
            "text-left font-sans font-medium uppercase text-muted-foreground transition-all hover:text-foreground",
            index === selectedSectionIndex && "text-foreground",
          )}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
};

export default NavList;
