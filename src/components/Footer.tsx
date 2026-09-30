import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap fw">
        <span>© 2026 {site.name}. Built in Cape Town, South Africa.</span>
        <span className="soc">
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </span>
      </div>
    </footer>
  );
}
