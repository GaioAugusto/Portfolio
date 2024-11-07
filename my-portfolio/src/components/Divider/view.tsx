import { gradientClass } from "../../utilities/gradientClass";
import { DividerViewProps } from "./types";

type ComponentType = React.FC<DividerViewProps>;
export const DividerView: ComponentType = ({ theme }) => {
  return (
    <div className={`${theme.background}  flex justify-center`}>
      <div
        className={`h-0.5 w-3/4 bg-gradient-to-r ${gradientClass(
          theme
        )} opacity-50 rounded`}
      ></div>
    </div>
  );
};
