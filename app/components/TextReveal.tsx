"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  text: string;
  className?: string;
};

export default function TextReveal({
  text,
  className = "",
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <div className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-3">
          <motion.span
            initial={{
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: wordIndex * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}