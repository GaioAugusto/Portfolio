import { useDarkMode } from "../../../contexts/DarkModeContext";
import { getTheme } from "../../../styles/theme";
import { LanguageSwitchProps } from "./types";
import { LanguageSwitchView } from "./view";

type ComponentType = React.FC<LanguageSwitchProps>;
export const LanguageSwitch: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);

  return <LanguageSwitchView theme={theme} />;
};
