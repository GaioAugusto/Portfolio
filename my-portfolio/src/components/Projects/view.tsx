import { useLocale } from "../../contexts/Locale";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectsViewProps } from "./types";

type ComponentType = React.FC<ProjectsViewProps>;
export const ProjectsView: ComponentType = ({ theme, ...props }) => {
  const { commonLocale } = useLocale();

  return (
    <section
      id="projects"
      className={`flex justify-center py-16 px-6 md:px-12 lg:px-24 ${theme.background} theme-transition`}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1
          className={`header ${theme.text} text-center sm:text-3xl md:text-7xl`}
        >
          {commonLocale.get("projects")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {props.projects.map((project, index) => (
            <ProjectCard key={index} project={project} theme={theme} />
          ))}
        </div>{" "}
      </div>
    </section>
  );
};
