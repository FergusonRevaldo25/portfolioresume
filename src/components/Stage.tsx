"use client";
import { useEffect, useRef } from "react";
import Lines from "./Lines";
import { featured } from "@/content/projects";
import { allProjects } from "@/content/allProjects";
import { site } from "@/lib/site";

export default function Stage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const total = allProjects.length;

  useEffect(() => {
    const stage = stageRef.current;
    const num = numRef.current;
    if (!stage || !num) return;
    const root = document.documentElement;
    const scenes = Array.from(stage.querySelectorAll<HTMLElement>(".scene"));
    const n = scenes.length;
    const cl = (v: number) => Math.min(1, Math.max(0, v));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scenes.forEach((e) => e.classList.add("on"));
      stage.querySelectorAll("[data-k]").forEach((e) => e.classList.add("lit"));
      num.textContent = String(total);
      return;
    }

    const tick = () => {
      root.style.setProperty("--sy", String(window.scrollY));
      const r = stage.getBoundingClientRect();
      const p = cl(-r.top / (stage.offsetHeight - window.innerHeight));
      root.style.setProperty("--sh", p.toFixed(3));
      scenes.forEach((el, i) => {
        const d = p * n - i;
        let o = 0, y = 0;
        if (d >= -0.001 && d <= 1.001) {
          const a = i === 0 ? 1 : cl(d / 0.2);
          const b = i === n - 1 ? 1 : cl((1 - d) / 0.2);
          o = Math.min(a, b);
          y = (1 - a) * 44 - (1 - b) * 44;
        }
        el.style.opacity = String(o);
        el.style.visibility = o > 0 ? "visible" : "hidden";
        el.style.transform = `translate3d(0,${y}px,0)`;
        el.style.pointerEvents = o > 0.6 ? "auto" : "none";
        el.classList.toggle("on", o > 0.35);
        el.querySelectorAll<HTMLElement>("[data-k]").forEach((e) =>
          e.classList.toggle("lit", d > 0.12 + Number(e.dataset.k) * 0.16)
        );
      });
      num.textContent = String(Math.round(total * cl((p * n - 3 - 0.1) / 0.5)));
    };
    const onScroll = () => requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", tick);
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", tick);
    };
  }, [total]);

  return (
    <div className="stage" ref={stageRef}>
      <div className="pin">
        <section className="scene">
          <p className="k">{site.name} · Cape Town</p>
          <Lines as="h1" className="big" t="Full-stack developer|*who ships to production." />
          <p className="sub">Next.js, Java and DevOps. Junior engineer, open to roles.</p>
          <div className="cue">scroll</div>
        </section>
        <section className="scene">
          <p className="k">Client work</p>
          <Lines className="big" t="Sites that|*real people use." />
          <ul className="names">
            {featured.map((f, i) => <li key={f.name} data-k={i}>{f.name}</li>)}
          </ul>
        </section>
        <section className="scene">
          <p className="k">DevOps</p>
          <Lines className="big" t="Every change|*ships itself." />
          <div className="nodes">
            {["Push", "Test", "Build", "Deploy"].map((s, i) => <span key={s} className="node" data-k={i}>{s}</span>)}
          </div>
          <p className="sub">GitHub Actions, Docker, Kubernetes, Terraform, Prometheus and Grafana.</p>
        </section>
        <section className="scene">
          <p className="k">Open code</p>
          <span className="num chrome" ref={numRef}>0</span>
          <Lines className="mid" t="projects, every one|*with source on GitHub." />
        </section>
        <section className="scene">
          <p className="k">Let&apos;s talk</p>
          <Lines className="big" t="Looking for my|*next engineering role." />
          <div className="acts">
            <a className="pill c" href={site.resume} download>Download resume</a>
            <a className="pill" href={`mailto:${site.email}`}>Email me</a>
            <a className="pill" href="#work">See the work</a>
          </div>
        </section>
      </div>
    </div>
  );
}
