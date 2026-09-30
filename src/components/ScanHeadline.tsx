"use client";
import { useEffect, useRef } from "react";

const TEXT = "Full-stack developer who ships to production.";

export default function ScanHeadline() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let live = false;
    let raf = 0;
    const set = (x: number) =>
      el.style.setProperty("--x", Math.max(0, Math.min(el.clientWidth, x)) + "px");
    const move = (e: PointerEvent) => {
      live = true;
      set(e.clientX - el.getBoundingClientRect().left);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerdown", move);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      set(el.clientWidth * 0.6);
    } else {
      let t0 = 0;
      const tick = (t: number) => {
        if (live) return;
        if (!t0) t0 = t;
        const p = Math.min(1, (t - t0) / 2200);
        const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
        set(el.clientWidth * e);
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerdown", move);
    };
  }, []);

  return (
    <h1 ref={ref} className="scan" aria-label={TEXT}>
      <span className="l base" aria-hidden="true">{TEXT}</span>
      <span className="l dec" aria-hidden="true">{TEXT}</span>
      <span className="beam" aria-hidden="true" />
    </h1>
  );
}
