export interface Theme {
  background: string;
  text: string;
  accent: string;
  menuBackground: string;
}

export const lightTheme: Theme = {
  background: "bg-white",
  text: "text-gray-900",
  accent: "text-blue-500",
  menuBackground: "bg-white",
};

export const darkTheme: Theme = {
  background: "bg-gray-900",
  text: "text-white",
  accent: "text-yellow-500",
  menuBackground: "bg-gray-900",
};

export const getTheme = (isDarkMode: boolean): Theme =>
  isDarkMode ? darkTheme : lightTheme;
