import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import { certifications, education } from "../data/content";

const icons = {
  cap: (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  monitor: (
    <>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </>
  ),
};

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden border-t border-line/40 bg-zinc-50/50 py-16 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 dark:border-white/[0.05] dark:bg-dark px-4 sm:px-5 md:px-10"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-0 left-1/3 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gold/5 blur-[100px] dark:bg-gold/[0.03]" />

      <div className="mx-auto max-w-[1140px]">
        <SectionHeader
          label="Credentials"
          sub="Professional certifications and structured academic credentials demonstrating expertise in full-stack development and computer science fundamentals."
        >
          Education &{" "}
          <em className="not-italic italic text-gradient-gold">
            Certifications.
          </em>
        </SectionHeader>

        {/* Certifications Section */}
        {certifications.length > 0 && (
          <div className="mb-12 sm:mb-14 md:mb-16">
            <Reveal variant="fade-down" delay={0.08}>
              <h3 className="mb-4 sm:mb-5 md:mb-6 font-serif text-lg sm:text-xl font-medium text-ink dark:text-zinc-100">
                Professional Certifications
              </h3>
            </Reveal>

            <div className="space-y-3 sm:space-y-4">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} variant="fade-up" delay={0.12 * (i + 1)}>
                  <div className="group relative overflow-hidden rounded-lg sm:rounded-2xl border border-line bg-white p-4 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-gold/40">
                    {/* Accent line on hover */}
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4 md:gap-6">
                      <div className="flex-1 min-w-0">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <h4 className="font-serif text-base sm:text-lg font-semibold text-ink dark:text-zinc-100">
                            {cert.title}
                          </h4>
                          {cert.verified && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 sm:px-2.5 py-0.5 text-[0.65rem] sm:text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-[0.75rem] sm:text-sm text-muted dark:text-zinc-400">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="mt-2 sm:mt-3 text-[0.8rem] sm:text-sm leading-relaxed text-muted dark:text-zinc-300">
                          {cert.description}
                        </p>

                        {/* Skills/Technologies */}
                        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                          {cert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-md border border-line bg-zinc-50/80 px-2 sm:px-2.5 py-0.5 font-mono text-[0.65rem] sm:text-xs font-medium text-zinc-700 dark:border-white/5 dark:bg-white/5 dark:text-zinc-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Badge Icon */}
                      <div className="shrink-0">
                        <div className="grid h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 place-items-center rounded-lg sm:rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 dark:border-gold/30 dark:bg-gold/15 dark:text-gold-soft">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 sm:h-7 md:h-8 w-6 sm:w-7 md:w-8"
                          >
                            <path d="M6 9c0-1 .895-2 2-2h8c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V9z" />
                            <path d="M9 12l2 2 4-4" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        <div>
          <Reveal variant="fade-down" delay={0.08}>
            <h3 className="mb-4 sm:mb-5 md:mb-6 font-serif text-lg sm:text-xl font-medium text-ink dark:text-zinc-100">
              Academic Background
            </h3>
          </Reveal>

          <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {education.map((e, i) => (
              <Reveal key={e.degree} variant="fade-up" delay={0.1 * (i + 1)}>
                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg sm:rounded-2xl border border-line bg-panel p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-gold/40">
                  {/* Accent line on hover */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

                  <div>
                    {/* Icon & Year */}
                    <div className="mb-3 sm:mb-4 flex items-center justify-between">
                      <div className="grid h-9 sm:h-11 w-9 sm:w-11 place-items-center rounded-lg sm:rounded-xl bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110 dark:bg-gold/15">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 sm:h-5 w-4 sm:w-5"
                        >
                          {icons[e.icon]}
                        </svg>
                      </div>

                      <span className="rounded-full border border-gold/30 bg-gold/10 px-2 sm:px-2.5 py-0.5 font-mono text-[0.6rem] sm:text-[0.68rem] font-medium text-gold dark:border-gold/30 dark:bg-gold/15 dark:text-gold-soft">
                        {e.year}
                      </span>
                    </div>

                    {/* Degree & School */}
                    <h4 className="text-[0.95rem] sm:text-[1.05rem] font-semibold leading-snug text-ink dark:text-zinc-100">
                      {e.degree}
                    </h4>

                    <p className="mt-1 text-[0.75rem] sm:text-[0.85rem] text-muted dark:text-zinc-400">
                      {e.school}
                    </p>

                    {e.details && (
                      <p className="mt-2 sm:mt-3 text-[0.7rem] sm:text-[0.8rem] leading-relaxed text-muted/70 dark:text-zinc-500">
                        {e.details}
                      </p>
                    )}
                  </div>

                  {/* Grade Badge */}
                  <div className="mt-4 sm:mt-6 border-t border-line/60 pt-3 sm:pt-4 dark:border-white/[0.07]">
                    <div className="flex items-center justify-between text-[0.7rem] sm:text-xs">
                      <span className="text-muted dark:text-zinc-500">
                        Performance
                      </span>
                      <span className="font-mono font-semibold text-ink dark:text-zinc-200">
                        {e.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
