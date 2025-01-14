import RailContainer from "~/components/common/RailContainer";
import RailNav from "~/components/common/RailNav";
import { PROJECTS } from "~/constants/projects";
import useScrollSectionIndex from "~/hooks/useScrollSectionIndex";
import NavList from "./NavList";
import ProjectList from "./ProjectList";

const Projects = () => {
  const projects = PROJECTS.sort((a, b) => a.sortOrder - b.sortOrder);
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
