import { PortableText } from "@portabletext/react";

import type { Bio } from "@leon/cms/types";

interface BioSectionProps {
  bio: Bio;
  bioImageUrl: string | null;
}

const BioSection = ({ bio, bioImageUrl }: BioSectionProps) => {
  return (
    <div className="flex h-full min-h-fit max-w-screen-lg flex-col justify-center gap-4 p-4 lg:gap-10 lg:p-8">
      <img
        src={bioImageUrl ?? ""}
        alt="Picture of Leon Esquillon"
        className="mx-auto aspect-[560/315] w-full max-w-screen-sm bg-gray-700 object-contain lg:max-w-screen-xl"
      />
      <div className="flex flex-col gap-1 font-sans text-sm font-medium text-foreground">
        {/* @ts-expect-error TODO */}
        <PortableText value={bio.bioContent} />
      </div>
    </div>
  );
};

export default BioSection;
