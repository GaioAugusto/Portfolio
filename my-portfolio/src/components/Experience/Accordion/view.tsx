import { gradientClass } from "../../../utilities/gradientClass";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import { getTheme } from "../../../styles/theme";
import { AccordionViewProps } from "./types";
import { useState } from "react";

type ComponentType = React.FC<AccordionViewProps>;

export const AccordionView: ComponentType = ({ experience }) => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const gradient = gradientClass(theme);
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className="relative w-full md:w-1/2 mb-4 h-full">
      {/* Gradient Border Effect */}
      <div
        className={`flex flex-col h-full rounded-lg bg-gradient-to-r ${gradient} p-0.5 shadow-lg`}
      >
        {/* Inner Content with Solid Background */}
        <div className="tab rounded-lg overflow-hidden h-full">
          {/* Accordion Header */}
          <div
            className={`tab-label flex justify-between items-center px-4 py-3 cursor-pointer ${
              open
                ? `${theme.card_background}`
                : `${theme.card_background_closed}`
            }`}
            onClick={toggleAccordion}
          >
            <span className={`${theme.text} font-semibold text-lg`}>
              {experience.company}
            </span>
            <span
              className={`${
                theme.selected_text
              } transform transition-transform duration-300 ${
                open ? "rotate-90" : ""
              }`}
            >
              ❯
            </span>
          </div>

          {/* Accordion Content */}
          <div
            className={`tab-content transition-max-height duration-300 ease-in-out ${
              open ? "max-h-[500px]" : "max-h-0"
            } overflow-hidden ${theme.card_background_closed} px-6 py-4`}
            style={{
              transition: "max-height 0.35s ease",
              padding: open ? "1rem 1.5rem" : "0",
            }}
          >
            {/* Text Content */}
            {open && (
              <p className={`text-sm ${theme.text} mb-4`}>
                {experience.description}
              </p>
            )}
            {/* Skills Section */}
            {open && (
              <div className="details flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`bg-blue-500 text-white text-sm px-3 py-1 rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
            {/* Company Logo */}
            {experience.imageUrl && (
              <img
                src={experience.imageUrl}
                alt={`${experience.company} logo`}
                className="w-full max-w-xs mx-auto mb-4 rounded-md py-5"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
