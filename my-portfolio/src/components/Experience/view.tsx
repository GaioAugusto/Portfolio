import { useLocale } from "../../contexts/Locale";
import { Accordion } from "./Accordion";
import { ExperienceViewProps } from "./types";

type ComponentType = React.FC<ExperienceViewProps>;
export const ExperienceView: ComponentType = ({
  theme,
  experiences,
  ...props
}) => {
  const { commonLocale } = useLocale();

  return (
    <section
      id="experience"
      className={`py-10 px-4 sm:px-6 md:px-12 lg:px-24 ${theme.background} theme-transition`}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1
          className={`header ${theme.text} text-center mb-8 sm:text-3xl md:text-7xl`}
        >
          {commonLocale.get("experience")}
        </h1>

        {/* Grid layout: 1 column on mobile, 2 columns on md+ screens */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 md:justify-items-center">
          {" "}
          {experiences.map((experience, index) => (
            <Accordion key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
