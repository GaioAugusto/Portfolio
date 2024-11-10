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
      className={`py-16 px-6 md:px-12 lg:px-24 ${theme.background} transition-colors duration-500 ease-out`}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1
          className={`text-4xl ${theme.text} font-bold mb-4`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "5rem",
            lineHeight: "1.1",
          }}
        >
          {commonLocale.get("experience")}
        </h1>
        <div className="flex flex-row justify-center items-center space-x-8">
          {/* Map over experiences and pass each one to Accordion */}
          {experiences.map((experience, index) => (
            <Accordion key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};
