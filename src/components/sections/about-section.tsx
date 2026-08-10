import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <Section id="about" noTopBorder>
      <SectionHeading id="about" title="About" />

      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">
        <div className="about-photo relative mx-auto size-48 shrink-0 rounded-full sm:mx-0 sm:size-56">
          <Image
            src="/imgs/GS-Photo.webp"
            alt="Simone Guarnuccio"
            fill
            sizes="224px"
            className="rounded-full object-cover"
          />
        </div>

        <div className="space-y-4 text-ink-muted">
          <p>
            I&apos;m a frontend developer based in Catania, Italy — I move
            between web and mobile without treating either as the exception.
            Lately that&apos;s meant building interfaces in React and React
            Native side by side, learning where their idioms actually overlap
            and where pretending they do just causes pain.
          </p>
          <p>
            At Creationdose I maintain Vidoser&apos;s design system, built on
            Gluestack UI so the same components hold up on both the creator
            app and the web platform behind it — a constraint that&apos;s
            taught me more about primitives than any single-platform project
            would have.
          </p>
        </div>
      </div>
    </Section>
  );
}
