import type { MutableRefObject } from "react";

import type { Project } from "~/constants/projects";

interface ProjectListProps {
  projects: Project[];
  scrollContainerRef: MutableRefObject<HTMLDivElement | null>;
}

const ProjectList = ({ projects, scrollContainerRef }: ProjectListProps) => {
  return (
    <div
      ref={scrollContainerRef}
      className="flex h-full max-h-screen w-full flex-1 flex-col gap-20 overflow-y-auto px-4 py-8 lg:px-10 lg:py-20"
    >
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            id={project.slug}
            className="flex flex-col gap-5 text-foreground xl:flex-row"
          >
            <div className="flex flex-1 flex-col gap-2">
              <p className="font-serif text-3xl font-medium">{project.title}</p>
              <p className="font-sans text-sm text-foreground">
                {project.period}
              </p>
              <p className="text-medium font-sans text-sm">{project.summary}</p>
            </div>
            <a
              href={`/work/${project.slug}`}
              aria-label={`Link to ${project.title} project`}
              className="z-40 aspect-[429/241] w-full flex-1 overflow-clip bg-gray-700 transition-all hover:rounded-xl"
            >
              <img
                src={project.coverImage.src}
                alt={`${project.title} cover image`}
                className="w-full overflow-hidden object-contain transition-all hover:scale-110 hover:rounded-xl"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
