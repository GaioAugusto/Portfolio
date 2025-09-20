import styled, { createGlobalStyle } from "styled-components";

export const GlobalMouseTrailStyles = createGlobalStyle`
  .circle {
    position: fixed;
    top: 0; left: 0;
    border-radius: 9999px;
    background: #fff;
    pointer-events: none;
    z-index: 9999;
    transition: opacity 120ms ease;
    will-change: transform;
  }
  .circle-hidden { opacity: 0; }
  .circle-thin   { transform: scale(0.6); }
`;

export const GlobalHideNativeCursor = createGlobalStyle`
  html, body, #root { cursor: none !important; }

  a, button, label, select, summary, [role="button"], [role="link"] {
    cursor: none !important;
  }

  input, textarea, [contenteditable="true"] {
    cursor: none !important;
  }
`;

export const Circle = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;
