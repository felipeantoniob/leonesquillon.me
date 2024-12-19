import { useStore } from "@nanostores/react";

import type { Project } from "@leon/cms/types";

import { $theme } from "~/store";

interface ProjectGradientBackgroundProps {
  gradients: Project["gradients"];
}
const ProjectGradientBackground = ({
  gradients,
}: ProjectGradientBackgroundProps) => {
  const theme = useStore($theme);

  return (
    <div
      style={{
        background: theme === "dark" ? gradients.darkMode : gradients.lightMode,
      }}
      className="pointer-events-none absolute inset-0 -z-10 h-screen w-screen "
    />
  );
};

export default ProjectGradientBackground;
