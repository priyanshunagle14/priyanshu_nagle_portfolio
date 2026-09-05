import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import { skills } from "../data/content";

const categoryIcons = {
  "Frontend Architecture": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "Backend & Systems": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  "DevOps & Tooling": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 md:py-24 transition-colors duration-300 px-4 sm:px-5 md:px-10"
    >
      <div className="mx-auto max-w-[1140px]">
        <SectionHeader
          label="Skills & Expertise"
          sub="A battle-tested technical stack built through rigorous project implementation, continuous learning, and end-to-end delivery."
        >
          Technologies I{" "}
          <em className="not-italic italic text-gradient-gold">command.</em>
        </SectionHeader>

        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((cat, i) => (
            <Reveal key={cat.name} variant="fade-up" delay={0.12 * i}>
              <TiltCard
                maxTilt={6}
                glare={true}
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-panel p-5 sm:p-6 md:p-7 shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-gold/40"
              >
                {/* Top accent line */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />

                {/* Category Header with Icon Animation */}
                <div className="mb-4 sm:mb-5 md:mb-6 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold transition-transform duration-300 dark:bg-gold/15"
                    >
                      {categoryIcons[cat.name] || categoryIcons["Frontend Architecture"]}
                    </motion.div>
                    <h3 className="font-serif text-base sm:text-lg md:text-[1.25rem] font-medium text-ink dark:text-zinc-100 truncate">
                      {cat.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted dark:text-zinc-500 shrink-0">
                    0{skills.indexOf(cat) + 1}
                  </span>
                </div>

                {/* Tags - Always Visible with Smooth Entrance Animation */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                  className="flex flex-wrap gap-1.5 sm:gap-2"
                >
                  {cat.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={{
                        hidden: { opacity: 0, y: 8, scale: 0.85 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                      }}
                      className="inline-flex items-center rounded-full border border-gold/30 bg-gold/8 px-2.5 sm:px-3 py-1 sm:py-1.5 font-mono text-[0.65rem] sm:text-[0.70rem] md:text-[0.72rem] font-medium tracking-[0.02em] text-gold/80 transition-all duration-200 hover:border-gold/60 hover:bg-gold/15 hover:text-gold dark:border-gold/25 dark:bg-gold/10 dark:text-gold-soft dark:hover:border-gold/50 dark:hover:bg-gold/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
