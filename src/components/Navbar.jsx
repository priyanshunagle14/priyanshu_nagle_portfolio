import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { navLinks } from "../data/content";
import ThemeToggle from "./ThemeToggle";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "education", "contact"];

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 140;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 inset-x-0 z-[1000] h-[2.5px] origin-left bg-gradient-to-r from-gold via-gold-soft to-gold shadow-[0_0_8px_rgba(203,162,50,0.6)]"
      />

      <header
        className={`fixed inset-x-0 top-0 z-[900] flex h-14 sm:h-16 items-center justify-between px-4 sm:px-5 md:px-10 transition-all duration-300 ${
          scrolled
            ? "border-b border-line/60 bg-paper/85 shadow-sm backdrop-blur-xl dark:border-white/[0.07] dark:bg-darker/85 dark:shadow-none"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => go(e, "home")}
          className="group flex items-center gap-1 font-serif text-[1.2rem] sm:text-[1.4rem] tracking-tight text-ink transition-transform hover:scale-105 dark:text-zinc-100"
        >
          <span>P</span>
          <span className="font-normal text-gold transition-all duration-300 group-hover:text-gold-soft">
            .
          </span>
          <span>N</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-line/70 bg-panel/70 p-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => go(e, link.id)}
                className={`relative rounded-full px-3 sm:px-3.5 py-1.5 text-[0.7rem] sm:text-[0.78rem] font-medium tracking-[0.04em] transition-colors duration-200 ${
                  isActive
                    ? "text-ink dark:text-white"
                    : "text-muted hover:text-ink dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-black/5 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Actions (Theme Toggle + CTA) */}
        <div className="hidden items-center gap-2 md:gap-2.5 md:flex">
          <ThemeToggle />

          <MagneticButton strength={15}>
            <a
              href="#contact"
              onClick={(e) => go(e, "contact")}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-ink px-3 sm:px-4 py-2 text-[0.7rem] sm:text-[0.78rem] font-semibold text-paper shadow-sm transition-all duration-300 hover:bg-gold hover:text-white hover:shadow-[0_4px_16px_rgba(203,162,50,0.3)] dark:bg-white dark:text-ink dark:hover:bg-gold dark:hover:text-white"
            >
              <span>Hire Me</span>
              <span className="ml-1 text-xs">→</span>
            </a>
          </MagneticButton>
        </div>

        {/* Mobile menu trigger & ThemeToggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-8 sm:h-9 w-8 sm:w-9 place-items-center rounded-lg sm:rounded-xl border border-line/70 bg-panel/80 text-ink backdrop-blur-md transition-colors hover:border-gold/50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-100"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] w-4 sm:w-5 rounded bg-current transition-all duration-300 ${
                  open ? "translate-y-[7.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 sm:w-5 rounded bg-current transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 sm:w-5 rounded bg-current transition-all duration-300 ${
                  open ? "-translate-y-[7.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-x-0 top-14 sm:top-16 border-b border-line/70 bg-paper/95 p-3 sm:p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-darker/95 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => go(e, link.id)}
                    className={`rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-[0.8rem] sm:text-[0.85rem] font-medium transition-colors ${
                      active === link.id
                        ? "bg-black/5 font-semibold text-gold dark:bg-white/5"
                        : "text-muted hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => go(e, "contact")}
                  className="mt-1.5 sm:mt-2 rounded-lg sm:rounded-xl bg-gold py-2.5 sm:py-3 text-center text-[0.8rem] sm:text-[0.85rem] font-semibold text-white shadow-md transition-all hover:bg-gold-soft active:scale-[0.98]"
                >
                  Hire Me →
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
