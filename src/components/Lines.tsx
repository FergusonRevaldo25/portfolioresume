import type { CSSProperties } from "react";

// "Line one|*accent line" -> masked lines that rise in. A leading * makes a line chrome.
export default function Lines({ t, as: Tag = "h2", className }: { t: string; as?: "h1" | "h2"; className?: string }) {
  const parts = t.split("|");
  return (
    <Tag className={className} aria-label={parts.join(" ").replace("*", "")}>
      {parts.map((x, i) => {
        const c = x.startsWith("*");
        return (
          <span key={i} className="ln" aria-hidden="true" style={{ "--n": i } as CSSProperties}>
            <i className={c ? "chrome" : undefined}>{c ? x.slice(1) : x}</i>
          </span>
        );
      })}
    </Tag>
  );
}
