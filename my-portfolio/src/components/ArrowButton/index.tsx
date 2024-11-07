import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { ArrowButtonProps } from "./types";
import { ArrowButtonView } from "./view";

type ComponentType = React.FC<ArrowButtonProps>;
export const ArrowButton: ComponentType = (props) => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  return <ArrowButtonView theme={theme} next={props.next} />;
};
