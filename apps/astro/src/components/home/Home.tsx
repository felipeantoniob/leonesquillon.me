import { useState } from "react";

import type { Bio, Experience } from "@leon/cms/types";

import leonLogoSvg from "~/assets/leon-logo-white.svg";
import { cn } from "~/utils/cn";
import ContentContainer from "../common/ContentContainer";
import RailContainer from "../common/RailContainer";
import RailNav from "../common/RailNav";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import IntroductionSection from "./IntroductionSection";

type Section = "Introduction" | "Experience" | "Bio";

const sections = {
  Introduction: {
    label: "Introduction",
  },
  Experience: {
    label: "Experience",
  },
  Bio: {
    label: "Bio",
  },
} as const;

interface HomeProps {
  bio: Bio;
  experience: Experience[];
  bioImageUrl: string | null | undefined;
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
            {Object.keys(sections).map((sectionKey) => {
              const section = sections[sectionKey as Section];
              return (
                <button
                  onClick={() => setSelectedSection(sectionKey as Section)}
                  key={sectionKey}
                  className="w-full"
                >
                  <p
                    className={cn(
                      "text-left font-sans text-base font-medium text-[#444]",
                      sectionKey === selectedSection && "text-white",
                    )}
                  >
                    {section.label}
                  </p>
                </button>
              );
            })}
          </div>
        </RailContainer>
        <div className="flex max-h-screen w-full flex-col items-center gap-10 px-4 pb-40 pt-8 lg:overflow-scroll lg:pt-20">
          {selectedSection === "Experience" && (
            <ExperienceSection experience={experience} />
          )}
          {selectedSection === "Bio" && (
            <BioSection bio={bio} bioImageUrl={bioImageUrl} />
          )}
          {selectedSection === "Introduction" && <IntroductionSection />}
        </div>
      </ContentContainer>
    </>
  );
};

export default Home;
