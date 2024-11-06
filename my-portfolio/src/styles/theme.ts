export interface Theme {
  background: string;
  text: string;
  selected_bg: string;
  selected_text: string;
  menuBackground: string;
  hover: string;
}

export const lightTheme: Theme = {
  background: "bg-white",
  hover: "hover:text-blue-500",
  menuBackground: "bg-white",
  selected_bg: "bg-blue-500",
  selected_text: "text-blue-500",
  text: "text-gray-900",
};

export const darkTheme: Theme = {
  background: "bg-gray-900",
  hover: "hover:text-yellow-400",
  menuBackground: "bg-gray-900",
  selected_bg: "bg-yellow-500",
  selected_text: "text-yellow-500",
  text: "text-white",
};

export const getTheme = (isDarkMode: boolean): Theme =>
  isDarkMode ? darkTheme : lightTheme;
