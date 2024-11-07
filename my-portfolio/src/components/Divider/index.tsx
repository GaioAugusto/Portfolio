import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { DividerProps } from "./types";
import { DividerView } from "./view";

type ComponentType = React.FC<DividerProps>;
export const Divider: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  return <DividerView theme={theme} />;
};
