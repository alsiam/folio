import { LuChevronRight } from "react-icons/lu";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/experience/timeline";
import { TimelineItem } from "@/components/experience/timeline-item";
import { education } from "@/content/education";
import { jobs } from "@/content/experience";
import type { Education } from "@/content/types";
import { formatJobPeriod } from "@/lib/format";

// Le due voci più datate (diploma 2009, stage audio 2018) vanno dietro
// <details>: riequilibra la colonna Education (4 titoli) contro
// Experience (2 ruoli) senza nascondere nulla, solo un tap di distanza.
const RECENT_EDUCATION = education.slice(0, 2);
const EARLIER_EDUCATION = education.slice(2);

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" eyebrow="Background" title="Experience & education" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink-subtle">
            Experience
          </h3>
          <Timeline>
            {jobs.map((job) => (
              <TimelineItem
                key={job.id}
                date={formatJobPeriod(job.start, job.end)}
                title={job.role}
              >
                <p className="text-sm text-ink-muted">
                  {job.companyHref ? (
                    <a
                      href={job.companyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line underline-offset-2 hover:text-ink hover:decoration-ink-muted"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  , {job.location}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-ink-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {job.links && (
                  <p className="mt-2 flex flex-wrap gap-4">
                    {job.links.map((link) => (
                      <ArrowLink key={link.href} href={link.href} external className="text-xs">
                        {link.label}
                      </ArrowLink>
                    ))}
                  </p>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-ink-subtle">
            Education
          </h3>
          <Timeline>
            {RECENT_EDUCATION.map((entry) => (
              <EducationItem key={entry.id} entry={entry} />
            ))}
          </Timeline>

          {EARLIER_EDUCATION.length > 0 && (
            <details className="group mt-6">
              <summary className="flex cursor-pointer items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                <LuChevronRight
                  aria-hidden
                  size={14}
                  className="transition-transform group-open:rotate-90"
                />
                Earlier education
              </summary>
              <div className="mt-6">
                <Timeline>
                  {EARLIER_EDUCATION.map((entry) => (
                    <EducationItem key={entry.id} entry={entry} />
                  ))}
                </Timeline>
              </div>
            </details>
          )}
        </div>
      </div>
    </Section>
  );
}

function EducationItem({ entry }: { entry: Education }) {
  return (
    <TimelineItem date={entry.date} title={entry.qualification}>
      <p className="text-sm text-ink-muted">
        {entry.institutionHref ? (
          <a
            href={entry.institutionHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-line underline-offset-2 hover:text-ink hover:decoration-ink-muted"
          >
            {entry.institution}
          </a>
        ) : (
          entry.institution
        )}
      </p>
      {entry.bullets && (
        <ul className="mt-2 space-y-1 text-sm text-ink-muted">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {entry.grade && (
        <p className="mt-1 text-sm text-ink-subtle">Final grade: {entry.grade}</p>
      )}
    </TimelineItem>
  );
}
