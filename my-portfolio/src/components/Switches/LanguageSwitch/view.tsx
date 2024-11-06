import { useLocale } from "../../../contexts/Locale";
import { LanguageSwitchViewProps } from "./types";

type ComponentType = React.FC<LanguageSwitchViewProps>;
export const LanguageSwitchView: ComponentType = ({ theme }) => {
  const { locale, changeLocale } = useLocale();

  return (
    <div className={`flex space-x-1 ${theme.text}`}>
      <button
        onClick={() => changeLocale("pt-BR")}
        className={`relative px-2 ${
          locale === "pt-BR" ? `${theme.selected_text} font-bold` : ""
        }`}
      >
        PT
        {locale === "pt-BR" && (
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 ${theme.selected_bg} rounded`}
          ></span>
        )}
      </button>
      <button
        onClick={() => changeLocale("en-US")}
        className={`relative px-2 ${
          locale === "en-US" ? `${theme.selected_text} font-bold` : ""
        }`}
      >
        EN
        {locale === "en-US" && (
          <span
            className={`absolute bottom-0 left-0 w-full h-0.5 ${theme.selected_bg} rounded`}
          ></span>
        )}
      </button>
    </div>
  );
};
