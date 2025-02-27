import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { Project, ProjectsProps } from "./types";
import { ProjectsView } from "./view";
import parkourScreenshot from "../../assets/images/parkourScreenshot.png";
import currencyConverterScreenshot from "../../assets/images/currencyConverterScreenshot.png";
import simulatorScreenshot from "../../assets/images/simulatorScreenshot.webp";
import brasaWebsiteScreenshot from "../../assets/images/brasaWebsiteScreenshot.png";
import { useLocale } from "../../contexts/Locale";
import { useEffect } from "react";
import AOS from "aos";

type ComponentType = React.FC<ProjectsProps>;
export const Projects: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const { commonLocale, templatesLocale } = useLocale();

  useEffect(()=>{
    AOS.refresh();
  }, [isDarkMode]);

  const projects: Project[] = [
    {
      title: "Currency Converter",
      description: templatesLocale.get("currencyConverterDescription"),
      imageUrl: currencyConverterScreenshot,
      deployedUrl: "https://currency-converter-front-one.vercel.app/",
      githubUrl: "https://github.com/GaioAugusto/currencyConverter",
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
      buttonText: commonLocale.get("deployed"),
      buttonText2: commonLocale.get("github"),
    },
    {
      title: "BRASA UofT Website",
      description: templatesLocale.get("brasaWebsiteDescription"),
      imageUrl: brasaWebsiteScreenshot,
      deployedUrl: "https://brasa-website.vercel.app/",
      githubUrl: "https://github.com/GaioAugusto/brasa-website",
      skills: ["Typescript", "React", "Node.js", "Express.js", "TailwindCSS"],
      buttonText: commonLocale.get("deployed"),
      buttonText2: commonLocale.get("github"),
    },
    {
      title: "Parkour Racing Game",
      description: templatesLocale.get("parkourGameDescription"),
      imageUrl: parkourScreenshot,
      deployedUrl:
        "https://drive.google.com/file/d/1k5xWr4A1fzrSyDHc-mw7_wvZRGdILH_B/view?usp=sharing",
      githubUrl: "https://github.com/rohan-modi/SplitScreenRacer",
      skills: ["C", "FPGA"],
      buttonText: commonLocale.get("video"),
      buttonText2: commonLocale.get("github"),
    },
    {
      title: "2D Collision simulator",
      description: templatesLocale.get("simulatorDescription"),
      imageUrl: simulatorScreenshot,
      deployedUrl:
        "https://drive.google.com/file/d/1UFXVXencTqUmVYphpS7v8KLf5pLfLy4h/view?usp=sharing",
      githubUrl: "https://github.com/GaioAugusto/2d-Collision-Simulator",
      skills: ["C++"],
      buttonText: commonLocale.get("video"),
      buttonText2: commonLocale.get("github"),
    },
  ];

  return <ProjectsView theme={theme} projects={projects} />;
};
