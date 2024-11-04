import { Theme } from "../../styles/theme";

export interface MenuProps {}

export interface MenuViewProps {
  menuItems: MenuItem[];
  theme: Theme;
}

export interface MenuItem {
  label: string;
  href: string;
}
