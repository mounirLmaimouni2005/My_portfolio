"use client";
import { useEffect, useRef } from "react";
import { SNIPPETS } from "@/lib/config";
import { box } from "@/lib/layout";

/** Types SNIPPETS on the parchment like a person: variable rhythm, rare typos, endless loop. */
export default function CodeTyper() {
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c1 = top.current!, c2 = bottom.current!, stage = document.getElementById("stage")!;
    const rows: HTMLDivElement[] = [], nodes: Text[] = [];
    for (let i = 0; i < 9; i++) {
      const d = document.createElement("div"), t = document.createTextNode("");
      d.appendChild(t); (i < 3 ? c1 : c2).appendChild(d); rows.push(d); nodes.push(t);
    }
    const caret = document.createElement("span");
    caret.className = "cr"; caret.setAttribute("aria-hidden", "true");
    const set = (i: number, v: string) => { nodes[i].data = v; rows[i].appendChild(caret); };
    const clear = () => { c1.innerHTML = ""; c2.innerHTML = ""; };

    if (matchMedia("(prefers-reduced-motion:reduce)").matches) {
      SNIPPETS[0].forEach((l, i) => { nodes[i].data = l; });
      return clear;
    }

    let dead = false, visible = true, waiters: (() => void)[] = [];
    const wake = () => { waiters.forEach((f) => f()); waiters = []; };
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) wake(); });
    io.observe(stage);
    const onVis = () => { if (!document.hidden) wake(); };
    document.addEventListener("visibilitychange", onVis);

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
    const rnd = (a: number, b: number) => a + Math.random() * (b - a);
    const gate = async () => { while (!dead && !(visible && !document.hidden)) await new Promise<void>((r) => waiters.push(r)); };

    const write = async (lines: string[]) => {
      for (let l = 0; l < lines.length && !dead; l++) {
        let v = ""; set(l, v); await sleep(rnd(260, 420));
        for (const ch of lines[l]) {
          if (dead) return; await gate();
          if (/[a-z]/.test(ch) && Math.random() < 0.025) { // human typo, then correction
            set(l, v + "asdfjkl"[Math.floor(Math.random() * 7)]); await sleep(rnd(140, 220)); set(l, v); await sleep(rnd(70, 120));
          }
          v += ch; set(l, v);
          await sleep(/[{;,(]/.test(ch) ? rnd(90, 170) : ch === " " ? rnd(30, 70) : rnd(40, 95));
        }
      }
    };
    const wipe = async () => {
      for (let l = 8; l >= 0 && !dead; l--) {
        let v = nodes[l].data;
        while (v.length && !dead) { await gate(); v = v.slice(0, -3); set(l, v); await sleep(9); }
      }
      set(0, "");
    };
    (async () => {
      let k = 0;
      while (!dead) { await sleep(1700); await write(SNIPPETS[k % SNIPPETS.length]); await sleep(3200); await wipe(); await sleep(600); k++; }
    })();

    return () => { dead = true; wake(); io.disconnect(); document.removeEventListener("visibilitychange", onVis); clear(); };
  }, []);

  return (
    <>
      <div className="pc" id="c1" ref={top} aria-hidden="true" style={box([876, 559, 222, 42])} />
      <div className="pc" id="c2" ref={bottom} aria-hidden="true" style={box([876, 598.7, 136, 80])} />
    </>
  );
}