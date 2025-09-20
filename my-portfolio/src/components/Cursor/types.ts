import React from "react";

export interface MouseCursorProps {
  count?: number; // how many circles
  headSize?: number; // px
  easing?: number; // 0..1, higher = snappier tail
  className?: string;
}

export interface MouseCursorViewProps {
  readonly indices: number[];
  readonly headSize: number; // <- required here so view can size circles
  readonly circleRefs: React.MutableRefObject<HTMLDivElement[]>;
  readonly className?: string;
}
