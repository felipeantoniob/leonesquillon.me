import { useState } from "react";

import type { Bio, Experience } from "@leon/cms/types";

import leonLogoSvg from "~/assets/leon-logo-white.svg";
import { cn } from "~/lib/utils";
import ContentContainer from "../common/ContentContainer";
import RailContainer from "../common/RailContainer";
import RailNav from "../common/RailNav";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import IntroductionSection from "./IntroductionSection";

type Section = (typeof SECTION)[number];

const SECTION = ["Introduction", "Experience", "Bio"] as const;

interface HomeProps {
  bio: Bio;
  experience: Experience[];
  bioImageUrl: string | null;
}

const Home = ({ bio, experience, bioImageUrl }: HomeProps) => {
  const [selectedSection, setSelectedSection] =
    useState<Section>("Introduction");

  return (
    <>
      <ContentContainer className="min-h-screen flex-col border-r">
        <RailContainer>
          <RailNav href="/" isActive className="hidden flex-row gap-4 lg:flex">
            <img
              src={leonLogoSvg.src}
              alt="logo"
              width="24"
              height="24"
              className="max-w-fit"
            />
            LEON ESQUILLON
          </RailNav>
          <div className={cn("mt-10 flex w-full flex-col items-start gap-5")}>
            {SECTION.map((section) => {
              return (
                <button
                  onClick={() => setSelectedSection(section)}
                  key={section}
                  className="w-full"
                >
                  <p
                    className={cn(
                      "text-left font-sans text-base font-medium text-[#444]",
                      section === selectedSection && "text-white",
                    )}
                  >
                    {section}
                  </p>
                </button>
              );
            })}
          </div>
        </RailContainer>
        <div className="flex max-h-screen w-full flex-col items-center gap-96 px-4 pb-40 pt-8 lg:overflow-scroll lg:pt-20">
          <IntroductionSection />
          <ExperienceSection experience={experience} />
          <BioSection bio={bio} bioImageUrl={bioImageUrl} />
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
