import useScrollSectionIndex from "~/hooks/useScrollSectionIndex";
import MobileNavList from "../common/MobileNavList";
import BioSection from "./BioSection";
import DesktopNavList from "./DesktopNavList";
import ExperienceSection from "./ExperienceSection";
import IntroductionSection from "./IntroductionSection";

const Home = () => {
  const { scrollContainerRef, scrollToSection, selectedSectionIndex } =
    useScrollSectionIndex([1, 2, 3]);

  return (
    <>
      <DesktopNavList
        selectedSectionIndex={selectedSectionIndex}
        scrollToSection={scrollToSection}
      />
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <div className="h-full">
          <IntroductionSection />
        </div>
        <div className="h-full">
          <ExperienceSection />
        </div>
        <div className="h-full">
          <BioSection />
        </div>
      </div>
      <MobileNavList
        selectedSectionIndex={selectedSectionIndex}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Home;
