type SectionHeadingProps = {
  /** Deve combaciare con l'id della Section: Section punta qui via
   * aria-labelledby, non il contrario. */
  id: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
};

export function SectionHeading({ id, title, eyebrow, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-subtle">
          {eyebrow}
        </p>
      )}
      <h2
        id={`${id}-heading`}
        className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-lg text-ink-muted">{subtitle}</p>}
    </div>
  );
}
