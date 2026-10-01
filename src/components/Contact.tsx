import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" style={{ borderTop: "1px solid var(--line)" }}>
      <div className="wrap two">
        <div>
          <h2>Hiring? Let&apos;s talk.</h2>
          <a className="ct" href={`mailto:${site.email}`}>{site.email}</a>
          <a className="ct" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="ct" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
