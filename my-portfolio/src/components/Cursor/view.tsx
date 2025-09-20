import React from "react";
import {
  Circle,
  GlobalMouseTrailStyles,
  GlobalHideNativeCursor,
} from "./style";
import { MouseCursorViewProps } from "./types";

export const MouseCursorView: React.FC<MouseCursorViewProps> = ({
  indices,
  headSize,
  circleRefs,
  className,
}) => {
  return (
    <React.Fragment>
      <GlobalMouseTrailStyles />
      <GlobalHideNativeCursor />
      {indices.map((i) => (
        <Circle
          key={i}
          ref={(el) => {
            if (el) circleRefs.current[i] = el;
          }}
          className={`circle circle-hidden ${className ?? ""}`}
          $size={headSize}
        />
      ))}
    </React.Fragment>
  );
};
