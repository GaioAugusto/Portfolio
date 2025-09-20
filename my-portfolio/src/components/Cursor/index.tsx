import React, { useEffect, useMemo, useRef } from "react";

type Point = { x: number; y: number };

type Props = {
  count?: number; // how many circles
  headSize?: number; // px
  easing?: number; // 0..1, higher = snappier tail
  className?: string; // extra class for each circle
};

export const MouseTrail: React.FC<Props> = ({
  count = 40,
  headSize = 24,
  easing = 0.35,
  className = "",
}) => {
  // stable array length so refs line up with rendered items
  const indices = useMemo(
    () => Array.from({ length: count }, (_, i) => i),
    [count]
  );

  // one ref per circle
  const circleRefs = useRef<HTMLDivElement[]>([]);
  circleRefs.current = [];

  // positions used by the animation (each circle keeps its own last x/y)
  const pos = useRef<Point[]>(
    Array.from({ length: count }, () => ({ x: 0, y: 0 }))
  );
  if (!Array.isArray(pos.current)) {
    pos.current = Array.from({ length: count }, () => ({ x: 0, y: 0 }));
  }

  const mouse = useRef<Point>({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);
  const mounted = useRef(false);

  // attach once: pointer tracking + “thin when hovering fields” with delegation
  useEffect(() => {
    mounted.current = true;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // reveal circles on first move
      for (const el of circleRefs.current) {
        if (el) el.classList.remove("circle-hidden");
      }
    };

    const onPointerOver = (e: Event) => {
      const t = e.target as Element | null;
      if (!t) return;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        for (const el of circleRefs.current) el?.classList.add("circle-thin");
      }
    };

    const onPointerOut = (e: Event) => {
      const t = e.target as Element | null;
      if (!t) return;
      if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) {
        for (const el of circleRefs.current)
          el?.classList.remove("circle-thin");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, true);
    document.addEventListener("pointerout", onPointerOut, true);

    // animation loop
    const tick = () => {
      // lead with the mouse
      let x = mouse.current.x;
      let y = mouse.current.y;

      for (let i = 0; i < circleRefs.current.length; i++) {
        const el = circleRefs.current[i];
        if (!el) continue;

        // scale largest on head, smaller toward tail
        const scale =
          (circleRefs.current.length - i) / circleRefs.current.length;

        // position this circle
        el.style.transform = `translate(${x - headSize / 2}px, ${
          y - headSize / 2
        }px) scale(${scale})`;

        // remember this position for the next one
        const p = pos.current[i];
        p.x = x;
        p.y = y;

        // move target toward the next circle's last position (the "follow" effect)
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
  }, [easing, headSize, count]);

  return (
    <>
      {indices.map((i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) circleRefs.current[i] = el;
          }}
          className={`circle circle-hidden ${className}`}
          style={{
            // better perf: transforms only
            willChange: "transform",
            width: headSize,
            height: headSize,
          }}
        />
      ))}
    </>
  );
};
