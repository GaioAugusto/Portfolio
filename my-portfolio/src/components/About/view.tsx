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
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:space-x-16">
        <div className="flex-1 text-left">
          <h2
            className={`text-5xl ${theme.text} font-bold mb-4`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {commonLocale.get("about")}
          </h2>
          <p
            className={`text-lg ${theme.text} mb-6 leading-relaxed`}
            style={{ fontFamily: "'Poppins', sans-serif", maxWidth: "45ch" }}
          >
            {templatesLocale.get("introduction")}
          </p>

          <ul className="grid grid-cols-2 gap-4 text-lg mb-8">
            {listOfSkills().map((item) => (
              <li
                key={item}
                className="text-yellow-400 font-semibold"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            Download CV
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 md:mt-0 flex justify-center">
          <img
            src={dogbottle}
            alt="Profile"
            className="rounded-lg shadow-lg max-w-xs w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
