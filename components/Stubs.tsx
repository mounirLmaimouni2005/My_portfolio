/** Placeholder sections so every nav link lands somewhere. Replace with real content next. */
const SECTIONS = [
  { id: "about", title: "About", text: "Section coming next." },
  { id: "projects", title: "Projects", text: "Section coming next." },
  { id: "technologies", title: "Technologies", text: "Section coming next." },
  { id: "contact", title: "Contact", text: "Contact links to be added." },
];

export default function Stubs() {
  return (
    <div className="stubs grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
      {SECTIONS.map((s) => (
        <section key={s.id} className="pap" id={s.id}>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </section>
      ))}
    </div>
  );
}