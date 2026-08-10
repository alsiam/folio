import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";
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
