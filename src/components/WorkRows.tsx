import { featured, samples } from "@/content/projects";

export default function WorkRows() {
  return (
    <section id="work" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <h2 className="rv">Selected work</h2>
        <div className="rows rv">
          {featured.map((p) => (
            <a key={p.name} className="row" href={p.url} target="_blank" rel="noopener noreferrer">
              <h3>{p.name}</h3>
              <em>Next.js</em>
              <p>{p.blurb}</p>
            </a>
          ))}
        </div>
        <p className="rv" style={{ marginTop: "2.6rem", color: "var(--mut)" }}>Small-business sites</p>
        <div className="chips rv">
          {samples.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}<small>{s.kind}</small></a>
          ))}
        </div>
      </div>
    </section>
  );
}
