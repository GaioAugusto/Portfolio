import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { MenuItem, MenuProps } from "./types";
import { MenuView } from "./view";

const menuItems: MenuItem[] = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Past Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

type ComponentType = React.FC<MenuProps>;
export const Menu: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  return <MenuView menuItems={menuItems} theme={theme} />;
};
