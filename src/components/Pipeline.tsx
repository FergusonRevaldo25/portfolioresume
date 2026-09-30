import { proof } from "@/content/projects";

export default function Pipeline() {
  return (
    <section id="depth" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <h2>The engineering behind the sites</h2>
        <p className="sub">Small, finished projects that show how I test, package, deploy and monitor. Each links to its code.</p>
        <div className="pipe" aria-label="Push, test, build, deploy">
          {["Push", "Test", "Build", "Deploy"].map((s) => (
            <div key={s} className="step"><i />{s}</div>
          ))}
        </div>
        <ul className="facts">
          {proof.map((p) => (
            <li key={p.repo}>
              <span>{p.text}</span>
              <a href={p.repo} target="_blank" rel="noopener noreferrer">View code</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
