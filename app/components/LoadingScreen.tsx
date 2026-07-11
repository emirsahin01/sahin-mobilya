"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = previousOverflow;
    }, 2200);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A14A]/10 blur-[130px]"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: [0, 1, 0.65],
              scale: [0.7, 1.15, 1],
            }}
            transition={{
              duration: 1.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
            <div className="absolute left-0 top-[20%] h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <div className="absolute bottom-[20%] left-0 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          </motion.div>

          <div className="relative flex w-full max-w-md flex-col items-center px-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/logo.png"
                alt="Şahin Mobilya ve Tasarım"
                width={280}
                height={110}
                priority
                className="h-auto w-[220px] object-contain sm:w-[270px]"
              />
            </motion.div>

            <motion.p
              className="mt-7 text-center text-xs font-medium uppercase tracking-[0.38em] text-white/45 sm:text-sm"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
            >
              Mobilya & Tasarım
            </motion.p>

            <div className="mt-10 h-[2px] w-full max-w-[270px] overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full origin-left bg-[#C9A14A] shadow-[0_0_18px_rgba(201,161,74,0.75)]"
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            <motion.div
              className="mt-5 flex items-center gap-2"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
              }}
            >
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  className="h-1.5 w-1.5 rounded-full bg-[#C9A14A]"
                  animate={{
                    opacity: [0.25, 1, 0.25],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 1,
                    delay: item * 0.15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20 sm:bottom-10"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
          >
            Özel ölçü • Kaliteli işçilik
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}