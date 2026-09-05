import { motion } from "framer-motion";
import { profile } from "../data/content";
import ParticleField from "../components/ParticleField";
import MagneticButton from "../components/MagneticButton";
import TiltCard from "../components/TiltCard";
import FloatingShapes from "../components/FloatingShapes";
import AnimatedGradient from "../components/AnimatedGradient";
import { StaggeredText, Typewriter } from "../components/TextReveal";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({ top, behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-5 pt-28 pb-16 md:min-h-screen md:px-10 md:pt-32 md:pb-20"
    >
      {/* Floating Shapes Background */}
      <FloatingShapes />

      {/* Interactive Particle Canvas */}
      <ParticleField />

      {/* Subtle Background Glow Elements */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px] dark:bg-gold/[0.07]" />
      <div className="pointer-events-none absolute bottom-0 right-10 -z-10 h-[300px] w-[300px] rounded-full bg-amber-500/5 blur-[100px] dark:bg-gold/[0.05]" />

      <div className="mx-auto grid w-full max-w-[1140px] items-center gap-8 sm:gap-12 md:grid-cols-[1fr_380px] lg:grid-cols-[1.1fr_400px] md:gap-16">
        {/* Left Column: Intro & Headline */}
        <div className="relative z-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 font-mono text-[0.72rem] font-medium tracking-[0.08em] text-gold dark:border-gold/30 dark:bg-gold/10 dark:text-gold-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3d9e56] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#3d9e56]" />
            </span>
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="font-serif text-[clamp(2rem,5.5vw,4.8rem)] leading-[1.04] tracking-[-0.03em] text-ink dark:text-zinc-50">
            <StaggeredText text={profile.firstName} delay={0.1} />
            <br />
            <em className="not-italic italic text-gradient-gold">
              <StaggeredText text={profile.lastName} delay={0.3} />
            </em>
            <br />
            <span className="text-[clamp(1rem,3.2vw,2.6rem)] font-light tracking-[-0.02em] text-muted dark:text-zinc-400">
              {profile.role}
            </span>
          </h1>

          {/* Tagline with Typewriter feature */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 sm:mt-5 max-w-[480px] text-[0.85rem] sm:text-[1rem] leading-[1.6] sm:leading-[1.75] text-muted dark:text-zinc-300"
          >
            <p className="mb-2">{profile.tagline}</p>
            <div className="font-mono text-[0.7rem] sm:text-[0.8rem] text-gold dark:text-gold-soft">
              <span>&gt; </span>
              <Typewriter
                words={[
                  "Crafting responsive full-stack web apps",
                  "Designing high-performance backend APIs",
                  "Building real-time collaborative platforms",
                  "Solving real-world problems with clean code",
                ]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseTime={2200}
              />
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center gap-2.5 sm:gap-3.5"
          >
            <MagneticButton strength={18}>
              <button
                onClick={() => scrollTo("projects")}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-ink px-5 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-[0.88rem] font-semibold text-paper shadow-md transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_8px_24px_rgba(203,162,50,0.35)] dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-gold dark:hover:text-white"
              >
                <span>View My Work</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </MagneticButton>

            <MagneticButton strength={15}>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel/70 px-5 sm:px-6 py-2.5 sm:py-3.5 text-[0.8rem] sm:text-[0.88rem] font-medium text-ink shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gold/60 hover:text-gold dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-gold/50 dark:hover:text-gold-soft"
              >
                Let's Talk
              </button>
            </MagneticButton>

            {/* <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[0.75rem] sm:text-[0.82rem] font-medium text-muted transition-colors hover:text-gold dark:text-zinc-400 dark:hover:text-gold-soft"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Resume</span>
            </a> */}
          </motion.div>
        </div>

        {/* Right Column: 3D Tilt Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px] md:max-w-none"
        >
          <TiltCard
            maxTilt={10}
            className="group relative overflow-hidden rounded-2xl border border-line/80 bg-panel/80 p-2.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:shadow-[0_20px_40px_rgba(203,162,50,0.15)] dark:border-white/10 dark:bg-zinc-900/80 dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Live Indicator Badge */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-[0.72rem] font-medium text-zinc-900 shadow-md backdrop-blur-md dark:border-white/15 dark:bg-black/75 dark:text-white">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#3d9e56]" />
              <span>Full Stack Dev</span>
            </div>

            {/* Profile Image with subtle zoom on hover */}
            <div className="overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src={profile.photo}
                alt={profile.name}
                loading="eager"
                className="aspect-[3/4] w-full object-cover object-top filter transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Bottom mini bar with quick stats */}
            <div className="mt-3 flex items-center justify-between px-2 py-1 text-[0.75rem]">
              <span className="font-mono text-muted dark:text-zinc-400">
                {profile.location.split(",")[0]}, IN
              </span>
              {/* <span className="font-mono font-medium text-gold">
                CGPA 9.15
              </span> */}
            </div>
          </TiltCard>

          {/* Decorative floating backdrop glow */}
          <div className="pointer-events-none absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-full bg-gold/20 blur-2xl dark:bg-gold/10" />
        </motion.div>
      </div>

      {/* Scroll Down Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted/80 dark:text-zinc-500">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-7 w-4 rounded-full border border-line p-0.5 dark:border-zinc-700"
        >
          <div className="h-1.5 w-1 rounded-full bg-gold mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
