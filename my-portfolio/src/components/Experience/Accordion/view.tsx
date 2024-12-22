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
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {/* Gradient Border */}
      <div
        className={`flex flex-col rounded-lg bg-gradient-to-r ${gradient} p-0.5 shadow-lg`}
      >
        {/* Inner Content */}
        <div className="tab rounded-lg overflow-hidden">
          {/* Accordion Header */}
          <div
            className={`
              tab-label 
              flex 
              justify-between 
              items-center 
              px-4 
              py-3 
              cursor-pointer
              ${open ? theme.card_background : theme.card_background_closed}
            `}
            onClick={toggleAccordion}
          >
            {/* Left: Company Name */}
            <span className={`${theme.text} font-semibold text-lg`}>
              {experience.company}
            </span>

            {/* Right: Duration & Arrow */}
            <div className="flex items-center gap-2">
              <span className={`${theme.text} font-semibold text-lg`}>
                {experience.duration}
              </span>
              <span
                className={`
                  ${theme.selected_text}
                  transform
                  transition-transform
                  duration-300
                  ${open ? "rotate-90" : ""}
                `}
              >
                ❯
              </span>
            </div>
          </div>

          {/* Accordion Content */}
          <div
            className={`
              tab-content
              transition-max-height
              duration-300
              ease-in-out
              ${open ? "max-h-[500px]" : "max-h-0"}
              overflow-hidden
              ${theme.card_background_closed}
              px-6
              py-4
            `}
            style={{
              transition: "max-height 0.35s ease",
              // Only show padding when "open"
              padding: open ? "1rem 1.5rem" : "0",
            }}
          >
            {open && (
              <>
                {/* Text */}
                <p className={`text-sm ${theme.text} mb-4`}>
                  {experience.description}
                </p>
                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {/* Company Logo */}
                {experience.imageUrl && (
                  <img
                    src={experience.imageUrl}
                    alt={`${experience.company} logo`}
                    className="w-full max-w-xs mx-auto mb-4 rounded-md py-5"
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
