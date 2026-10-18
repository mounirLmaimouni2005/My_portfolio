"use client";
import type { CSSProperties } from "react";

function toggleTheme() {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
  const next = dark ? "light" : "dark";
  r.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch {}
}

type Props = { id: string; className?: string; style?: CSSProperties; icons?: boolean };
export default function ThemeButton({ id, className, style, icons }: Props) {
  return (
    <button id={id} className={className} style={style} type="button" aria-label="Toggle light and dark theme" onClick={toggleTheme}>
      {icons && (
        <>
          <svg className="su" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <svg className="mo" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>
        </>
      )}
    </button>
  );
}