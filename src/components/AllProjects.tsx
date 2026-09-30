"use client";
import { useState } from "react";
import Image from "next/image";
import { allProjects } from "@/content/allProjects";

const filters = [
  ["all", "All"], ["devops", "DevOps"], ["auth", "Authentication"],
  ["dashboard", "Dashboard"], ["ai", "AI & Chat"], ["showcase", "Showcase"],
];

export default function AllProjects() {
  const [f, setF] = useState("all");
  const list = f === "all" ? allProjects : allProjects.filter((p) => p.category === f);
  return (
    <section id="projects" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <h2>All projects</h2>
        <p className="sub">Everything I&apos;ve built, each with its source code. Filter by type.</p>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map(([k, l]) => (
            <button key={k} type="button" aria-pressed={f === k} className={f === k ? "on" : ""} onClick={() => setF(k)}>{l}</button>
          ))}
        </div>
        <div className="pgrid">
          {list.map((p) => (
            <article key={p.id} className="pcard">
              <div className={p.image ? "pimg" : "pimg ph"}>
                {p.image ? <Image src={p.image} alt={`${p.title} preview`} fill sizes="(max-width: 760px) 100vw, 380px" /> : <span>{p.title}</span>}
              </div>
              <div className="pbody">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tools">{p.badges.map((b) => <span key={b}>{b}</span>)}</div>
                <div className="plinks">
                  {p.demo !== "#" ? <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a> : <em>Runs locally</em>}
                  <a href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
