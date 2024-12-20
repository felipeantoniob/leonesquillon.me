import type { Project } from "@leon/cms/types";

import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import useScrollSectionIndex from "~/hooks/useScrollSectionIndex";
import NavList from "./NavList";
import ProjectList from "./ProjectList";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const { scrollContainerRef, selectedSectionIndex, scrollToSection } =
    useScrollSectionIndex(projects);

  return (
    <>
      <RailContainer disableGradient>
        <RailNav href="/work" isActive>
          WORK
        </RailNav>
        <NavList
          projects={projects}
          selectedSectionIndex={selectedSectionIndex}
          scrollToSection={scrollToSection}
        />
      </RailContainer>
      <ProjectList
        projects={projects}
        scrollContainerRef={scrollContainerRef}
      />
    </>
  );
};

export default Projects;
