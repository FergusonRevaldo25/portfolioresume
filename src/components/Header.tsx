import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header>
      <div className="wrap">
        <b>{site.name}</b>
        <div className="hr">
          <nav>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
