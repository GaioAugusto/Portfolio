import { ProjectCardProps } from "./types";
import { ProjectCardView } from "./view";

type ComponentType = React.FC<ProjectCardProps>;
export const ProjectCard: ComponentType = (props) => {
  return <ProjectCardView theme={props.theme} project={props.project} />;
};
