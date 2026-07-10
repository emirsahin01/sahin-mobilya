"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function RevealSection({
  children,
  delay = 0,
  className = "",
}: RevealSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.97,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -80px 0px",
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}