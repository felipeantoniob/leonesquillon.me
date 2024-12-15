import { useState } from "react";

import type { Project } from "@leon/cms/types";

import ContentContainer from "~/components/common/ContentContainer";
import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import useScrollPositionIndex from "~/hooks/useScrollPositionIndex";
import MobileHeader from "../common/MobileHeader";
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
      <ContentContainer className="h-screen max-h-screen min-h-screen border-x">
        <MobileHeader title="WORK" />
        <RailContainer disableGradient>
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
