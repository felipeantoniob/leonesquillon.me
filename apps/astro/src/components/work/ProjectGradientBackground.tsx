import { useStore } from "@nanostores/react";

import { $theme } from "~/store";

interface ProjectGradientBackgroundProps {
  gradients: {
    light: string;
    dark: string;
  };
}
const ProjectGradientBackground = ({
  gradients,
}: ProjectGradientBackgroundProps) => {
  const theme = useStore($theme);

  return (
    <div
      style={{
        background: theme === "dark" ? gradients.dark : gradients.light,
      }}
      className="pointer-events-none absolute inset-0 -z-10 h-screen w-screen "
    />
  );
};

export default ProjectGradientBackground;
