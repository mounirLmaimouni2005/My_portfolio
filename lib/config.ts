/** Central place to edit personal info, links and layout of the hero. */
export const PROFILE = {
  name: "Mounir L. Maimouni",
  role: "Full Stack Developer",
  intro: "Architecting modern, high-performance web solutions with a focus on scalable systems and polished user experiences.",
  // Add your real links here (leave "" to hide).
  email: "", github: "", linkedin: "",
};

type Box = readonly [number, number, number, number];
export const HOTSPOTS: { label: string; href: string; box: Box }[] = [
  { label: "About", href: "#about", box: [683.5, 13.5, 76, 38] },
  { label: "Projects", href: "#projects", box: [772.5, 13.5, 89, 38] },
  { label: "Technologies", href: "#technologies", box: [874.5, 13.5, 125, 38] },
  { label: "Contact", href: "#contact", box: [1012.5, 13.5, 89, 38] },
  { label: "Hire me", href: "#contact", box: [1116.5, 13.5, 123, 38] },
  { label: "View projects", href: "#projects", box: [88, 468, 174, 45] },
  { label: "Contact me", href: "#contact", box: [288, 468, 158, 45] },
  { label: "Go to contact", href: "#contact", box: [1282, 652, 28, 28] },
  { label: "Home", href: "#top", box: [76, 10, 218, 44] },
];
export const PLATES: Box[] = [[84, 557, 164, 139], [257, 557, 165, 139], [432, 557, 166, 139], [608, 557, 166, 139]];
export const CASE: Box = [1137, 536, 203, 175];

export const SKILLS: { label: string; t?: string }[] = [
  { label: "HTML" }, { label: "CSS" }, { label: "JAVASCRIPT", t: "js" }, { label: "PHP", t: "php" }, { label: "SQL", t: "sql" },
  { label: "MYSQL" }, { label: "POSTGRESQL", t: "pg" }, { label: "DOCKER", t: "dk" }, { label: "TAILWIND CSS", t: "tw" }, { label: "& MORE…" },
];
export const TRAY = [
  { t: "js", text: "JS", label: "JavaScript" }, { t: "php", text: "PHP", label: "PHP" }, { t: "sql", text: "SQL", label: "SQL" },
  { t: "pg", text: "Pg", label: "PostgreSQL" }, { t: "tw", text: "Tw", label: "Tailwind CSS" }, { t: "dk", text: "Dk", label: "Docker" },
];

export const CODE_CARD = `const developer = {
  name: "Mounir L. Maimouni",
  role: "Full Stack Developer",
  focus: ["clean code",
    "scalable systems",
    "innovation"]
};`;

/** Snippets typed on the parchment. 9 lines each: 3 wide lines on top, then 6 short ones. */
export const SNIPPETS: string[][] = [
  ["/** @author Mounir L. Maimouni */", "export const dev = {", '  role: "Full Stack Developer",', '  stack: ["PHP","SQL",', '    "Docker","JS"],', '  ship: () => "done",', "};", "dev.ship();", ""],
  ["export function debounce(fn, ms){", "  let t;", "  return (...a) => {", "    clearTimeout(t);", "    t = setTimeout(", "      () => fn(...a),", "      ms);", "  };", "}"],
  ['r.get("/work", async (_, res)=>{', "  const rows = await db.query(", '    "SELECT * FROM projects");', "  res.json(rows);", "});", "", "export default r;", "", "// Mounir L. Maimouni"],
  ["export function useToggle(v) {", "  const [on, set] = useState(v);", "  const flip = useCallback(() =>", "    set(o=>!o), []);", "  return [on, flip];", "};", "", "// Mounir L. Maimouni", ""],
];