import { useDarkMode } from "../../contexts/DarkModeContext";
import { useLocale } from "../../contexts/Locale";
import { getTheme } from "../../styles/theme";
import { ExperienceProps } from "./types";
import { ExperienceView } from "./view";

type ComponentType = React.FC<ExperienceProps>;
export const Experience: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const { templatesLocale } = useLocale();

  const experiences = [
    {
      position: templatesLocale.get("btgPosition"),
      company: "BTG Pactual",
      skills: ["Typescript", "React.Js", "Jira", "Azure DevOps"],
      duration: "May 2024 - Aug 2024",
      description: `${templatesLocale.get("btg")} ${templatesLocale.get(
        "btgRole"
      )}`,
      imageUrl: `${process.env.PUBLIC_URL}/btgLogo.png`,
    },
    {
      position: templatesLocale.get("abixPosition"),
      company: "Abix Tecnologia LTDA",
      skills: ["Javascript", "Next.Js", "Postman", "GitLab"],
      duration: "May 2023 - Aug 2023",
      description: `${templatesLocale.get("abix")} ${templatesLocale.get(
        "abixRole"
      )}`,
      imageUrl: `${process.env.PUBLIC_URL}/abixLogo.png`,
    },
  ];

  return <ExperienceView theme={theme} experiences={experiences} />;
};
