import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/portfolio";

const linkClass =
  "group grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-muted transition duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent-soft hover:text-accent";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={profile.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Shreya Kumbhar on LinkedIn"
        title="LinkedIn"
      >
        <LinkedinIcon className="h-4 w-4" />
      </a>
      <a
        href={profile.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label="Shreya Kumbhar on GitHub"
        title="GitHub"
      >
        <GithubIcon className="h-4 w-4" />
      </a>
      <a
        href={`mailto:${profile.email}`}
        className={linkClass}
        aria-label={`Email Shreya Kumbhar at ${profile.email}`}
        title="Email"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
