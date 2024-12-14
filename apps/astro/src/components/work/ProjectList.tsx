import type { MutableRefObject } from "react";

import type { Project } from "@leon/cms/types";

import { urlFor } from "~/lib/sanity";

interface ProjectListProps {
  projects: Project[];
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

const ProjectList = ({ projects, containerRef }: ProjectListProps) => {
  return (
    <div
      ref={containerRef}
      className="flex h-full max-h-screen w-full flex-col gap-20 overflow-y-auto px-4 py-8 lg:px-10 lg:py-20"
    >
      {projects.map((project, i) => {
        return (
          <div
            key={i}
            id={project.slug.current}
            className="flex flex-col gap-5 text-white"
          >
            <div className="flex flex-col gap-2">
              <p className="font-serif text-3xl font-medium">{project.title}</p>
              <p className="font-sans text-sm text-[#F6F6F6]">
                {project.period}
              </p>
              <p className="text-medium font-sans text-sm">{project.summary}</p>
            </div>
            <a
              href={`/work/${project.slug.current}`}
              className="z-40 aspect-[693/338] w-full bg-gray-700"
            >
              <img
                src={urlFor(project.coverImage ?? "").url()}
                className="w-fit object-contain"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
