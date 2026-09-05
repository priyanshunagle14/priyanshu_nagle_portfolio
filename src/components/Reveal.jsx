import { motion } from "framer-motion";

const variantsMap = {
  "fade-up": (y = 24) => ({
    hidden: { opacity: 0, y, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  }),
  "fade-down": (y = -24) => ({
    hidden: { opacity: 0, y, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  }),
  "fade-left": (x = 30) => ({
    hidden: { opacity: 0, x, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  }),
  "fade-right": (x = -30) => ({
    hidden: { opacity: 0, x, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  }),
  "scale-up": () => ({
    hidden: { opacity: 0, scale: 0.94, filter: "blur(4px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  }),
  "blur-in": () => ({
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  variant = "fade-up",
  distance,
  className = "",
  as = "div",
  viewportAmount = 0.15,
}) {
  const MotionTag = motion[as] ?? motion.div;
  const variantFn = variantsMap[variant] || variantsMap["fade-up"];
  const animVariants = variantFn(distance);

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={animVariants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
