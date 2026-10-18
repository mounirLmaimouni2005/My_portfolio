"use client";
import { useState } from "react";
import { CODE_CARD, PROFILE, SKILLS, TRAY } from "@/lib/config";
import { asset } from "@/lib/layout";
import ThemeButton from "./ThemeButton";

const NAV = [["About", "#about"], ["Projects", "#projects"], ["Technologies", "#technologies"], ["Contact", "#contact"], ["Hire Me →", "#contact"]];

/** Mobile / tablet layout (< 981px), built with CSS instead of the artwork. */
export default function Desk() {
  const [on, setOn] = useState<Record<string, boolean>>({});

  return (
    <div className="desk min-[981px]:hidden">
      <div className="bulb" aria-hidden="true" />
      <div className="top col-span-full flex items-start justify-between gap-3">
        <a className="logo" href="#top" aria-label={`${PROFILE.name}, home`}>
          <b>M</b>
          <span>MOUNIR L. MAIMOUNI<small>{PROFILE.role}</small></span>
        </a>
        <nav aria-label="Primary">
          {NAV.map(([t, h]) => <a key={t} href={h}>{t}</a>)}
          <ThemeButton id="th" icons />
        </nav>
      </div>

      <main id="top" style={{ display: "contents" }}>
        <div className="left flex min-w-0 flex-col gap-2.5">
          <div className="plank" aria-hidden="true">{PROFILE.name}</div>
          <div className="slate">
            <h1>Mounir L.<br />Maimouni</h1>
            <p className="role">{PROFILE.role}</p>
            <p className="desc">{PROFILE.intro}</p>
            <div className="btns flex flex-wrap gap-3.5">
              <a className="btn" href="#projects">View Projects →</a>
              <a className="btn" href="#contact">Contact Me{" "}
                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="portrait">
          <img src={asset("/portrait.jpg")} width={495} height={444} alt={`Portrait of ${PROFILE.name}`} />
          <div className="tray" role="group" aria-label="Highlight a technology in the skills list">
            {TRAY.map((b) => (
              <button key={b.t} type="button" aria-pressed={!!on[b.t]} data-t={b.t} aria-label={b.label}
                onClick={() => setOn((s) => ({ ...s, [b.t]: !s[b.t] }))}>{b.text}</button>
            ))}
          </div>
        </div>

        <div className="rt">
          <div className="pap pin"><pre>{CODE_CARD}</pre></div>
          <div className="pap">
            <ul id="sk">
              {SKILLS.map((s) => <li key={s.label} data-t={s.t} className={s.t && on[s.t] ? "on" : undefined}>{s.label}</li>)}
            </ul>
          </div>
        </div>

        <div className="plates">
          <div className="pl">
            <svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>
            <h2>Scalable Systems</h2><p>Writing maintainable and scalable code.</p>
          </div>
          <div className="pl">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>
            <h2>Problem Solving</h2><p>Using the latest technologies and best practices.</p>
          </div>
          <div className="pl">
            <svg viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 9-12h-7z" /></svg>
            <h2>Building Solutions</h2><p>Turning ideas into real solutions.</p>
          </div>
          <div className="pl">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></svg>
            <h2>Continuous Learning</h2><p>Always exploring new tools and techniques.</p>
          </div>
        </div>
        <div className="pap blank" aria-hidden="true" />
        <div className="case">
          <small>Available for</small>
          <h2>Full-Time &amp; Freelance Roles</h2>
          <p>Let&apos;s build something great together! <a href="#contact" aria-label="Go to contact">→</a></p>
        </div>
        <div className="sc" aria-hidden="true"><i></i>Scroll</div>
      </main>
    </div>
  );
}