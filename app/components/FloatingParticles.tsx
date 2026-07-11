"use client";

import { motion } from "framer-motion";

const particles = [
  {
    left: "8%",
    top: "12%",
    size: 4,
    duration: 8,
    delay: 0,
  },
  {
    left: "18%",
    top: "42%",
    size: 3,
    duration: 10,
    delay: 1,
  },
  {
    left: "28%",
    top: "75%",
    size: 5,
    duration: 12,
    delay: 2,
  },
  {
    left: "42%",
    top: "22%",
    size: 3,
    duration: 9,
    delay: 0.5,
  },
  {
    left: "55%",
    top: "58%",
    size: 4,
    duration: 11,
    delay: 1.5,
  },
  {
    left: "68%",
    top: "18%",
    size: 5,
    duration: 13,
    delay: 2.5,
  },
  {
    left: "78%",
    top: "70%",
    size: 3,
    duration: 10,
    delay: 0.8,
  },
  {
    left: "88%",
    top: "38%",
    size: 4,
    duration: 12,
    delay: 1.8,
  },
  {
    left: "94%",
    top: "82%",
    size: 3,
    duration: 9,
    delay: 2.2,
  },
];

export default function FloatingParticles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1] hidden overflow-hidden md:block"
    >
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-[#C9A14A]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow: "0 0 18px rgba(201, 161, 74, 0.55)",
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 12, -8, 0],
            opacity: [0.15, 0.7, 0.15],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}