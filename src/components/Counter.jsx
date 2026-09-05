import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({
  value,
  duration = 1.6,
  className = "",
  decimals = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Check if the value is a number, has prefix/suffix or symbols
    const numMatch = String(value).match(/([\d.]+)/);
    if (!numMatch) {
      setDisplayValue(String(value));
      return;
    }

    const targetNum = parseFloat(numMatch[1]);
    const prefix = String(value).substring(0, numMatch.index);
    const suffix = String(value).substring(numMatch.index + numMatch[1].length);

    let startTime;
    let animationFrame;

    const updateCounter = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * easeOut;

      const formatted = decimals > 0
        ? current.toFixed(decimals)
        : targetNum % 1 !== 0
          ? current.toFixed(2)
          : Math.floor(current);

      setDisplayValue(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(String(value));
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
