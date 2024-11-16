import { AboutViewProps } from "./types";
import profilePic from "../../assets/images/profilePic.jpg";
import listOfSkills from "./utilities/listOfSkills";
import { DocumentTextIcon } from "@heroicons/react/16/solid";
import { useLocale } from "../../contexts/Locale";

type ComponentType = React.FC<AboutViewProps>;
export const AboutView: ComponentType = ({ theme, handleDownload }) => {
  const { commonLocale, templatesLocale } = useLocale();

  return (
    <section
      id="about"
      className={`py-16 px-6 md:px-12 lg:px-24 ${theme.background} transition-colors duration-500 ease-out`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:space-x-12">
        <div className="flex-1">
          <h2 className={`text-4xl ${theme.text} font-bold mb-6`}>
            {commonLocale.get("about")}
          </h2>
          <p className={`mb-4 text-xl ${theme.text} leading-relaxed`}>
            {templatesLocale.get("introduction")}
          </p>

          <ul
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg mb-8 ${theme.text}`}
          >
            {listOfSkills().map((item) => (
              <li
                key={item}
                className="flex items-center"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span className="text-blue-500 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={handleDownload}
            className="mt-6 flex flex-row bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            <span>{commonLocale.get("downloadCV")}</span>
            <DocumentTextIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src={profilePic}
            alt="Profile"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
