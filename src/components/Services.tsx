const services = [
  ["Web development", "Custom websites and web applications built with modern technologies and best practices."],
  ["Responsive design", "Mobile-first designs that look beautiful and work flawlessly on all devices."],
  ["Backend development", "Scalable server-side solutions, APIs, and database architecture."],
  ["AI and voice assistants", "Custom AI voice assistants, chatbots, and LLM-powered applications built with Groq, OpenAI, and Whisper."],
];

export default function Services() {
  return (
    <section id="services" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap">
        <h2>What I do</h2>
        <p className="sub">The kinds of work I can take on in a team.</p>
        <ul className="facts">
          {services.map(([t, d]) => (
            <li key={t}><b>{t}</b><span style={{ flex: 1, maxWidth: "58ch" }}>{d}</span></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
