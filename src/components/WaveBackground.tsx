"use client";
import { useEffect, useRef } from "react";

// Drifting swell lines behind the whole page. Lines bulge near the pointer and
// shift with scroll. Colours come from the theme tokens, so light/dark just works.
export default function WaveBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, frame = 0;
    let tx = -9999, ty = -9999, mx = -9999, my = -9999;
    let sea = "#14606B", pro = "#D2264F";

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    };
    const readColors = () => {
      const cs = getComputedStyle(document.documentElement);
      sea = cs.getPropertyValue("--sea").trim() || sea;
      pro = cs.getPropertyValue("--pro").trim() || pro;
    };
    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (mx < -5000) { mx = tx; my = ty; }
    };

    function draw(t: number) {
      ctx!.clearRect(0, 0, w, h);
      const lines = w < 700 ? 22 : 34;
      const step = w < 700 ? 18 : 10;
      const scroll = window.scrollY * 0.0018;
      for (let i = 0; i < lines; i++) {
        const base = (i / (lines - 1)) * h * 1.1 - h * 0.05;
        const accent = i % 9 === 4;
        ctx!.beginPath();
        for (let x = 0; x <= w + step; x += step) {
          let y =
            base +
            Math.sin(x * 0.004 + t * 0.0004 + i * 0.35 + scroll) * 22 +
            Math.sin(x * 0.0011 - t * 0.00025 + i * 0.2) * 38;
          const d = Math.hypot(x - mx, y - my);
          if (d < 220) y -= Math.pow(1 - d / 220, 2) * 46;
          if (x === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        ctx!.strokeStyle = accent ? pro : sea;
        ctx!.globalAlpha = accent ? 0.3 : 0.14;
        ctx!.lineWidth = 1.2;
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;
    }

    const loop = (t: number) => {
      if (frame++ % 30 === 0) readColors();
      mx += (tx - mx) * 0.08;
      my += (ty - my) * 0.08;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    readColors();
    resize();
    window.addEventListener("resize", resize);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="bgwave" aria-hidden="true" />;
}
