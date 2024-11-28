import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { ProjectsProps } from "./types";
import { ProjectsView } from "./view";

type ComponentType = React.FC<ProjectsProps>;
export const Projects: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);

  return <ProjectsView theme={theme} />;
};
