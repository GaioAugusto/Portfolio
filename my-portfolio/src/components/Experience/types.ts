import { Theme } from "../../styles/theme";

export interface Experience {
  position: string;
  company: string;
  skills: string[];
  duration: string;
  description: string;
  imageUrl: string;
}

export interface ExperienceProps {}
export interface ExperienceViewProps {
  theme: Theme;
  experiences: Experience[];
}
