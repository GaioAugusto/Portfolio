import { DarkModeSwitch } from "../DarkModeSwitch";
import { MenuViewProps } from "./types";

type ComponentType = React.FC<MenuViewProps>;
export const MenuView: ComponentType = ({ theme, menuItems }) => {
  return (
    <nav
      className={`${theme.menuBackground} ${theme.text} shadow-md fixed top-0 left-0 w-full z-10 font-sans`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Gaio Santos</div>
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-blue-500 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-4">
          <DarkModeSwitch />
        </div>
      </div>
    </nav>
  );
};