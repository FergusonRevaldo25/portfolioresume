"use client";
import { useEffect } from "react";

// Starts the line reveals after the intro, and fades sections in as they scroll into view.
export default function Boot() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => document.body.classList.add("ready"), reduce ? 0 : 1750);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => { window.clearTimeout(t); io.disconnect(); };
  }, []);
  return null;
}
