import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <h2>Skills</h2>
        <dl className="sk">
          {skills.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd className="tools">
                {g.items.map((i) => <span key={i}>{i}</span>)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
