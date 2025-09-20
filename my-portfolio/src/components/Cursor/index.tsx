import React, { useEffect, useMemo, useRef } from "react";
import { MouseCursorView } from "./view";
import { MouseCursorProps } from "./types";

type Point = { x: number; y: number };

export const MouseTrail: React.FC<MouseCursorProps> = ({
  count = 40,
  headSize = 24,
  easing = 0.35,
  className = "",
}) => {
  const indices = useMemo(
    () => Array.from({ length: count }, (_, i) => i),
    [count]
  );

  const circleRefs = useRef<HTMLDivElement[]>([]);
  circleRefs.current = [];

  const pos = useRef<Point[]>(
    Array.from({ length: count }, () => ({ x: 0, y: 0 }))
  );
  const mouse = useRef<Point>({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      for (const el of circleRefs.current)
        el?.classList.remove("circle-hidden");
    };

    const onPointerOver = (e: Event) => {
      const t = e.target as Element | null;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        for (const el of circleRefs.current) el?.classList.add("circle-thin");
      }
    };
    const onPointerOut = (e: Event) => {
      const t = e.target as Element | null;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        for (const el of circleRefs.current)
          el?.classList.remove("circle-thin");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerout", onPointerOut, true);

    const tick = () => {
      let x = mouse.current.x;
      let y = mouse.current.y;

      for (let i = 0; i < circleRefs.current.length; i++) {
        const el = circleRefs.current[i];
        if (!el) continue;

        const scale =
          (circleRefs.current.length - i) / circleRefs.current.length;

        el.style.transform = `translate(${x - headSize / 2}px, ${
          y - headSize / 2
        }px) scale(${scale})`;

        const p = pos.current[i];
        p.x = x;
        p.y = y;

        const next = pos.current[i + 1] ?? pos.current[0];
        x += (next.x - x) * easing;
        y += (next.y - y) * easing;
      }

      if (mounted.current) raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      mounted.current = false;
      if (raf.current != null) cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onPointerOver, true);
      document.removeEventListener("pointerout", onPointerOut, true);
    };
  }, [count, headSize, easing]);

  return (
    <MouseCursorView
      indices={indices}
      headSize={headSize}
      circleRefs={circleRefs}
      className={className}
    />
  );
};
