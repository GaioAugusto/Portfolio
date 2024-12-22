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
      className={`py-16 px-6 md:px-12 lg:px-24 ${theme.background} theme-transition`}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1 className={`header ${theme.text} text-center mb-8`}>
          {commonLocale.get("experience")}
        </h1>

        {/* Grid layout: 1 column on mobile, 2 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {experiences.map((experience, index) => (
            <Accordion key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
