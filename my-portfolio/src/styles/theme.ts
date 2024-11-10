export interface Theme {
  background: string;
  hover: string;
  selected_bg: string;
  selected_text: string;
  text: string;
  card_background: string;
  card_background_closed: string;
}

export const lightTheme: Theme = {
  background: "bg-gray-200",
  card_background: "bg-gray-200", // Background when accordion is open
  card_background_closed: "bg-gray-300", // Background when accordion is closed
  hover: "hover:text-blue-500",
  selected_bg: "bg-blue-500",
  selected_text: "text-blue-500",
  text: "text-gray-900",
};

export const darkTheme: Theme = {
  background: "bg-gray-900",
  card_background: "bg-gray-800", // Dark background for accordion open
  card_background_closed: "bg-gray-700", // Dark background for accordion closed
  hover: "hover:text-yellow-400",
  selected_bg: "bg-yellow-500",
  selected_text: "text-yellow-500",
  text: "text-white",
};

export const getTheme = (isDarkMode: boolean): Theme =>
  isDarkMode ? darkTheme : lightTheme;
