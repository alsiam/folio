import { stack } from "@/content/stack";

// CSS-only: niente react-fast-marquee, niente client component. La lista
// è duplicata e la seconda metà è aria-hidden, così lo screen reader non
// legge 40 voci invece di 20. L'animazione si ferma da sola sotto
// prefers-reduced-motion (regola in style.css) e la libreria che
// sostituisce non gestiva questo caso.
const TechMarquee = () => {
  const track = [...stack, ...stack];

  return (
    <div className="tecnologie-marquee my-10">
      <ul className="tecnologie-track">
        {track.map((tech, index) => (
          <li
            key={`${tech.name}-${index}`}
            className="tecnologie-card"
            aria-hidden={index >= stack.length || undefined}
          >
            <tech.icon className="tecnologie-icon" aria-hidden />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechMarquee;
