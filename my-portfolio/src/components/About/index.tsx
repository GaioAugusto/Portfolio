import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { AboutProps } from "./types";
import { AboutView } from "./view";

type ComponentType = React.FC<AboutProps>;
export const About: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);

  return <AboutView theme={theme} />;
};
