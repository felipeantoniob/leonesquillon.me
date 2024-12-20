import type { Bio, Experience } from "@leon/cms/types";

import useScrollSectionIndex from "~/hooks/useScrollSectionIndex";
import ContentContainer from "../common/ContentContainer";
import MobileHeader from "../common/MobileHeader";
import MobileNavList from "../common/MobileNavList";
import BioSection from "./BioSection";
import DesktopNavList from "./DesktopNavList";
import ExperienceSection from "./ExperienceSection";
import IntroductionSection from "./IntroductionSection";

interface HomeProps {
  bio: Bio;
  experience: Experience[];
  bioImageUrl: string | null;
}

const Home = ({ bio, experience, bioImageUrl }: HomeProps) => {
  const { scrollContainerRef, scrollToSection, selectedSectionIndex } =
    useScrollSectionIndex([1, 2, 3]);

  return (
    <>
      <ContentContainer className="h-screen max-h-screen min-h-screen flex-col lg:border-r">
        <MobileHeader title="LEON ESQUILLON" />
        <DesktopNavList
          selectedSectionIndex={selectedSectionIndex}
          scrollToSection={scrollToSection}
        />
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
          <div className="h-full">
            <IntroductionSection />
          </div>
          <div className="h-full">
            <ExperienceSection experience={experience} />
          </div>
          <div className="h-full">
            <BioSection bio={bio} bioImageUrl={bioImageUrl} />
          </div>
        </div>
        <MobileNavList
          selectedSectionIndex={selectedSectionIndex}
          scrollToSection={scrollToSection}
        />
      </ContentContainer>
    </>
  );
};

export default Home;
