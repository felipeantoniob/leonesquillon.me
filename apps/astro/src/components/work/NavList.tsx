import type { MutableRefObject } from "react";

import type { Project } from "@leon/cms/types";

import { cn } from "~/lib/utils";

interface NavListProps {
  projects: Project[];
  activeProjectIndex: number;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const NavList = ({
  projects,
  activeProjectIndex,
  containerRef,
}: NavListProps) => {
  containerRef.current?.scrollTo({ behavior: "smooth" });

  const handleClick = (index: number) => {
    const container = containerRef.current;

    if (!container) return;

    const scrollPercentage = index / (projects.length - 1);
    console.log(scrollPercentage);

    const scrollPosition =
      (container.scrollHeight - container.clientHeight) * scrollPercentage;

    container.scrollTo(0, scrollPosition);
  };

  return (
    <div className="mt-10 flex max-w-64 flex-col gap-5">
      {projects.map((project, index) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className={cn(
            "text-left font-sans font-medium text-[#777]",
            index === activeProjectIndex && "text-white",
          )}
        >
          {project.title}
        </button>
      ))}
    </div>
  );
};

export default NavList;
