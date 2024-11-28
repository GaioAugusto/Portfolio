import { useLocale } from "../../contexts/Locale";
import { ProjectsViewProps } from "./types";

type ComponentType = React.FC<ProjectsViewProps>;
export const ProjectsView: ComponentType = ({ theme }) => {
  const { commonLocale } = useLocale();

  return (
    <section
      id="projects"
      className={`py-16 px-6 md:px-12 lg:px-24 ${theme.background} theme-transition`}
    >
      <div className="flex justify-center align-center text-3xl">
        {commonLocale.get("projects")}
      </div>
    </section>
  );
};
