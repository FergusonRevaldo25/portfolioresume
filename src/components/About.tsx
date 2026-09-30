import { allProjects } from "@/content/allProjects";
import { featured, samples } from "@/content/projects";
import { skills } from "@/content/skills";

export default function About() {
  const stats = [
    [allProjects.length, "Projects with source code"],
    [skills.flatMap((g) => g.items).length, "Technologies"],
    [featured.length + samples.length, "Sites live on Vercel"],
  ];
  return (
    <section id="about" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap two">
        <div>
          <h2>Self-taught, then formally trained</h2>
          <div className="stats">
            {stats.map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
        </div>
        <div>
          <p>I&apos;m a full-stack developer and DevOps engineer based in <b>Cape Town, South Africa</b>, specialising in digital experiences and automated infrastructure. I finished high school at <b>Crestway High School</b> (NQF Level 4) and kept learning through online courses on <b>Alison</b> and with <b>Code with Mosh</b>.</p>
          <p>I then studied at <b>Eduvos, Mowbray campus</b>, where I graduated with a strong foundation in software development. My path combines self-taught discipline with formal academic training.</p>
          <p>I combine technical work with design thinking, so what I build is both functional and good-looking. My DevOps portfolio covers log automation, web server configuration, Docker containerisation and a complete Prometheus and Grafana monitoring stack.</p>
          <h3 style={{ marginTop: "2rem", fontSize: "1.3rem" }}>Education</h3>
          <ul className="edu">
            <li><b>Eduvos, Mowbray campus</b><span>Graduate, Software Development</span></li>
            <li><b>Crestway High School</b><span>NQF Level 4, Matriculation</span></li>
            <li><b>Additional courses</b><span>Alison Online, Code with Mosh</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
