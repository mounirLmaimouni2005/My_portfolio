"use client";
import { useRef, type CSSProperties } from "react";
import { CASE, HOTSPOTS, PLATES, PROFILE } from "@/lib/config";
import { asset, box, clone } from "@/lib/layout";
import CodeTyper from "./CodeTyper";
import ThemeButton from "./ThemeButton";

/** Desktop hero (>= 981px): the artwork itself, with real links, text and light animation on top. */
export default function Stage() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);

  // Warm "desk lamp" that follows the cursor (throttled with rAF).
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current!, b = el.getBoundingClientRect(), x = e.clientX - b.left, y = e.clientY - b.top;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      el.style.setProperty("--mx", `${x}px`); el.style.setProperty("--my", `${y}px`);
    });
  };

  const vars = { "--img": `url(${asset("/hero.jpg")})` } as CSSProperties;
  const third = PLATES[2];
  const label: CSSProperties = {
    left: `${(((450 - third[0]) / third[2]) * 100).toFixed(2)}%`, top: `${(((621 - third[1]) / third[3]) * 100).toFixed(2)}%`,
    width: `${((136 / third[2]) * 100).toFixed(2)}%`, height: `${((23 / third[3]) * 100).toFixed(2)}%`,
  };

  return (
    <div ref={ref} id="stage" className="stage hidden min-[981px]:block" style={vars} onPointerMove={onMove}>
      <div className="art">
        <img src={asset("/hero.jpg")} width={1365} height={768} alt="" />
        <div className="bg1" style={box([436, -98, 240, 240])} />
        <div className="bg2" style={box([677, 124, 540, 540])} />
        {PLATES.map((p, i) => (
          <div key={i} className="cl" aria-hidden="true" style={clone(p)}>
            {i === 2 && <div className="pl3" style={label}>Building Solutions</div>}
          </div>
        ))}
        <div className="cl" aria-hidden="true" style={clone(CASE)} />
        <CodeTyper />
      </div>
      <div className="lamp" aria-hidden="true" />
      <div className="dim" aria-hidden="true" />
      {HOTSPOTS.map((h) => (
        <a key={h.label} className="hs" href={h.href} style={box(h.box)}><span className="sr-only">{h.label}</span></a>
      ))}
      <ThemeButton id="th2" className="hs" style={box([1264, 13, 40, 40])} />
      <div className="sr-only">
        <h1>{PROFILE.name}</h1>
        <p>{PROFILE.role}</p>
        <p>{PROFILE.intro}</p>
        <p>Scalable Systems. Problem Solving. Building Solutions. Continuous Learning.</p>
        <p>Available for Full-Time and Freelance Roles. Let&apos;s build something great together!</p>
      </div>
    </div>
  );
}