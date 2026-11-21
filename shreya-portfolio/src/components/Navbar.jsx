import { useEffect, useState } from "react";
import { Menu, Moon, Orbit, Sun, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-38% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-shell flex h-16 items-center justify-between gap-4 md:h-20">
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full border border-line bg-surface/60 text-accent transition duration-300 group-hover:border-accent/40 group-hover:bg-accent-soft">
            <Orbit className="h-[18px] w-[18px]" aria-hidden="true" />
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent-2 shadow-[0_0_10px_var(--glow)]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm font-semibold tracking-wide text-ink">
              {profile.name}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted">
              Portfolio
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
                    aria-current={active === link.id ? "location" : undefined}
              className={`rounded-full px-2.5 py-2 text-[12.5px] font-medium transition-colors duration-200 ${
                active === link.id
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-muted transition duration-300 hover:border-accent/40 hover:bg-accent-soft hover:text-accent"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-muted transition hover:border-accent/40 hover:text-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="border-t border-line bg-canvas/95 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Mobile" className="container-shell py-4">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
              aria-current={active === link.id ? "location" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active === link.id
                        ? "bg-accent-soft text-accent"
                        : "text-ink-soft hover:bg-surface-2 hover:text-ink"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-serif text-sm italic text-muted">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
