import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectRow } from "@/components/work/project-row";
import { projects } from "@/content/projects";
import { socials } from "@/content/socials";

export function WorkSection() {
  const github = socials.find((social) => social.id === "github");

  return (
    <Section id="work">
      <SectionHeading
        id="work"
        eyebrow="Selected work"
        title="Built on my own time"
        subtitle="All three are live, and I still maintain them."
      />

      <div className="divide-y divide-line border-y border-line">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}

        {github && (
          <a
            href={github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-6 transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.012] sm:py-7"
          >
            <span className="flex items-center gap-3 text-sm font-medium text-ink">
              <LuArrowRight
                aria-hidden
                className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              />
              More on GitHub
            </span>
            <span className="flex items-center gap-1.5 font-mono text-sm text-ink-subtle">
              grnsmn
              <LuArrowUpRight
                aria-hidden
                size={14}
                className="transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        )}
      </div>
    </Section>
  );
}
