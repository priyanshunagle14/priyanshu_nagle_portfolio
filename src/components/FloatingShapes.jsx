import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Blob 1 - Large */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10 dark:opacity-5"
        style={{
          background: "radial-gradient(circle, #c5a059 0%, transparent 70%)",
        }}
      />

      {/* Floating Blob 2 - Medium */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          rotate: [360, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/4 -right-16 w-56 h-56 rounded-full opacity-8 dark:opacity-4"
        style={{
          background: "radial-gradient(circle, #c5a059 0%, transparent 70%)",
        }}
      />

      {/* Floating Blob 3 - Small */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 25, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full opacity-6 dark:opacity-3"
        style={{
          background: "radial-gradient(circle, #c5a059 0%, transparent 70%)",
        }}
      />

      {/* Animated Grid Lines */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c5a059" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#c5a059" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#c5a059" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="0"
          y1="0"
          x2="1200"
          y2="600"
          stroke="url(#gridGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  );
}
