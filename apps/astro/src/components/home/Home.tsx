import { useState } from "react";

import type { Bio, Experience } from "@leon/cms/types";

import useScrollPositionIndex from "~/hooks/useScrollPositionIndex";
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
  const [selectedSection, setSelectedSection] = useState(0);

  const containerRef = useScrollPositionIndex([1, 2, 3], setSelectedSection);

  return (
    <>
      <ContentContainer className="h-screen max-h-screen min-h-screen flex-col border-r">
        <MobileHeader title="LEON ESQUILLON" />
        <DesktopNavList
          selectedSection={selectedSection}
          containerRef={containerRef}
        />
        <div ref={containerRef} className="flex-1 overflow-y-auto">
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
        {/* <div className="flex flex-1 overflow-y-auto w-full flex-col items-center gap-48 lg:gap-96 lg:overflow-scroll "> */}
        {/*   <div className="h-full bg-purple-800 flex-col items-center  px-4 pb-10 lg:pb-40 pt-8 lg:pt-20"> */}
        {/*     <IntroductionSection /> */}
        {/*     <ExperienceSection experience={experience} /> */}
        {/*     <BioSection bio={bio} bioImageUrl={bioImageUrl} /> */}
        {/*   </div> */}
        {/* </div> */}

        <MobileNavList
          selectedSection={selectedSection}
          containerRef={containerRef}
        />
      </ContentContainer>
    </>
  );
};

export default Home;
