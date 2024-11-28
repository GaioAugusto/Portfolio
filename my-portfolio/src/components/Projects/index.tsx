import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { Project, ProjectsProps } from "./types";
import { ProjectsView } from "./view";
import parkourScreenshot from "../../assets/images/parkourScreenshot.png";
import currencyConverterScreenshot from "../../assets/images/currencyConverterScreenshot.png";
import { useLocale } from "../../contexts/Locale";

type ComponentType = React.FC<ProjectsProps>;
export const Projects: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const { commonLocale, templatesLocale } = useLocale();

  const projects: Project[] = [
    {
      title: "Currency Converter",
      description: templatesLocale.get("currencyConverterDescription"),
      imageUrl: currencyConverterScreenshot,
      deployedUrl: "https://currency-converter-front-one.vercel.app/",
      skills: [
        "Python",
        "Flask",
        "PostgreSQL",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Docker",
        "Git",
        "Automation",
        "Scheduling",
      ],
      buttonText: commonLocale.get("viewProject"),
    },
    {
      title: "Parkour Racing Game",
      description: templatesLocale.get("parkourGameDescription"),
      imageUrl: parkourScreenshot,
      deployedUrl: "https://github.com/rohan-modi/SplitScreenRacer",
      skills: ["C", "FPGA"],
      buttonText: commonLocale.get("viewProject"),
    },
    // Add more projects as needed
  ];

  return <ProjectsView theme={theme} projects={projects} />;
};
