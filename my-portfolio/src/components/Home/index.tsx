import { useEffect, useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { HomeProps } from "./types";
import { HomeView } from "./view";
import useClientLocale from "../../utilities/useClientLocale";

type ComponentType = React.FC<HomeProps>;
export const Home: ComponentType = (props) => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const { commonLocale } = useClientLocale();

  const phrases = [
    commonLocale.get("softwareEngineer"),
    commonLocale.get("devFullStack"),
    commonLocale.get("computerEngineer"),
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState({
    opacity: 1,
    transition: "opacity 1s ease-in-out",
  });

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setFadeProp({ opacity: 0, transition: "opacity 1s ease-in-out" });
    }, 2000);

    const changePhraseTimeout = setTimeout(() => {
      setCurrentPhraseIndex((prevIndex) =>
        prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
      );
      setFadeProp({ opacity: 1, transition: "opacity 2s ease-in-out" });
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(changePhraseTimeout);
    };
  }, [currentPhraseIndex]);

  return (
    <HomeView
      next={props.next}
      theme={theme}
      fadeProp={fadeProp}
      phrases={phrases}
      currentPhraseIndex={currentPhraseIndex}
    />
  );
};
