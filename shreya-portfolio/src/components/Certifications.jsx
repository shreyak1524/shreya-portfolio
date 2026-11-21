import {
  Award,
  BrainCircuit,
  CalendarDays,
  Code2,
  ExternalLink,
  MessageSquare,
  Palette,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/certifications";

const icons = {
  award: Award,
  brain: BrainCircuit,
  code: Code2,
  design: Palette,
  idea: Lightbulb,
  communication: MessageSquare,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="container-shell">
        <SectionHeading
          eyebrow="04 — Certifications"
          title={
            <>
              Credentials &{" "}
              <span className="font-serif italic text-gradient-accent">learning.</span>
            </>
          }
          description="Certifications and programs from my academic journey."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {certifications.map((cert, index) => {
            const Icon = icons[cert.icon] ?? Award;
            const isParticipation =
              cert.detail?.toLowerCase() === "participation";

            return (
              <article
                key={cert.id}
                data-reveal
                style={{ transitionDelay: `${Math.min(index, 3) * 60}ms` }}
                className="panel group flex gap-4 rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 md:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                    <h3 className="font-display text-[15px] font-semibold leading-snug text-ink md:text-base">
                      {cert.title}
                    </h3>
                    {cert.detail && (
                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] ${
                          isParticipation
                            ? "border-line bg-canvas/40 text-muted"
                            : "border-accent/25 bg-accent-soft text-accent"
                        }`}
                      >
                        {cert.detail}
                      </span>
                    )}
                  </div>

                  {cert.issuer && (
                    <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                      {cert.issuer}
                    </p>
                  )}

                  {cert.note && (
                    <p className="mt-3 text-xs leading-relaxed text-muted">
                      {cert.note}
                    </p>
                  )}

                  {(cert.date || cert.link) && (
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-muted">
                      {cert.date && (
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {cert.date}
                        </span>
                      )}
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
                        >
                          View credential
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
