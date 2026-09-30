const facts = [
  ["Based in", "Cape Town, South Africa"],
  ["Education", "Eduvos, Software Development"],
  ["Core stack", "Next.js, TypeScript, Node.js, PostgreSQL"],
  ["Open to", "Junior full-stack and DevOps roles"],
];

export default function QuickFacts() {
  return (
    <dl className="qf">
      {facts.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}
