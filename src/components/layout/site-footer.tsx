import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { socials } from "@/content/socials";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-ink-subtle sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="grid size-9 place-items-center rounded-lg transition-colors hover:bg-surface-hover hover:text-ink"
            >
              <social.icon size={16} aria-hidden />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
