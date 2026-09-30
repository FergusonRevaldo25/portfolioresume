import ScanHeadline from "@/components/ScanHeadline";
import QuickFacts from "@/components/QuickFacts";
import WorkRows from "@/components/WorkRows";
import Pipeline from "@/components/Pipeline";
import AllProjects from "@/components/AllProjects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <div className="wrap hero">
        <ScanHeadline />
        <p className="lede">
          <b>I&apos;m Ferguson Revaldo.</b> I build Next.js apps end to end, from the interface and API to the CI/CD pipeline that deploys them.
        </p>
        <div className="btns">
          <a className="btn p" href={site.resume} download>Download resume</a>
          <a className="btn s" href="#work">See my work</a>
          <a className="btn s" href="#contact">Contact me</a>
        </div>
        <QuickFacts />
      </div>

      <WorkRows />
      <Pipeline />
      <AllProjects />
      <Skills />
      <Services />
      <About />

      <section id="contact" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="wrap two">
          <div>
            <h2>Hiring? Let&apos;s talk.</h2>
            <p className="sub">I&apos;m looking for a junior full-stack or DevOps role. Use the form, or reach me directly.</p>
            <div className="btns" style={{ marginTop: "1.6rem" }}>
              <a className="btn p" href={`mailto:${site.email}`}>Email me</a>
              <a className="btn s" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="btn s" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
