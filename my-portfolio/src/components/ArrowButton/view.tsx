import { gradientClass } from "../../utilities/gradientClass";
import { ArrowButtonViewProps } from "./types";

type ComponentType = React.FC<ArrowButtonViewProps>;
export const ArrowButtonView: ComponentType = ({ theme, ...props }) => {
  const gradient = gradientClass(theme);

  return (
    <a
      href={props.next}
      className="relative flex items-center justify-center w-16 h-16 rounded-full transition-all duration-200 transform hover:scale-110"
    >
      {/* Gradient Border */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r ${gradient} p-1 -z-10`}
        style={{
          filter: "blur(4px)",
        }}
      ></div>

      {/* Inner Circle with Transparent Background */}
      <div
        className={`flex items-center justify-center w-full h-full rounded-full ${theme.background}`}
      >
        <svg
          className={`w-6 h-6 ${theme.text}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arrow Path */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </a>
  );
};
