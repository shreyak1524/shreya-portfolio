import {
  ArrowDown,
  ArrowRight,
  Download,
  GraduationCap,
  MapPin,
  Send,
} from "lucide-react";
import { profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

function HeroOrbit() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute left-1/2 top-[46%] h-[26rem] w-[min(58rem,130vw)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl"
        style={{ background: "var(--hero-halo)" }}
      />
      <svg
        viewBox="0 0 1200 620"
        fill="none"
        className="absolute left-1/2 top-[46%] w-[min(1300px,195vw)] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80"
      >
        <defs>
          <linearGradient id="hero-orbit-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
            <stop offset="35%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="65%" stopColor="var(--accent-2)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="hero-planet" cx="32%" cy="28%" r="85%">
            <stop offset="0%" stopColor="var(--accent-2)" />
            <stop offset="65%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="#1a2d66" />
          </radialGradient>
        </defs>

        <ellipse
          cx="600"
          cy="310"
          rx="548"
          ry="222"
          stroke="url(#hero-orbit-line)"
          strokeWidth="1"
        />
        <ellipse
          cx="600"
          cy="310"
          rx="404"
          ry="154"
          stroke="url(#hero-orbit-line)"
          strokeWidth="1"
          strokeDasharray="2 9"
          opacity="0.55"
          transform="rotate(-6 600 310)"
        />
        <circle cx="1148" cy="310" r="3" fill="var(--accent-2)" opacity="0.85" />
        <circle cx="196" cy="310" r="2" fill="var(--accent)" opacity="0.65" />

        <g className="planet-float">
          <ellipse
            cx="1012"
            cy="142"
            rx="18"
            ry="5.5"
            stroke="var(--accent-2)"
            strokeOpacity="0.55"
            transform="rotate(-20 1012 142)"
          />
          <circle cx="1012" cy="142" r="9" fill="url(#hero-planet)" />
          <circle cx="1008" cy="138" r="2.2" fill="var(--accent-2)" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-24 sm:pt-28 md:pb-28 md:pt-32"
    >
      <HeroOrbit />

      <div className="container-shell relative z-10 text-center">
        <div
          data-reveal
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted backdrop-blur"
        >
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.role}
        </div>

        <h1
          data-reveal
          style={{ transitionDelay: "70ms" }}
          className="name-glow mx-auto mt-7 max-w-5xl font-display text-[clamp(2.7rem,9vw,7rem)] font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-ink"
        >
          <span className="block sm:inline">Shreya</span>{" "}
          <span className="text-gradient-name block sm:inline">Kumbhar</span>
        </h1>

        <h2
          data-reveal
          style={{ transitionDelay: "140ms" }}
          className="mx-auto mt-8 max-w-3xl text-balance font-display text-xl font-medium leading-snug text-ink-soft sm:text-2xl md:text-[2rem]"
        >
          Turning ideas into{" "}
          <span className="font-serif italic text-gradient-accent">meaningful</span>{" "}
          digital experiences.
        </h2>

        <p
          data-reveal
          style={{ transitionDelay: "210ms" }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted sm:text-base"
        >
          {profile.intro}
        </p>

        <div
          data-reveal
          style={{ transitionDelay: "280ms" }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast shadow-[0_16px_45px_-18px_var(--glow)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
          >
            Explore My Projects
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent sm:w-auto"
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Contact Me
          </a>
          <a
            href={profile.resume}
            download="Shreya-Kumbhar-Resume.pdf"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 text-sm font-medium text-muted transition duration-300 hover:-translate-y-0.5 hover:border-line hover:bg-surface/50 hover:text-accent sm:w-auto"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "350ms" }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-line" aria-hidden="true" />
          <SocialLinks />
          <span className="h-px w-10 bg-line" aria-hidden="true" />
        </div>

        <div
          data-reveal
          style={{ transitionDelay: "410ms" }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-muted"
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {profile.location}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-line-strong sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            B.Tech · 2025–2029
          </span>
        </div>

        <a
          href="#about"
          className="group mx-auto mt-12 hidden w-fit flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted transition hover:text-accent sm:flex"
          aria-label="Scroll to the About section"
        >
          Scroll
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition group-hover:border-accent/40">
            <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
