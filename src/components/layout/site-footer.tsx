import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";
import { site } from "@/content/site";
import { socials } from "@/content/socials";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center gap-4 py-10 text-sm text-ink-subtle sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
            {site.email}
          </a>
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            Source
          </a>
        </div>
        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <IconLink
              key={social.id}
              href={social.href}
              label={social.label}
              icon={social.icon}
            />
          ))}
        </div>
      </Container>
    </footer>
  );
}
