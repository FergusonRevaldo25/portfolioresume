"use client";
import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.dataset.theme = saved;
  }, []);

  function toggle() {
    const root = document.documentElement;
    const isDark = root.dataset.theme !== "light";
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  }

  return (
    <button type="button" className="tt" onClick={toggle} aria-label="Switch between light and dark theme">
      Theme
    </button>
  );
}
