import { CalendarRange, GraduationCap, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="06 — Education"
          title={
            <>
              The{" "}
              <span className="font-serif italic text-gradient-accent">
                foundation.
              </span>
            </>
          }
          description="Building a strong academic base in artificial intelligence, data science and software development."
        />

        <div
          data-reveal
          className="panel relative mt-12 overflow-hidden rounded-3xl p-6 md:p-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-accent/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-dashed border-accent/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-24 top-10 h-1.5 w-1.5 rounded-full bg-accent-2 shadow-[0_0_16px_var(--glow)]"
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.45fr_0.55fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-accent/25 bg-accent-soft px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {education.status}
                </span>
              </div>

              <h3 className="mt-6 max-w-2xl font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-[1.75rem]">
                {education.degree}
              </h3>

              <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-ink-soft">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>
                  {education.institution}
                  <span className="mt-0.5 block text-muted">{education.location}</span>
                </span>
              </p>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                {education.focus}
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-canvas/40 p-5 text-center lg:p-6">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
                <CalendarRange className="h-3.5 w-3.5" aria-hidden="true" />
                Duration
              </span>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-gradient-accent sm:text-3xl">
                {education.duration}
              </p>
              <div className="mt-5 flex items-center gap-2" aria-hidden="true">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="h-px flex-1 bg-line-strong" />
                <span className="h-1.5 w-1.5 rounded-full border border-accent/60 bg-canvas" />
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-muted">
                B.Tech program
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
