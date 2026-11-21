import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="01 — About Me"
          title={
            <>
              Curiosity, meet{" "}
              <span className="font-serif italic text-gradient-accent">
                purposeful
              </span>{" "}
              work.
            </>
          }
          description="A student, a builder and a constant learner — focused on technology that is useful, thoughtful and well made."
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-[1.35fr_0.85fr] lg:gap-10">
          <div data-reveal className="space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[15px] leading-8 text-ink-soft md:text-base"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-2 pt-2">
              {about.values.map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3.5 py-1.5 text-xs font-medium text-ink-soft"
                >
                  <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
                  {value}
                </span>
              ))}
            </div>
          </div>

          <aside
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="panel relative overflow-hidden rounded-3xl p-6 md:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-accent/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full border border-dashed border-accent/20"
            />

            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              At a glance
            </h3>

            <dl className="mt-6 space-y-5">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-line pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex items-center gap-2 text-xs font-medium text-accent">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Always exploring, always learning.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
