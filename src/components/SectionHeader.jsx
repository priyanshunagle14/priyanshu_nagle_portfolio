import Reveal from "./Reveal";

export default function SectionHeader({
  label,
  children,
  sub,
  center = false,
  badge = true,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""}`}>
      {label && (
        <Reveal variant="fade-down" distance={12} delay={0.05}>
          {badge ? (
            <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold dark:border-gold/30 dark:bg-gold/10 dark:text-gold-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {label}
            </span>
          ) : (
            <div className="mb-2.5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-gold">
              {label}
            </div>
          )}
        </Reveal>
      )}

      <Reveal variant="fade-up" delay={0.1}>
        <h2 className="font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.12] tracking-[-0.025em] text-ink dark:text-zinc-50">
          {children}
        </h2>
      </Reveal>

      {sub && (
        <Reveal variant="fade-up" delay={0.18}>
          <p
            className={`mt-3.5 text-[0.98rem] leading-[1.8] text-muted dark:text-zinc-400 ${
              center ? "mx-auto max-w-[560px]" : "max-w-[520px]"
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
