import { Theme } from "../../styles/theme";

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  deployedUrl?: string;
  githubUrl: string;
  skills: string[];
  buttonText?: string;
  buttonText2?: string;
}

export interface ProjectsProps {}
export interface ProjectsViewProps {
  theme: Theme;
  projects: Project[];
}
