import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { IconLink } from "@/components/ui/icon-link";
import { site } from "@/content/site";
import { socials } from "@/content/socials";

export function Hero() {
  return (
    <section aria-label="Intro" className="relative">
      <Container className="flex flex-col gap-6 py-20 sm:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-subtle">
          {site.location} · {site.role} @ Creationdose
        </p>

        <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          I build interfaces for the web and for phones.
        </h1>

        <p className="max-w-xl text-lg text-ink-muted">
          Right now I&apos;m building{" "}
          <a
            href="https://vidoser.com/it/per-creator/app"
            target="_blank"
            rel="noopener noreferrer"
            className="vidoser-underline font-medium text-ink"
          >
            Vidoser
          </a>{" "}
          — the creator app and the platform behind it.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <ButtonLink href="#work">View work</ButtonLink>
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
        </div>
      </Container>

      {/* Unica animazione perpetua del sito: filo col gradiente Vidoser
          che segna il confine con la sezione dopo, invece di una freccia. */}
      <div aria-hidden className="hero-thread absolute inset-x-0 bottom-0 h-px" />
    </section>
  );
}
