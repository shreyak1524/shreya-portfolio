import { ArrowUpRight, Download, Mail, Sparkles } from "lucide-react";
import { contact, profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

function BreakableValue({ value }) {
  const chunks = value.match(/[^@./-]+[@./-]?/g) ?? [value];

  return chunks.map((chunk, index) => (
    <span key={`${chunk}-${index}`}>
      {chunk}
      {index < chunks.length - 1 && <wbr />}
    </span>
  ));
}

function ContactLink({ icon: Icon, label, value, href, external = false }) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-canvas/40 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-surface/60 text-accent">
        <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
        <span className="mt-1 block break-words text-[12.5px] font-medium leading-relaxed text-ink">
          <BreakableValue value={value} />
        </span>
      </span>
      <ArrowUpRight
        className="h-4 w-4 shrink-0 text-muted transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        aria-hidden="true"
      />
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <div
          data-reveal
          className="relative overflow-hidden rounded-[2rem] border border-line bg-surface/70 p-6 shadow-[var(--card-shadow)] backdrop-blur-sm sm:p-10 md:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-accent/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-dashed border-accent/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background: "radial-gradient(circle, var(--glow), transparent 70%)",
            }}
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div>
              <span className="eyebrow">
                <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
                07 — Contact
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Let&apos;s{" "}
                <span className="font-serif italic text-gradient-accent">
                  Connect
                </span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted md:text-base">
                {contact.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast shadow-[0_16px_45px_-18px_var(--glow)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Me
                </a>
                <a
                  href={profile.resume}
                  download="Shreya-Kumbhar-Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Resume
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 text-xs text-muted">
                <Sparkles className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                Always happy to learn, connect and collaborate.
              </p>
            </div>

            <div className="space-y-3">
              <ContactLink
                icon={Mail}
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
              />
              <ContactLink
                icon={LinkedinIcon}
                label="LinkedIn"
                value="linkedin.com/in/shreya-kumbhar"
                href={profile.socials.linkedin}
                external
              />
              <ContactLink
                icon={GithubIcon}
                label="GitHub"
                value="github.com/shreyak1524"
                href={profile.socials.github}
                external
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
