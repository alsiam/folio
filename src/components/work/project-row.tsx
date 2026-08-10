import Image from "next/image";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";

export function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="group relative py-6 transition-transform duration-200 ease-out hover:z-10 hover:scale-[1.012] sm:py-8">
      <div className="flex items-center gap-6 sm:gap-8">
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-ink">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="after:absolute after:inset-0 after:z-0"
            >
              {project.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-ink-muted">{project.summary}</p>
          <div className="relative z-10 mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </div>

        <div className="relative size-[8.5rem] shrink-0 overflow-hidden rounded-xl border border-line bg-surface">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="136px"
            className={cn(
              project.image.fit === "contain" ? "object-contain p-4" : "object-cover",
            )}
            style={
              project.image.invertInDark
                ? { filter: "invert(var(--mark-invert))" }
                : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
