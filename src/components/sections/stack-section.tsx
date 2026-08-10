import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechMarquee } from "@/components/stack/tech-marquee";

export function StackSection() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div aria-hidden className="vidoser-thread absolute inset-x-0 top-0 h-px" />
      <Container>
        <SectionHeading id="stack" eyebrow="Toolbox" title="Tools I reach for" />
      </Container>

      {/* Full-bleed di proposito: l'unico punto del sito che rompe il
          Container, o il marquee leggerebbe come una riga qualsiasi
          invece che come un nastro che scorre oltre i margini. */}
      <div className="mt-4 w-screen mr-[calc(50%-50vw)] ml-[calc(50%-50vw)]">
        <TechMarquee />
      </div>
    </section>
  );
}
