import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "../components/Reveal";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import MagneticButton from "../components/MagneticButton";
import { projects } from "../data/content";

export default function Projects() {
  const { scrollYProgress } = useScroll();

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-24 transition-colors duration-300 px-4 sm:px-5 md:px-10"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[300px] sm:h-[400px] md:h-[500px] w-[300px] sm:w-[400px] md:w-[500px] rounded-full bg-gold/10 blur-[80px] sm:blur-[100px] md:blur-[140px] dark:bg-gold/[0.06]" />

      <div className="mx-auto max-w-[1140px]">
        <SectionHeader
          label="Featured Projects"
          sub="Production-ready full-stack applications architected from database to UI, deployed on live infrastructure, and serving real users."
        >
          Work I've <em className="not-italic italic text-gradient-gold">shipped.</em>
        </SectionHeader>

        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} variant="fade-up" delay={0.15 * i}>
              <TiltCard
                maxTilt={4}
                glare={false}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-line bg-panel shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-gold/40"
              >
                <div className="flex flex-col lg:flex-row lg:items-stretch">
                  {/* Project Image Preview - Responsive */}
                  <div className="relative overflow-hidden bg-zinc-200 w-full lg:w-[40%] lg:shrink-0 h-40 sm:h-48 md:h-52 lg:h-auto dark:bg-zinc-800">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-100" />
                    {/* Enhanced gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Project Details - Responsive */}
                  <div className="flex flex-1 flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6">
                    <div>
                      {/* Number and Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-1.5 sm:mb-2 flex items-center justify-between"
                      >
                        <span className="font-mono text-xs font-semibold tracking-wider text-gold dark:text-gold-soft">
                          PROJECT / 0{p.num}
                        </span>
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-tight text-ink dark:text-zinc-100 line-clamp-2"
                      >
                        {p.title}
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="mt-0.5 font-mono text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-wider text-muted dark:text-zinc-400"
                      >
                        {p.tagline}
                      </motion.p>

                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-1.5 sm:mt-2 text-[0.75rem] sm:text-[0.85rem] leading-[1.5] sm:leading-[1.6] text-muted dark:text-zinc-300"
                      >
                        {p.description}
                      </motion.p>

                      {/* Architecture Highlights with stagger animation */}
                      {p.highlights && p.highlights.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.25 }}
                          className="mt-2 sm:mt-2.5 space-y-1"
                        >
                          <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold dark:text-gold-soft">
                            Key Highlights
                          </p>
                          <ul className="space-y-0.5">
                            {p.highlights.map((highlight, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                                className="flex items-start gap-1.5 text-[0.7rem] sm:text-[0.75rem] text-muted dark:text-zinc-400"
                              >
                                <span className="mt-1 h-0.5 w-0.5 shrink-0 rounded-full bg-gold/60 flex-shrink-0" />
                                <span>{highlight}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>

                    {/* Tech Tags & CTA Buttons with stagger animation */}
                    <div className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-line/60 dark:border-white/[0.08]">
                      {/* Tags */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mb-2 sm:mb-2.5 flex flex-wrap gap-1 sm:gap-1.5"
                      >
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-line bg-zinc-50 px-1.5 sm:px-2 py-0.5 font-mono text-[0.6rem] sm:text-[0.65rem] md:text-[0.68rem] font-medium text-zinc-700 transition-all duration-200 hover:border-gold hover:bg-gold/5 dark:border-white/5 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-gold dark:hover:bg-gold/10"
                          >
                            {t}
                          </span>
                        ))}
                      </motion.div>

                      {/* CTA Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row flex-wrap items-center gap-2"
                      >
                        <MagneticButton strength={12}>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 sm:gap-1.5 rounded-lg bg-gold px-2.5 sm:px-3 py-1.5 sm:py-2 text-[0.7rem] sm:text-[0.75rem] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gold-soft hover:shadow-[0_4px_12px_rgba(197,160,89,0.3)] active:scale-[0.98] dark:hover:shadow-[0_4px_12px_rgba(197,160,89,0.3)]"
                          >
                            <span>Live Demo</span>
                            <span>→</span>
                          </a>
                        </MagneticButton>

                        {/* {p.github && (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 font-mono text-[0.65rem] sm:text-[0.7rem] font-semibold text-muted transition-colors hover:text-gold dark:text-zinc-400 dark:hover:text-gold-soft"
                          >
                            <span>Source</span>
                            <span>↗</span>
                          </a>
                        )} */}
                      </motion.div>
                    </div>
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
