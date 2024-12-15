import type { Project } from "@leon/cms/types";

import ContentContainer from "~/components/common/ContentContainer";
import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import useScrollSectionIndex from "~/hooks/useScrollSectionIndex";
import MobileHeader from "../common/MobileHeader";
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
      <ContentContainer className="h-screen max-h-screen min-h-screen border-x">
        <MobileHeader title="WORK" />
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
      </ContentContainer>
    </>
  );
};

export default Projects;
