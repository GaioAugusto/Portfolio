import { IconType } from "react-icons";
import { Theme } from "../../styles/theme";

export interface socialMedia {
  name: string;
  icon: IconType;
  url: string;
}
export interface FooterProps {}
export interface FooterViewProps {
  socialLinks: socialMedia[];
  theme: Theme;
  sendData: (data: ContactForm) => Promise<void>;
  handleSubmit: (data: ContactForm) => void
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
