import { DarkModeSwitchProps } from "./types";
import { DarkModeSwitchView } from "./view";
import { useDarkMode } from "../../contexts/DarkModeContext";

type ComponentType = React.FC<DarkModeSwitchProps>;
export const DarkModeSwitch: ComponentType = (props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeSwitchView isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
  );
};
