import { useDarkMode } from "../../contexts/DarkModeContext";
import { getTheme } from "../../styles/theme";
import { ContactForm, FooterProps } from "./types";
import { FooterView } from "./view";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type ComponentType = React.FC<FooterProps>;
export const Footer: ComponentType = () => {
  const { isDarkMode } = useDarkMode();
  const theme = getTheme(isDarkMode);
  const socialLinks = [
    {
      name: "linkedin",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/gaioaugusto/",
    },
    { name: "github", icon: FaGithub, url: "https://github.com/GaioAugusto" },
  ];
  
  const sendData = async (data: ContactForm) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error ${response.status}: ${text}`);
      }
  
      const result = await response.text();
      console.log("Success:", result);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  const handleSubmit = (data: ContactForm) => {
    sendData(data);
  }

  return <FooterView socialLinks={socialLinks} theme={theme} sendData={sendData} handleSubmit={handleSubmit}/>;
};
