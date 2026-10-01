"use client";
import { useRef } from "react";

const links = [["Work", "#work"], ["Experience", "#exp"], ["Projects", "#projects"], ["Skills", "#skills"], ["About", "#about"], ["Contact", "#contact"]];

export default function Menu() {
  const ref = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button type="button" className="pill" aria-haspopup="dialog" onClick={() => ref.current?.showModal()}>Menu</button>
      <dialog ref={ref} aria-label="Menu">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <b>Explore</b>
          <button type="button" className="pill" onClick={() => ref.current?.close()}>Close</button>
        </div>
        <nav>
          {links.map(([l, h]) => <a key={h} href={h} onClick={() => ref.current?.close()}>{l}</a>)}
        </nav>
      </dialog>
    </>
  );
}
