import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import { education } from "../data/content";

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

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 px-4 sm:px-5 md:px-10"
    >
      <div className="mx-auto max-w-[1140px]">
        <SectionHeader
          label="Background"
          sub="Consistent academic rigor and structured foundational learning in computer science and technology."
        >
          My academic{" "}
          <em className="not-italic italic text-gradient-gold">journey.</em>
        </SectionHeader>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} variant="fade-up" delay={0.1 * (i + 1)}>
              <TiltCard
                maxTilt={6}
                glare={false}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-line bg-panel p-4 sm:p-5 md:p-6 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-gold/40"
              >
                {/* Accent line on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

                <div>
                  {/* Icon & Status */}
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

                  {/* Degree Title */}
                  <h3 className="text-[0.95rem] sm:text-[1.05rem] font-semibold leading-snug text-ink dark:text-zinc-100">
                    {e.degree}
                  </h3>

                  {/* School / Board */}
                  <p className="mt-1 text-[0.75rem] sm:text-[0.85rem] text-muted dark:text-zinc-400">
                    {e.school}
                  </p>
                </div>

                {/* Grade Badge */}
                <div className="mt-4 sm:mt-6 border-t border-line/60 pt-3 sm:pt-4 dark:border-white/[0.07]">
                  <div className="flex items-center justify-between text-[0.7rem] sm:text-xs">
                    <span className="text-muted dark:text-zinc-500">
                      Score / Grade
                    </span>
                    <span className="font-mono font-semibold text-ink dark:text-zinc-200">
                      {e.grade}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
