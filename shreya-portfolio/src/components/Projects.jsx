import { ExternalLink, FlaskConical, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";
import { GithubIcon } from "./BrandIcons";

const statusStyles = {
  live: {
    badge:
      "border-emerald-500/25 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
  completed: {
    badge: "border-accent/25 bg-accent-soft text-accent",
    dot: "bg-accent",
  },
  building: {
    badge:
      "border-amber-500/25 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  experimental: {
    badge:
      "border-violet-500/25 bg-violet-500/10 text-violet-700 dark:text-violet-300",
    dot: "bg-violet-500",
  },
};

function StatusBadge({ tone, label, pulsing }) {
  const styles = statusStyles[tone] ?? statusStyles.completed;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${styles.badge}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${styles.dot} ${pulsing ? "pulse-dot" : ""}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title={
            <>
              Ideas,{" "}
              <span className="font-serif italic text-gradient-accent">built</span>{" "}
              into experiences.
            </>
          }
          description="A selection of projects spanning web development, machine learning and experimental hardware — each one a step in learning by making."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                data-reveal
                style={{ transitionDelay: `${Math.min(index, 3) * 80}ms` }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-surface/70 p-6 shadow-[var(--card-shadow)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-[0_30px_70px_-40px_var(--glow)] md:p-8 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {project.featured && (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full border border-accent/15"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border border-dashed border-accent/20"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute right-20 top-16 h-2 w-2 rounded-full bg-accent-2 shadow-[0_0_18px_var(--glow)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-60 blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle, var(--accent-soft), transparent 70%)",
                      }}
                    />
                  </>
                )}

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <StatusBadge
                    tone={project.tone}
                    label={project.status}
                    pulsing={project.tone === "live" || project.tone === "building"}
                  />
                  <span className="font-serif text-xl italic text-muted">
                    {number}
                  </span>
                </div>

                <div className="relative z-10 mt-6 max-w-3xl">
                  <h3 className="flex flex-wrap items-center gap-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-[1.7rem]">
                    {project.title}
                    {project.featured && (
                      <Sparkles
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                    )}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {project.description}
                  </p>

                  {project.note && (
                    <p className="mt-4 flex items-start gap-2 rounded-xl border border-line bg-canvas/40 px-4 py-3 text-xs leading-relaxed text-muted">
                      <FlaskConical
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500 dark:text-violet-300"
                        aria-hidden="true"
                      />
                      {project.note}
                    </p>
                  )}

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-canvas/40 px-3 py-1 text-[11px] font-medium text-ink-soft"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {(project.live || project.github) && (
                  <div className="relative z-10 mt-auto flex flex-wrap items-center gap-3 pt-7">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-contrast transition hover:brightness-110"
                        aria-label={`Live Website — ${project.title} (opens in a new tab)`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        Live Website
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-semibold text-ink-soft transition hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
