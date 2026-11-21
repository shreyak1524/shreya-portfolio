import {
  BrainCircuit,
  Code2,
  Database,
  Globe,
  Sparkles,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";

const icons = {
  code: Code2,
  web: Globe,
  database: Database,
  brain: BrainCircuit,
  tools: Wrench,
  learning: Sparkles,
};

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="02 — Skills"
          title={
            <>
              A growing{" "}
              <span className="font-serif italic text-gradient-accent">toolkit.</span>
            </>
          }
          description="Technologies I work with while learning, building and experimenting — developed through coursework, projects and continuous practice."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] ?? Sparkles;

            return (
              <div
                key={group.title}
                data-reveal
                style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
                className={`group relative flex flex-col rounded-2xl p-6 transition duration-300 hover:-translate-y-1 ${
                  group.current
                    ? "border border-dashed border-accent/35 bg-accent-soft/40"
                    : "panel hover:border-accent/30"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  {group.current && (
                    <span className="rounded-full border border-accent/25 bg-accent-soft px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-accent">
                      In progress
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-base font-semibold text-ink">
                  {group.title}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-canvas/40 px-3 py-1 text-xs text-ink-soft transition group-hover:border-line-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
