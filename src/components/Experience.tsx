const jobs = [
  ["Systems Administrator / Infrastructure", "Loot.co.za · Sep 2025 – Present", "Java, SQL and automation work on a live e-commerce platform, plus Linux and AWS infrastructure support."],
  ["Administrative Clerk", "Bidvest Waltons · Aug 2024 – Mar 2025", "Accurate data capture, first-line technical help and coordination for staff."],
  ["IT Software Development, NQF 5", "Eduvos, Mowbray · Graduated Feb 2026", "Continuing to a BSc in Information Systems (Software Engineering), planned for 2027."],
];

export default function Experience() {
  return (
    <section id="exp" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <h2 className="rv">Experience</h2>
        <div className="rv">
          {jobs.map(([t, w, d]) => (
            <div key={t} className="job"><h3>{t}</h3><span>{w}</span><p>{d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
