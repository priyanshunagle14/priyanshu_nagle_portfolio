import { useEffect, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest("a, button, input, textarea, [role='button'], .clickable");
      if (ringRef.current) {
        if (interactive) {
          ringRef.current.classList.add("cursor-ring--active");
        } else {
          ringRef.current.classList.remove("cursor-ring--active");
        }
      }
    };

    const animate = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_8px_rgba(203,162,50,0.8)] will-change-transform"
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out will-change-transform ${
          isDark
            ? "border-gold/60 bg-gold/5"
            : "border-gold/70 bg-gold/5"
        }`}
      />
      <style>{`
        .cursor-ring--active {
          width: 48px !important;
          height: 48px !important;
          border-color: rgba(203, 162, 50, 0.9) !important;
          background-color: rgba(203, 162, 50, 0.15) !important;
          box-shadow: 0 0 16px rgba(203, 162, 50, 0.3);
        }
      `}</style>
    </>
  );
}
