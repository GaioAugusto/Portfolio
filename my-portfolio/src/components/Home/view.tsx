import useClientLocale from "../../utilities/useClientLocale";
import { ArrowButton } from "../ArrowButton";
import { HomeViewProps } from "./types";

type ComponentType = React.FC<HomeViewProps>;
export const HomeView: ComponentType = ({
  theme,
  fadeProp,
  phrases,
  currentPhraseIndex,
  ...props
}) => {
  const { commonLocale } = useClientLocale();

  return (
    <section
      id="home"
      className={`h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 ${theme.background}`}
    >
      <div className="flex flex-col items-center">
        <h1
          className={`text-6xl ${theme.text} font-bold mb-4`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "11rem",
            lineHeight: "1.1",
          }}
        >
          Gaio Santos
        </h1>
        <p
          className="text-2xl mb-8"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "4.5rem",
            ...fadeProp,
          }}
        >
          <span className={`${theme.text}`}>{commonLocale.get("Iam")}</span>
          <span className={`${theme.selected_text}`}>
            {phrases[currentPhraseIndex]}
          </span>
        </p>
      </div>
      <div className="pt-9">
        <ArrowButton next={props.next} />
      </div>
    </section>
  );
};
