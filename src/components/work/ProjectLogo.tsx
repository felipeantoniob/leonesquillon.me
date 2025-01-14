import type { ReactNode } from "react";
import { useStore } from "@nanostores/react";

import { $theme } from "~/store";

interface ProjectLogoProps {
  darkModeLogo: ReactNode;
  lightModeLogo: ReactNode;
}

const ProjectLogo = ({ darkModeLogo, lightModeLogo }: ProjectLogoProps) => {
  const theme = useStore($theme);

  return <>{theme === "dark" ? darkModeLogo : lightModeLogo}</>;
};

export default ProjectLogo;
