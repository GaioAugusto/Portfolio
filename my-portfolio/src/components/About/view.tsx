import { AboutViewProps } from "./types";
import dogbottle from "../../assets/images/dogbottle.jpeg";
import listOfSkills from "./utilities/listOfSkills";
import useClientLocale from "../../utilities/useClientLocale";

type ComponentType = React.FC<AboutViewProps>;
export const AboutView: ComponentType = ({ theme }) => {
  const { commonLocale, templatesLocale } = useClientLocale();

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-12 lg:px-24 ${theme.background}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:space-x-20">
        <div className="flex-1">
          <h2 className={`text-4xl ${theme.text} font-bold mb-6`}>
            {commonLocale.get("about")}
          </h2>
          <p className={`mb-4 ${theme.text} leading-relaxed`}>
            {templatesLocale.get("introduction")}
          </p>

          <ul className="grid grid-cols-2 gap-4 text-sm text-gray-400">
            {listOfSkills().map((item) => (
              <h1 className={`${theme.selected_text}`}>{item}</h1>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={dogbottle}
            alt="Profile"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
