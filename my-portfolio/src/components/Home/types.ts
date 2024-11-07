import { Theme } from "../../styles/theme";

interface FadeProp {
  opacity: number;
  transition: string;
}

export interface HomeProps {
  next: string;
}
export interface HomeViewProps {
  next: string;
  theme: Theme;
  fadeProp: FadeProp;
  phrases: string[];
  currentPhraseIndex: number;
}
