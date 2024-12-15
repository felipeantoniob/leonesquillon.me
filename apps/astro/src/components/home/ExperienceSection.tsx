import type { Experience } from "@leon/cms/types";

import { cn } from "~/lib/utils";

const StepCircle = ({ isSelected }: { isSelected: boolean }) => (
  <div className="relative h-10 max-h-10 w-10 max-w-10">
    <div
      className={cn(
        "flex h-10 max-h-10 w-10 max-w-10 flex-1 rounded-full border-2 border-[#454545] bg-[#3d3d3d]",
        isSelected && "border-[#4379F3] bg-[#4379F3]",
      )}
    />
    <div
      className={cn(
        "absolute inset-0 m-auto h-3 w-3 rounded-full bg-[#5d5d5d]",
        isSelected && "bg-white",
      )}
    />
  </div>
);

interface ExperienceSectionProps {
  experience: Experience[];
}

const ExperienceSection = ({ experience }: ExperienceSectionProps) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-fit flex-col justify-center">
      {experience.map(({ _id, position, company, period }, index) => (
        <div key={_id} className="flex flex-row gap-4">
          <div className="flex w-10 flex-col items-center">
            <StepCircle isSelected={index === 0} />
            <div
              className={cn(
                "my-1 flex h-full w-[2px] flex-1 rounded-full bg-[#454545]",
                index === experience.length - 1 && "hidden",
              )}
            />
          </div>
          <div className="flex flex-1 flex-col justify-between pb-8 pt-2">
            <p
              className={cn(
                "font-sans text-sm font-semibold text-muted-foreground lg:text-base",
                index === 0 && "text-primary",
              )}
            >
              {position}, {company}
            </p>
            <p
              className={cn(
                "font-sans text-sm font-normal text-muted-foreground/80",
                index === 0 && "text-foreground",
              )}
            >
              {period}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
