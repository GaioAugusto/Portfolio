// import { DarkModeSwitch } from "../Switches/DarkModeSwitch";
// import { LanguageSwitch } from "../Switches/LanguageSwitch";
// import { MenuViewProps } from "./types";

// type ComponentType = React.FC<MenuViewProps>;
// export const MenuView: ComponentType = ({ theme, menuItems }) => {
//   return (
//     <nav
//       className={`${theme.background} ${theme.text} shadow-md fixed top-0 left-0 w-full z-10 font-sans transition-colors duration-500 ease-out`}
//     >
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <a href="#home" className="text-2xl font-bold">
//           Gaio Santos
//         </a>{" "}
//         <ul className="hidden md:flex space-x-6">
//           {menuItems.map((item) => (
//             <li key={item.label} className="relative group">
//               <a
//                 href={item.href}
//                 className={`${theme.hover} transition-colors`}
//               >
//                 {item.label}
//               </a>
//               <span
//                 className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme.selected_bg} transition-all duration-500 group-hover:w-full`}
//               ></span>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center space-x-4">
//           <DarkModeSwitch />
//           <LanguageSwitch />
//         </div>
//       </div>
//     </nav>
//   );
// };

import React, { useState } from "react";
import { MenuViewProps } from "./types";
import { DarkModeSwitch } from "../Switches/DarkModeSwitch";
import { LanguageSwitch } from "../Switches/LanguageSwitch";
import { FaBars, FaTimes } from "react-icons/fa";

export const MenuView: React.FC<MenuViewProps> = ({ theme, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`
        ${theme.background} 
        ${theme.text} 
        shadow-md 
        fixed 
        top-0 
        left-0 
        w-full 
        z-10 
        font-sans 
        transition-colors 
        duration-500 
        ease-out
      `}
    >
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <a href="#home" className="text-2xl font-bold">
          Gaio Santos
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.label} className="relative group">
              <a
                href={item.href}
                className={`${theme.hover} transition-colors`}
              >
                {item.label}
              </a>
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 ${theme.selected_bg} transition-all duration-500 group-hover:w-full`}
              />
            </li>
          ))}
        </ul>

        {/* Desktop Switches */}
        <div className="hidden md:flex items-center space-x-4">
          <DarkModeSwitch />
          <LanguageSwitch />
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block ${theme.hover} transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {/* Switches on mobile */}
            <div className="flex items-center space-x-4 mt-4">
              <DarkModeSwitch />
              <LanguageSwitch />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};
