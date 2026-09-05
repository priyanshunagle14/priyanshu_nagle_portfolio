import { socials } from "../data/content";
import MagneticButton from "../components/MagneticButton";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line/60 bg-paper px-5 py-10 transition-colors duration-300 dark:border-white/[0.08] dark:bg-darker md:px-10">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Brand signature */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-serif text-[1.25rem] text-ink dark:text-zinc-100"
          >
            P<span className="text-gold">.</span>N
          </a>
          <span className="text-xs text-muted dark:text-zinc-500">
            © {new Date().getFullYear()} Priyanshu Nagle. All rights reserved.
          </span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-gold dark:text-zinc-400 dark:hover:text-gold-soft"
          >
            GitHub
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-gold dark:text-zinc-400 dark:hover:text-gold-soft"
          >
            LinkedIn
          </a>
          <a
            href={socials.email}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-gold dark:text-zinc-400 dark:hover:text-gold-soft"
          >
            Email
          </a>

          <MagneticButton strength={12}>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="grid h-8 w-8 place-items-center rounded-lg border border-line bg-panel text-muted shadow-sm transition-all hover:border-gold hover:text-gold dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-gold dark:hover:text-gold-soft"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
