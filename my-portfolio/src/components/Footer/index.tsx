import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { FooterProps } from "./types";
import { FooterView } from "./view";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type ComponentType = React.FC<FooterProps>;
export const Footer: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const socialLinks = [
    {
      name: "linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/gaioaugusto/",
    },
    { name: "github", icon: FaGithub, url: "https://github.com/GaioAugusto" },
  ];

  return <FooterView socialLinks={socialLinks} theme={theme} />;
};
