"use client";
import { useEffect, useRef } from "react";

type Cap = { x: number; y: number; len: number; th: number; a: string; b: string; amp: number; per: number; ph: number; depth: number; dim?: boolean };

const ANGLE = -0.66; // capsules lean up and to the right
const CAPS: Cap[] = [
  { x: 0.08, y: 0.86, len: 560, th: 150, a: "#5B2BFF", b: "#E01CFF", amp: 60, per: 16, ph: 0, depth: 1.2 },
  { x: 0.3, y: 0.06, len: 380, th: 110, a: "#3B4BDB", b: "#8A2BFF", amp: 50, per: 19, ph: 1.5, depth: 0.8 },
  { x: 0.62, y: 0.3, len: 440, th: 120, a: "#4B3BE8", b: "#8A3DF0", amp: 70, per: 22, ph: 3, depth: 0.6 },
  { x: 0.94, y: 0.1, len: 300, th: 90, a: "#8A2BFF", b: "#E01CFF", amp: 45, per: 17, ph: 2, depth: 1 },
  { x: 0.88, y: 0.8, len: 600, th: 150, a: "#E01CFF", b: "#5B2BFF", amp: 65, per: 20, ph: 4, depth: 1.3 },
  { x: 0.52, y: 0.98, len: 280, th: 80, a: "#3B4BDB", b: "#6C3BFF", amp: 40, per: 15, ph: 5, depth: 0.9 },
  { x: 0.4, y: 0.52, len: 700, th: 120, a: "#0F1D4A", b: "#1E3A8A", amp: 80, per: 26, ph: 1, depth: 0.4, dim: true },
];
const DOTS = [
  { x: 0.14, y: 0.3, r: 38, ph: 0 },
  { x: 0.76, y: 0.54, r: 30, ph: 2 },
];

export default function MotionBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, raf = 0, frame = 0;
    let tx = -9999, ty = -9999, mx = -9999, my = -9999;
    let line = "#2DD4E6", light = false;

    const readTheme = () => {
      const root = document.documentElement;
      line = getComputedStyle(root).getPropertyValue("--sea").trim() || line;
      light = root.dataset.theme === "light";
    };

    const draw = (t: number) => {
      const s = Math.max(w, h) / 900;
      const sec = t / 1000;
      const px = mx < -5000 ? 0 : mx / w - 0.5;
      const py = mx < -5000 ? 0 : my / h - 0.5;
      const sy = window.scrollY;
      const base = light ? 0.24 : 0.42;
      ctx.clearRect(0, 0, w, h);

      for (const c of CAPS) {
        const wave = sec / c.per * Math.PI * 2 + c.ph;
        const d = Math.sin(wave) * c.amp * s;
        const cx = c.x * w + Math.cos(ANGLE) * d - px * 40 * c.depth;
        const cy = c.y * h + Math.sin(ANGLE) * d - py * 40 * c.depth - sy * 0.04 * c.depth;
        const len = c.len * s * (1 + Math.sin(wave * 1.3) * 0.05);
        const th = c.th * s;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ANGLE);
        const g = ctx.createLinearGradient(-len / 2, 0, len / 2, 0);
        g.addColorStop(0, c.a);
        g.addColorStop(1, c.b);
        ctx.fillStyle = g;
        ctx.globalAlpha = c.dim ? base * 0.9 : base;
        ctx.beginPath();
        ctx.roundRect(-len / 2, -th / 2, len, th, th / 2);
        ctx.fill();
        ctx.restore();
      }

      ctx.fillStyle = "#3B4BDB";
      ctx.globalAlpha = Math.min(1, base * 1.2);
      for (const o of DOTS) {
        const bob = Math.sin(sec / 7 + o.ph) * 14 * s;
        ctx.beginPath();
        ctx.arc(o.x * w - px * 30, o.y * h + bob - sy * 0.03, o.r * s, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = line;
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = light ? 0.5 : 0.4;
      for (let k = 0; k < 4; k++) {
        const sx = w * (0.05 + 0.26 * k) + Math.sin(sec / 12 + k) * 40 * s;
        ctx.beginPath();
        ctx.moveTo(sx, h * 1.05);
        ctx.quadraticCurveTo(sx + w * 0.22, h * 0.55 + Math.sin(sec / 9 + k) * 30 * s, sx + w * 0.55, -h * 0.05);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    };

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (mx < -5000) { mx = tx; my = ty; }
    };

    const loop = (t: number) => {
      if (frame++ % 30 === 0) readTheme();
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    readTheme();
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
