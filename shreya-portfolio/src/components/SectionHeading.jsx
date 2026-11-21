export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const centered = align === "center";

  return (
    <div
      data-reveal
      className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}
    >
      <span className={`eyebrow ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-accent/50" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
