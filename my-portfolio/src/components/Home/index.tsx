// import { useEffect, useState } from "react";
// import { useDarkMode } from "../../contexts/DarkModeContext";
// import { getTheme } from "../../styles/theme";
// import { HomeProps } from "./types";
// import { HomeView } from "./view";

// const phrases = [
//   "Software Engineer",
//   "Full-Stack Developer",
//   "Computer Engineer",
// ];

// type ComponentType = React.FC<HomeProps>;
// export const Home: ComponentType = () => {
//   const { isDarkMode } = useDarkMode();
//   const theme = getTheme(isDarkMode);

//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [fadeProp, setFadeProp] = useState({
//     opacity: 1,
//     transition: "opacity 1s ease-in-out",
//   });

//   useEffect(() => {
//     const fadeOutTimeout = setTimeout(() => {
//       setFadeProp({ opacity: 0, transition: "opacity 1s ease-in-out" });
//     }, 2000); // Start fade out after 2 seconds

//     const changePhraseTimeout = setTimeout(() => {
//       setCurrentPhraseIndex((prevIndex) =>
//         prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
//       );
//       setFadeProp({ opacity: 1, transition: "opacity 2s ease-in-out" }); // Fade in new phrase
//     }, 3000); // Change phrase after 3 seconds

//     return () => {
//       clearTimeout(fadeOutTimeout);
//       clearTimeout(changePhraseTimeout);
//     };
//   }, [currentPhraseIndex]);

//   return (
//     <HomeView
//       theme={theme}
//       fadeProp={fadeProp}
//       phrases={phrases}
//       currentPhraseIndex={currentPhraseIndex}
//     />
//   );
// };

import { useEffect, useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { HomeProps } from "./types";
import { HomeView } from "./view";

const phrases = [
  "Software Engineer",
  "Full-Stack Developer",
  "Computer Engineer",
];

type ComponentType = React.FC<HomeProps>;
export const Home: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);

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
      theme={theme}
      fadeProp={fadeProp}
      phrases={phrases}
      currentPhraseIndex={currentPhraseIndex}
    />
  );
};
