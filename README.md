# Mounir L. Maimouni — Portfolio (Next.js)

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 — static export, ready for GitHub Pages.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Where to edit
| What | File |
|---|---|
| Name, role, intro, email / GitHub / LinkedIn | `lib/config.ts` → `PROFILE` |
| Code snippets typed on the parchment | `lib/config.ts` → `SNIPPETS` (9 lines each: 3 wide + 6 short) |
| Skills list, tray toggles, clickable zones | `lib/config.ts` → `SKILLS`, `TRAY`, `HOTSPOTS` |
| Artwork | `public/hero.jpg` (1365×768, positions in `lib/layout.ts` assume this frame) |
| Mobile portrait / parchment texture | `public/portrait.jpg`, `public/parchment.jpg` |
| Section placeholders (About, Projects…) | `components/Stubs.tsx` |

## Structure
- `components/Stage.tsx` — desktop hero (≥ 981px): the artwork + real links, text, glow, lamp, hover lift
- `components/CodeTyper.tsx` — endless human-like typing loop (pauses off-screen, respects reduced motion)
- `components/Desk.tsx` — mobile/tablet layout (< 981px), pure CSS
- `components/ThemeButton.tsx` — dark/light toggle (saved in localStorage)
- `app/globals.css` — visual layer (textures, blend modes, masks); Tailwind utilities handle layout/visibility

## Deploy to GitHub Pages
1. Push to a GitHub repo (branch `main`), then Settings → Pages → Source: **GitHub Actions**.
2. `.github/workflows/deploy.yml` builds with `NEXT_PUBLIC_BASE_PATH=/<repo-name>` automatically.
   For a user site (`<you>.github.io`) remove that env line.

## Notes
- Tailwind runs **without** its preflight reset (`globals.css` imports only theme + utilities), so existing visuals are unchanged.
- Avoid naming your own CSS classes like Tailwind utilities (e.g. `ring`, `block`, `flex`) — they would be overridden.