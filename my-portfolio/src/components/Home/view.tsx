// import useClientLocale from "../../utilities/useClientLocale";
// import { ArrowButton } from "../ArrowButton";
// import { HomeViewProps } from "./types";

// type ComponentType = React.FC<HomeViewProps>;
// export const HomeView: ComponentType = ({
//   theme,
//   fadeProp,
//   phrases,
//   currentPhraseIndex,
//   ...props
// }) => {
//   const { commonLocale } = useClientLocale();

//   return (
//     <section
//       id="home"
//       className={`h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 ${theme.background} transition-colors duration-500 ease-out`}
//     >
//       <div className="flex flex-col items-center">
//         <h1
//           className={`text-6xl ${theme.text} font-bold mb-4`}
//           style={{
//             fontFamily: "'Montserrat', sans-serif",
//             fontSize: "11rem",
//             lineHeight: "1.1",
//           }}
//         >
//           Gaio Santos
//         </h1>
//         <div className="flex w-full justify-center">
//           <p
//             className="flex flex-row text-7xl pb-8 w-[80%] whitespace-nowrap gap-4"
//             style={{
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             <span className={`${theme.text}`}>{commonLocale.get("Iam")}</span>
//             <span className={`${theme.selected_text}`} style={{ ...fadeProp }}>
//               {phrases[currentPhraseIndex]}
//             </span>
//           </p>
//         </div>
//       </div>
//       <div className="pt-9">
//         <ArrowButton next={props.next} />
//       </div>
//     </section>
//   );
// };

import React from "react";
import useClientLocale from "../../utilities/useClientLocale";
import { ArrowButton } from "../ArrowButton";
import { HomeViewProps } from "./types";

export const HomeView: React.FC<HomeViewProps> = ({
  theme,
  fadeProp,
  phrases,
  currentPhraseIndex,
  next,
}) => {
  const { commonLocale } = useClientLocale();

  return (
    <section
      id="home"
      // Changed h-screen to min-h-screen for better small-screen handling
      className={`min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-12 lg:px-24 ${theme.background} transition-colors duration-500 ease-out`}
    >
      <div className="flex flex-col items-center">
        {/* Title (responsive sizes) */}
        <h1
          className={`
            text-5xl
            sm:text-7xl 
            md:text-8xl 
            lg:text-9xl 
            xl:text-[10rem] 
            ${theme.text} 
            font-bold 
            mb-4
          `}
          style={{ lineHeight: "1.1", fontFamily: "'Montserrat', sans-serif" }}
        >
          Gaio Santos
        </h1>

        {/* Subheading / Animated text */}
        <div className="flex flex-wrap w-full justify-center">
          <p
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl flex gap-4 pb-8"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className={`${theme.text}`}>{commonLocale.get("Iam")}</span>
            <span className={`${theme.selected_text}`} style={{ ...fadeProp }}>
              {phrases[currentPhraseIndex]}
            </span>
          </p>
        </div>
      </div>

      {/* Arrow Button to scroll to next section */}
      <div className="pt-9">
        <ArrowButton next={next} />
      </div>
    </section>
  );
};
