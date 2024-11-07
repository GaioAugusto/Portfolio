import { Theme } from "../../styles/theme";

interface FadeProp {
  opacity: number;
  transition: string;
}

export interface HomeProps {}
export interface HomeViewProps {
  theme: Theme;
  fadeProp: FadeProp;
  phrases: string[];
  currentPhraseIndex: number;
}
