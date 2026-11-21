import { ArrowUp, Orbit } from "lucide-react";
import { footer, profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line">
      <div className="container-shell py-14">
        <div className="flex flex-col items-center gap-6 text-center">
          <a
            href="#home"
            className="group inline-flex items-center gap-3"
            aria-label="Shreya Kumbhar — back to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-accent transition group-hover:border-accent/40 group-hover:bg-accent-soft">
              <Orbit className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-semibold tracking-wide text-ink">
              {profile.name}
            </span>
          </a>

          <p className="font-serif text-2xl italic text-gradient-accent sm:text-3xl">
            {footer.tagline}
          </p>

          <SocialLinks />

          <div className="hairline h-px w-full max-w-lg" aria-hidden="true" />

          <div className="flex w-full flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
            <p>
              © {year} {profile.name}. All rights reserved.
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 font-medium transition hover:text-accent"
            >
              Back to top
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
