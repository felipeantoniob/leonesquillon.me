import { useState } from "react";

import type { Project } from "@leon/cms/types";

import ContentContainer from "~/components/common/ContentContainer";
import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import useScrollPositionIndex from "~/hooks/useScrollPositionIndex";
import NavList from "./NavList";
import ProjectList from "./ProjectList";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const containerRef = useScrollPositionIndex(projects, setActiveProjectIndex);

  return (
    <>
      <ContentContainer className="border-x">
        <RailContainer>
          <RailNav href="/work" isActive>
            WORK
          </RailNav>
          <NavList
            projects={projects}
            activeProjectIndex={activeProjectIndex}
            containerRef={containerRef}
          />
        </RailContainer>
        <ProjectList projects={projects} containerRef={containerRef} />
      </ContentContainer>
    </>
  );
};

export default Projects;
