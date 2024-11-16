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
      className={`h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 ${theme.background} transition-colors duration-500 ease-out`}
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
        <div className="flex w-full justify-center">
          <p
            className="flex flex-row text-7xl pb-8 w-[80%] whitespace-nowrap gap-4"
            style={{
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <span className={`${theme.text}`}>{commonLocale.get("Iam")}</span>
            <span className={`${theme.selected_text}`} style={{ ...fadeProp }}>
              {phrases[currentPhraseIndex]}
            </span>
          </p>
        </div>
      </div>
      <div className="pt-9">
        <ArrowButton next={props.next} />
      </div>
    </section>
  );
};
