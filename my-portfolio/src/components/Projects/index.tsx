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
  const { templatesLocale } = useLocale();

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
      buttonText: "View Project",
    },
    {
      title: "Parkour Racing Game",
      description:
        "Two player split screen racing game in C, meant to be played on a DE1-SoC board. It uses Speakers for sound effects, VGA monitor with double buffering, and PS2 Keyboard. The documentation on Github explains how to simulate the project",
      imageUrl: parkourScreenshot,
      deployedUrl: "https://github.com/rohan-modi/SplitScreenRacer",
      skills: ["C", "FPGA"],
      buttonText: "View Project",
    },
    // Add more projects as needed
  ];

  return <ProjectsView theme={theme} projects={projects} />;
};
