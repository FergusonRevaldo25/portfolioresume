import Stage from "@/components/Stage";
import WorkRows from "@/components/WorkRows";
import Experience from "@/components/Experience";
import Pipeline from "@/components/Pipeline";
import AllProjects from "@/components/AllProjects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Stage />
      <WorkRows />
      <Experience />
      <Pipeline />
      <AllProjects />
      <Skills />
      <Services />
      <About />
      <Contact />
    </>
  );
}
