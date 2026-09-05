import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import SectionHeader from "../components/SectionHeader";
import MagneticButton from "../components/MagneticButton";
import { stats, aboutParagraphs, aboutQuote, profile } from "../data/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line/40 bg-zinc-50/50 py-16 sm:py-20 md:py-24 lg:py-32 transition-colors duration-300 dark:border-white/[0.05] dark:bg-dark px-4 sm:px-5 md:px-10"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px] dark:bg-gold/[0.04]" />

      <div className="mx-auto max-w-[1140px]">
        <div className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[280px_1fr] lg:gap-16 xl:gap-18">
          {/* Left Column: Stat Cards */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-3.5 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                variant="scale-up"
                delay={0.1 * i}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-line bg-panel p-3.5 sm:p-5 md:p-6 lg:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-gold/40"
              >
                {/* Accent top line on hover */}
                <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

                <div className="font-serif text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] font-bold leading-none text-ink dark:text-zinc-50">
                  <span className="text-gradient-gold">
                    <Counter value={s.value} />
                  </span>
                </div>
                <div className="mt-2 text-[0.75rem] sm:text-[0.8rem] font-medium text-muted dark:text-zinc-400">
                  {s.label}
                </div>
              </Reveal>
            ))}

            {/* Extra summary box */}
            <Reveal
              variant="scale-up"
              delay={0.3}
              className="col-span-2 lg:col-span-1 rounded-xl sm:rounded-2xl border border-gold/20 bg-gold/5 p-3.5 sm:p-5 md:p-6 lg:p-7 text-ink dark:border-gold/20 dark:bg-gold/[0.05] dark:text-zinc-200"
            >
              <div className="flex items-center gap-2 text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider text-gold dark:text-gold-soft">
                <span>⚡ Quick Overview</span>
              </div>
              <p className="mt-2 text-[0.75rem] sm:text-[0.82rem] leading-relaxed text-muted dark:text-zinc-400">
                4th-year IT undergrad focused on architecting scalable full-stack applications with modern web standards.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Bio Content */}
          <div className="flex flex-col">
            <SectionHeader
              label="About Me"
              sub="Passionate about blending functional engineering with thoughtful design."
            >
              Driven by curiosity,{" "}
              <em className="not-italic italic text-gradient-gold">
                crafted with precision.
              </em>
            </SectionHeader>

            {/* Quote Block with Scale Animation */}
            <Reveal
              variant="fade-left"
              delay={0.2}
              className="relative my-2 sm:my-3 md:my-4 overflow-hidden rounded-lg sm:rounded-2xl border-l-4 border-gold bg-panel p-4 sm:p-6 shadow-sm dark:bg-white/[0.02] dark:border-gold"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="font-serif text-4xl sm:text-5xl leading-none text-gold/20 dark:text-gold/15">
                  &quot;
                </span>
                <p className="mt-1 font-serif text-[0.95rem] sm:text-[1.15rem] italic leading-[1.6] sm:leading-[1.65] text-ink dark:text-zinc-200">
                  {aboutQuote}
                </p>
              </motion.div>
            </Reveal>

            {/* Bio Paragraphs */}
            <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4">
              {aboutParagraphs.map((p, i) => (
                <Reveal
                  key={i}
                  variant={i % 2 === 0 ? "fade-left" : "fade-right"}
                  delay={0.25 + 0.1 * i}
                  as="p"
                  className="text-[0.85rem] sm:text-[0.98rem] leading-[1.6] sm:leading-[1.85] text-muted dark:text-zinc-300"
                >
                  {p}
                </Reveal>
              ))}
            </div>

            {/* Resume Button */}
            <Reveal variant="fade-up" delay={0.45} className="mt-6 sm:mt-8">
              <MagneticButton strength={15}>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-lg sm:rounded-xl bg-ink px-5 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-[0.88rem] font-semibold text-paper shadow-sm transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_8px_20px_rgba(197,160,89,0.3)] dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-gold dark:hover:text-white"
                >
                  <span>Download Full Resume</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path d="M21 15v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </a>
              </MagneticButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
