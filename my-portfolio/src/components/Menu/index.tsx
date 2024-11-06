import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import useClientLocale from "../../utilities/useClientLocale";
import { MenuItem, MenuProps } from "./types";
import { MenuView } from "./view";

type ComponentType = React.FC<MenuProps>;
export const Menu: ComponentType = () => {
  const { commonLocale } = useClientLocale();

  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);

  const menuItems: MenuItem[] = [
    { label: commonLocale.get("home"), href: "#home" },
    { label: commonLocale.get("about"), href: "#about" },
    { label: commonLocale.get("projects"), href: "#projects" },
    { label: commonLocale.get("experience"), href: "#experience" },
    { label: commonLocale.get("contact"), href: "#contact" },
  ];

  return <MenuView menuItems={menuItems} theme={theme} />;
};
