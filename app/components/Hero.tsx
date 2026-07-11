"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Ruler,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";
import TextReveal from "./TextReveal";

const features = [
  {
    icon: Ruler,
    title: "Özel Ölçü",
    description: "Mekânınıza özel üretim",
  },
  {
    icon: BadgeCheck,
    title: "Kaliteli İşçilik",
    description: "Titiz üretim ve montaj",
  },
  {
    icon: Sparkles,
    title: "Özgün Tasarım",
    description: "Tarzınıza uygun çözümler",
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 25,
    mass: 0.8,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      mouseX.set((event.clientX - centerX) / 45);
      mouseY.set((event.clientY - centerY) / 45);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="anasayfa"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pb-16 pt-28 text-white sm:pt-32 lg:pb-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="pointer-events-none absolute right-[-180px] top-24 hidden h-[560px] w-[560px] rounded-full border border-[#C9A14A]/15 lg:block"
      >
        <div className="absolute inset-12 rounded-full border border-[#C9A14A]/10" />
        <div className="absolute inset-24 rounded-full border border-[#C9A14A]/10" />
        <div className="absolute inset-[150px] rounded-full bg-[#C9A14A]/10 blur-3xl" />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-180px] top-1/3 h-[420px] w-[420px] rounded-full bg-[#C9A14A]/10 blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "75px 75px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#C9A14A]/25 bg-black/45 px-4 py-2 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A14A] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C9A14A]" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A14A] sm:text-sm">
                Özel Ölçü Mobilya & Tasarım
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-2 text-sm font-semibold uppercase tracking-[0.45em] text-white/45 sm:text-base"
              >
                Şahin
              </motion.p>
            </div>

            <TextReveal
              text="Mobilya ile yaşam alanınızı yeniden tasarlayın."
              className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            />

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg sm:leading-9"
            >
              Mutfaktan gardıroba, TV ünitesinden özel tasarım
              mobilyalara kadar tüm yaşam alanlarınız için estetik,
              işlevsel ve uzun ömürlü çözümler üretiyoruz.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#iletisim"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65]"
              >
                Ücretsiz Teklif Al
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#projeler"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-7 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-[#C9A14A]/50 hover:bg-[#C9A14A]/10 hover:text-[#C9A14A]"
              >
                Projeleri İncele
                <ArrowDown
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-white/45"
            >
              <span className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#C9A14A]" />
                Ücretsiz keşif
              </span>

              <span className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#C9A14A]" />
                Özel ölçü üretim
              </span>

              <span className="flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#C9A14A]" />
                Profesyonel montaj
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              x: smoothX,
              y: smoothY,
            }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 rounded-[3rem] bg-[#C9A14A]/10 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-black/40 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-[560px] overflow-hidden rounded-[1.75rem]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=90"
                  alt="Modern özel tasarım mobilya ve iç mekân uygulaması"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-xl">
                    Şahin Mobilya
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/15 text-[#C9A14A] backdrop-blur-xl">
                    <Sparkles size={19} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
                    Hayalinizdeki yaşam alanı
                  </p>

                  <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight text-white">
                    Ölçünüze ve tarzınıza özel tasarım.
                  </h2>

                  <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                    <p className="max-w-[260px] text-sm leading-6 text-white/50">
                      Tasarımdan üretime, üretimden montaja kadar
                      tüm süreç tek elden.
                    </p>

                    <a
                      href="#iletisim"
                      aria-label="İletişim bölümüne git"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A14A] text-black transition duration-300 hover:scale-110 hover:bg-[#dfba65]"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-10 rounded-2xl border border-white/15 bg-black/70 p-5 shadow-2xl backdrop-blur-2xl"
            >
              <p className="text-3xl font-semibold text-[#C9A14A]">
                12+
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">
                Yıllık deneyim
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#hizmetler"
          aria-label="Hizmetler bölümüne git"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.15,
          }}
          className="absolute bottom-[-44px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/35 transition hover:text-[#C9A14A] lg:flex"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
            Keşfet
          </span>

          <motion.span
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-6 justify-center rounded-full border border-current pt-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}