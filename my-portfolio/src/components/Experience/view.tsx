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
        <h1 className={`header ${theme.text}`}>
          {commonLocale.get("experience")}
        </h1>

        <div className="flex flex-row justify-center items-stretch space-x-8 h-full">
          {/* Map over experiences and pass each one to Accordion */}
          {experiences.map((experience, index) => (
            <Accordion key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
