import { useDarkMode } from "../../../contexts/DarkModeContext";
import { DarkModeSwitchProps } from "./types";
import { DarkModeSwitchView } from "./view";

type ComponentType = React.FC<DarkModeSwitchProps>;
export const DarkModeSwitch: ComponentType = (props) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <DarkModeSwitchView isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
  );
};
