import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ToastContext = createContext({
  showToast: () => {},
  success: () => {},
  error: () => {},
  info: () => {},
});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message, type = "info", duration = 3500) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        removeToast(id);
      }, duration);
    },
    [removeToast]
  );

  const success = useCallback(
    (msg, duration) => showToast(msg, "success", duration),
    [showToast]
  );
  const error = useCallback(
    (msg, duration) => showToast(msg, "error", duration),
    [showToast]
  );
  const info = useCallback(
    (msg, duration) => showToast(msg, "info", duration),
    [showToast]
  );

  return (
    <ToastContext.Provider value={{ showToast, success, error, info }}>
      {children}
      {/* Toast Container */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-[99999] flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`pointer-events-auto flex items-center gap-3 rounded-xl border p-4 shadow-xl backdrop-blur-xl ${
                toast.type === "success"
                  ? "border-emerald-500/30 bg-emerald-950/80 text-emerald-200 dark:border-emerald-500/40 dark:bg-emerald-950/90"
                  : toast.type === "error"
                  ? "border-rose-500/30 bg-rose-950/80 text-rose-200 dark:border-rose-500/40 dark:bg-rose-950/90"
                  : "border-line/80 bg-panel/90 text-ink dark:border-white/15 dark:bg-card-dark/90 dark:text-zinc-100"
              }`}
            >
              <span className="shrink-0 text-base">
                {toast.type === "success"
                  ? "✓"
                  : toast.type === "error"
                  ? "✕"
                  : "ℹ"}
              </span>
              <p className="text-xs font-medium leading-relaxed">
                {toast.message}
              </p>
              <button
                onClick={() => removeToast(toast.id)}
                className="ml-auto shrink-0 text-xs opacity-60 hover:opacity-100"
                aria-label="Close notification"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
