"use client";
import { useEffect, useRef } from "react";

type Cap = { x: number; y: number; len: number; th: number; a: string; b: string; amp: number; per: number; ph: number; depth: number };

const ANGLE = -0.66;
const CAPS: Cap[] = [
  { x: 0.06, y: 0.84, len: 620, th: 150, a: "#1c2233", b: "#33265e", amp: 150, per: 11, ph: 0, depth: 1.2 },
  { x: 0.3, y: 0.08, len: 420, th: 110, a: "#16323d", b: "#1c2233", amp: 130, per: 13, ph: 1.5, depth: 0.8 },
  { x: 0.62, y: 0.32, len: 480, th: 120, a: "#2a2450", b: "#16323d", amp: 170, per: 15, ph: 3, depth: 0.6 },
  { x: 0.94, y: 0.1, len: 330, th: 90, a: "#1c2233", b: "#33265e", amp: 120, per: 10, ph: 2, depth: 1 },
  { x: 0.88, y: 0.82, len: 640, th: 150, a: "#33265e", b: "#1c2233", amp: 160, per: 12, ph: 4, depth: 1.3 },
  { x: 0.5, y: 1, len: 300, th: 80, a: "#16323d", b: "#2a2450", amp: 110, per: 9, ph: 5, depth: 0.9 },
];
const BALLS = [
  { x: 0.16, y: 0.3, r: 40, ph: 0 },
  { x: 0.78, y: 0.56, r: 32, ph: 2 },
  { x: 0.44, y: 0.72, r: 22, ph: 4 },
];

// Chrome capsules that glide along their slant, catch a travelling highlight,
// lean into scroll speed and follow the cursor. Colours follow the theme.
export default function MotionBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0, h = 0, raf = 0, frame = 0, vel = 0, lastY = window.scrollY;
    let tx = -9999, ty = -9999, mx = -9999, my = -9999;
    let line = "#7FD6E6", light = false;
    const cl = (v: number) => Math.min(1, Math.max(0, v));

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
      const base = light ? 0.3 : 0.78;
      ctx.clearRect(0, 0, w, h);

      ctx.shadowColor = light ? "rgba(110,90,230,.25)" : "rgba(130,115,255,.5)";
      ctx.shadowBlur = 36 * s;
      for (const c of CAPS) {
        const wave = (sec / c.per) * Math.PI * 2 + c.ph;
        const d = Math.sin(wave) * c.amp * s + vel * 5 * c.depth;
        const cx = c.x * w + Math.cos(ANGLE) * d - px * 70 * c.depth;
        const cy = c.y * h + Math.sin(ANGLE) * d - py * 70 * c.depth - sy * 0.05 * c.depth;
        const len = c.len * s * (1 + Math.sin(wave * 1.3) * 0.06);
        const th = c.th * s;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ANGLE + Math.sin(wave * 0.7) * 0.05);
        const g = ctx.createLinearGradient(-len / 2, 0, len / 2, 0);
        const hl = ((sec * 0.09 + c.ph * 0.37) % 1.5) - 0.25;
        g.addColorStop(0, c.a);
        g.addColorStop(cl(hl - 0.18), "#3a4560");
        g.addColorStop(cl(hl), "#f4f7fd");
        g.addColorStop(cl(hl + 0.18), "#3a4560");
        g.addColorStop(1, c.b);
        ctx.fillStyle = g;
        ctx.globalAlpha = base;
        ctx.beginPath();
        ctx.roundRect(-len / 2, -th / 2, len, th, th / 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = "rgba(255,255,255,.28)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.shadowBlur = 36 * s;
        ctx.restore();
      }
      ctx.shadowBlur = 0;

      for (const o of BALLS) {
        const r = o.r * s;
        const bx = o.x * w - px * 50 + Math.sin(sec / 4 + o.ph) * 30 * s;
        const by = o.y * h + Math.sin(sec / 3 + o.ph) * 26 * s - sy * 0.04;
        const g = ctx.createRadialGradient(bx - r * 0.35, by - r * 0.35, r * 0.1, bx, by, r);
        g.addColorStop(0, "#f4f7fd");
        g.addColorStop(0.45, "#7a869c");
        g.addColorStop(1, "#141925");
        ctx.globalAlpha = Math.min(1, base + 0.1);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(bx, by, r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = line;
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = light ? 0.5 : 0.4;
      for (let k = 0; k < 4; k++) {
        const sx = w * (0.05 + 0.26 * k) + Math.sin(sec / 7 + k) * 70 * s;
        ctx.beginPath();
        ctx.moveTo(sx, h * 1.05);
        ctx.quadraticCurveTo(sx + w * 0.22, h * 0.55 + Math.sin(sec / 5 + k) * 50 * s, sx + w * 0.55, -h * 0.05);
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
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      vel += (dy - vel) * 0.08;
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
