import { Theme } from "../styles/theme";

export const gradientClass = (theme: Theme): string => {
  return theme.background === "bg-gray-200"
    ? "from-blue-400 via-purple-900 to-blue-400"
    : "from-blue-500 via-yellow-500 to-blue-500";
};
