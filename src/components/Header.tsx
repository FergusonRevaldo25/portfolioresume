import { site } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";
import Menu from "./Menu";

export default function Header() {
  return (
    <header>
      <a className="wm" href="#">{site.name}<small>Developer · Cape Town</small></a>
      <div className="hr">
        <a className="pill c" href={site.resume} download>Resume</a>
        <ThemeToggle />
        <Menu />
      </div>
    </header>
  );
}
