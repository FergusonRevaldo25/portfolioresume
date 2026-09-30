import type { CSSProperties } from "react";
import { featured, samples } from "@/content/projects";

export default function WorkRows() {
  return (
    <section id="work">
      <div className="wrap">
        <h2>Selected work</h2>
        <p className="sub">Deployed on Vercel and open to browse. Hover a row, then open it.</p>
        <div className="rows">
          {featured.map((p) => (
            <a key={p.name} className="row" style={{ "--c": p.color } as CSSProperties} href={p.url} target="_blank" rel="noopener noreferrer">
              <h3>{p.name}</h3>
              <span className="tag">Next.js</span>
              <p>{p.blurb}</p>
            </a>
          ))}
        </div>
        <h3 style={{ marginTop: "3rem", fontSize: "1.5rem" }}>Small-business sites</h3>
        <div className="chips">
          {samples.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.name}
              <small>{s.kind}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
