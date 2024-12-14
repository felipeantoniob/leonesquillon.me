import { PortableText } from "@portabletext/react";

import type { Bio } from "@leon/cms/types";

interface BioSectionProps {
  bio: Bio;
  bioImageUrl: string | null;
}

const BioSection = ({ bio, bioImageUrl }: BioSectionProps) => {
  return (
    <div className="flex max-w-screen-lg flex-col gap-10 px-10 pt-16">
      <img
        src={bioImageUrl ?? ""}
        className="aspect-[560/315] w-full bg-gray-500 object-contain"
      />
      <div className="font-sans font-medium text-white">
        {/* @ts-expect-error TODO */}
        <PortableText value={bio.bioContent} />
      </div>
    </div>
  );
};

export default BioSection;
