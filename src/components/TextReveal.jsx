import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Staggered letter-by-letter or word-by-word reveal
export function StaggeredText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
  tag = "span",
}) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -40,
    },
  };

  const Component = motion[tag] || motion.span;

  return (
    <Component
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-block perspective-1000 ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </Component>
  );
}

// Typewriter effect with blinking cursor
export function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseTime = 1800,
  className = "",
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const wordList = Array.isArray(words) ? words : [words];
    const targetWord = wordList[currentWordIndex % wordList.length];

    let timer;

    if (!isDeleting && currentText === targetWord) {
      if (wordList.length === 1) return; // Static once finished if single string
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % wordList.length);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? targetWord.substring(0, prev.length - 1)
            : targetWord.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-0.5 inline-block h-[1.1em] w-[2px] bg-gold"
      />
    </span>
  );
}
