import { motion } from "framer-motion";

export default function AnimatedGradient({ text, className = "" }) {
  const letters = text.split("");

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div className={`inline-flex perspective-1000 ${className}`}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="inline-block bg-gradient-to-r from-gold via-gold-soft to-gold-dark bg-clip-text text-transparent"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
