import { SwitchProps } from "./types";

type ComponentType = React.FC<SwitchProps>;
export const Switch: ComponentType = ({
  isOn,
  onToggle,
  onColor = "bg-green-500",
  offColor = "bg-gray-400",
  leftLabel,
  rightLabel,
  rightIcon,
}) => {
  return (
    <div className="flex items-center space-x-2">
      {/* Left label (Off) */}
      {leftLabel && <span className="text-sm text-gray-700">{leftLabel}</span>}
      {/* Switch button */}
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 ${
          isOn ? onColor : offColor
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
            isOn ? "translate-x-6" : "translate-x-0"
          } transition-transform`}
        ></div>
      </button>
      {/* Right label (On) */}
      {rightLabel && (
        <span className="text-sm text-gray-700">{rightLabel}</span>
      )}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </div>
  );
};
