import { useDarkMode } from "../../contexts/DarkModeContext";
import { useLocale } from "../../contexts/Locale";
import { getTheme } from "../../styles/theme";
import { AboutProps } from "./types";
import { AboutView } from "./view";

type ComponentType = React.FC<AboutProps>;
export const About: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);

  const { locale } = useLocale();

  const handleDownload = () => {
    const link = document.createElement("a");
    if (locale === "pt-BR") {
      link.href = `${process.env.PUBLIC_URL}/curriculo.pdf`;
      link.download = "GaioSantos_Curriculo.pdf";
    } else {
      link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
      link.download = "GaioSantos_Resume.pdf";
    }
    link.click();
  };

  return <AboutView theme={theme} handleDownload={handleDownload} />;
};
