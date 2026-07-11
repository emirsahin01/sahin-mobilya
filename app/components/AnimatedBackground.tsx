"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-60, 60, -60],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-[#C9A14A]/10 blur-[170px]"
      />

      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [60, -60, 60],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-250px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-[#C9A14A]/8 blur-[170px]"
      />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}