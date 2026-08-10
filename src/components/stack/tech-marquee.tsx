import { stack } from "@/content/stack";

// CSS-only: niente react-fast-marquee, niente client component. La lista
// è duplicata e la seconda metà è aria-hidden, così lo screen reader non
// legge il doppio delle voci. L'animazione si ferma da sola sotto
// prefers-reduced-motion (regola in globals.css).
export function TechMarquee() {
  const track = [...stack, ...stack];

  return (
    <div className="stack-marquee">
      <ul className="stack-track">
        {track.map((tech, index) => (
          <li
            key={`${tech.name}-${index}`}
            className="stack-card"
            aria-hidden={index >= stack.length || undefined}
          >
            <tech.icon className="stack-icon" aria-hidden />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
