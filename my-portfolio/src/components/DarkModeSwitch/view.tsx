import React from "react";
import { DarkModeSwitchViewProps } from "./types";
import { Switch } from "../Switch";
import { MoonIcon } from "@heroicons/react/16/solid";

type ComponentType = React.FC<DarkModeSwitchViewProps>;
export const DarkModeSwitchView: ComponentType = (props) => {
  return (
    <Switch
      isOn={props.isDarkMode}
      onToggle={props.onToggle}
      onColor="bg-smokedBlue" // Custom color for dark mode
      offColor="bg-lightGray" // Custom color for light mode
      rightIcon={<MoonIcon className="w-5 h-5 text-gray-700" />} // Moon icon for dark mode
    />
  );
};