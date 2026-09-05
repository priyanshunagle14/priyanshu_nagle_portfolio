import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "../context/ToastContext";
import { useTheme } from "../context/ThemeContext";
import { navLinks, projects, profile } from "../data/content";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const { showToast } = useToast();
  const { toggleTheme, isDark } = useTheme();

  // Command palette actions
  const actions = [
    ...navLinks.map((link) => ({
      id: `nav-${link.id}`,
      label: link.label,
      category: "Navigation",
      action: () => {
        const el = document.getElementById(link.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
      },
    })),
    {
      id: "toggle-theme",
      label: isDark ? "Light Mode" : "Dark Mode",
      category: "Settings",
      action: () => {
        toggleTheme();
        showToast(isDark ? "Switched to Light Mode ☀️" : "Switched to Dark Mode 🌙");
        setOpen(false);
      },
    },
    {
      id: "copy-email",
      label: "Copy Email Address",
      category: "Contact",
      action: () => {
        navigator.clipboard.writeText(profile.rawEmail);
        showToast("Email copied to clipboard ✓", "success");
        setOpen(false);
      },
    },
    {
      id: "download-resume",
      label: "Download Resume",
      category: "Quick Links",
      action: () => {
        window.open(profile.resumeUrl, "_blank");
        showToast("Opening resume...");
        setOpen(false);
      },
    },
    {
      id: "github",
      label: "Visit GitHub Profile",
      category: "Quick Links",
      action: () => {
        window.open("https://github.com/priyanshunagle14", "_blank");
        setOpen(false);
      },
    },
    {
      id: "linkedin",
      label: "Visit LinkedIn Profile",
      category: "Quick Links",
      action: () => {
        window.open("https://linkedin.com/in/priyanshunagle14", "_blank");
        setOpen(false);
      },
    },
    ...projects.map((proj) => ({
      id: `project-${proj.num}`,
      label: proj.title,
      category: "Projects",
      action: () => {
        window.open(proj.url, "_blank");
        setOpen(false);
      },
    })),
  ];

  // Filter actions based on query
  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  // Group by category
  const grouped = filtered.reduce((acc, action) => {
    const cat = action.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(action);
    return acc;
  }, {});

  const categories = Object.keys(grouped);
  const allActions = categories.flatMap((cat) => grouped[cat]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
      }

      if (!open) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelected((prev) => (prev + 1) % allActions.length);
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelected((prev) =>
            prev === 0 ? allActions.length - 1 : prev - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (allActions[selected]) {
            allActions[selected].action();
            setSelected(0);
          }
          break;
        case "Escape":
          e.preventDefault();
          setOpen(false);
          setQuery("");
          setSelected(0);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, selected, allActions]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  return (
    <>
      {/* Keyboard Hint Badge in Navbar */}
      <button
        onClick={() => setOpen(true)}
        className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-line/70 bg-panel/80 px-3 py-1.5 text-xs font-medium text-muted shadow-sm transition-colors hover:border-gold/50 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400 dark:hover:border-gold/50"
      >
        <span>⌘ K</span>
      </button>

      {/* Command Palette Modal */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => {
                setOpen(false);
                setQuery("");
                setSelected(0);
              }}
              className="fixed inset-0 z-[99998] bg-black/40 backdrop-blur-sm dark:bg-black/60"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-x-4 top-[25%] z-[99999] mx-auto max-w-2xl overflow-hidden rounded-2xl border border-line/80 bg-panel shadow-2xl dark:border-white/10 dark:bg-card-dark"
            >
              {/* Search Input */}
              <div className="border-b border-line/60 p-4 dark:border-white/[0.08]">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search or type a command... (ESC to close)"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                  }}
                  className="w-full bg-transparent text-base font-medium text-ink outline-none placeholder:text-muted dark:text-zinc-100 dark:placeholder:text-zinc-500"
                />
              </div>

              {/* Results */}
              <div className="max-h-[450px] overflow-y-auto">
                {allActions.length === 0 ? (
                  <div className="px-6 py-12 text-center text-muted dark:text-zinc-400">
                    <p className="text-sm">No commands found.</p>
                  </div>
                ) : (
                  categories.map((category) => (
                    <div key={category} className="px-2 py-3">
                      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted/60 dark:text-zinc-500">
                        {category}
                      </div>
                      {grouped[category].map((action, idx) => {
                        const globalIdx = allActions.indexOf(action);
                        return (
                          <motion.button
                            key={action.id}
                            onClick={() => {
                              action.action();
                              setSelected(0);
                            }}
                            onMouseEnter={() => setSelected(globalIdx)}
                            animate={{
                              backgroundColor:
                                selected === globalIdx
                                  ? "rgba(197, 160, 89, 0.08)"
                                  : "transparent",
                            }}
                            className="w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-ink transition-colors hover:bg-gold/5 dark:text-zinc-200 dark:hover:bg-gold/10"
                          >
                            <div className="flex items-center justify-between">
                              <span>{action.label}</span>
                              {selected === globalIdx && (
                                <span className="text-xs text-gold">↵</span>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="border-t border-line/60 bg-zinc-50/50 px-4 py-2 text-xs text-muted dark:border-white/[0.08] dark:bg-white/[0.02] dark:text-zinc-500">
                <div className="flex items-center justify-between">
                  <span>Use ↑ ↓ to navigate • ENTER to select</span>
                  <span>ESC to close</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
