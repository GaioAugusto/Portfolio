import { Theme } from "../../../../styles/theme";
import { Project } from "../../types";

export interface ProjectCardProps {
  key: number;
  project: Project;
  theme: Theme;
}
export interface ProjectCardViewProps {
  theme: Theme;
  project: Project;
}
