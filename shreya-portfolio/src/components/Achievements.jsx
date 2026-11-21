import { Award, BadgeCheck, Lightbulb, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/portfolio";

const icons = {
  award: Award,
  grade: BadgeCheck,
  idea: Lightbulb,
  milestone: Star,
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="05 — Achievements"
          title={
            <>
              Milestones worth{" "}
              <span className="font-serif italic text-gradient-accent">noting.</span>
            </>
          }
          description="Factual highlights from certifications, participation and ongoing academic work."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = icons[achievement.icon] ?? Star;

            return (
              <div
                key={achievement.title}
                data-reveal
                style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}
                className="panel group relative overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 md:p-7"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-4 font-serif text-5xl italic leading-none text-muted/80"
                >
                  0{index + 1}
                </span>

                <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/20 bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {achievement.title}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-7 text-muted">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
