"use client";

import { motion, useInView } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Ruler,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix: string;
  duration?: number;
};

type Stat = {
  title: string;
  description: string;
  value: number;
  suffix: string;
  icon: typeof BriefcaseBusiness;
};

const stats: Stat[] = [
  {
    title: "Tamamlanan Proje",
    description: "Özel ölçü mobilya ve yaşam alanı uygulaması",
    value: 250,
    suffix: "+",
    icon: BriefcaseBusiness,
  },
  {
    title: "Yıllık Deneyim",
    description: "Üretim, tasarım ve montaj tecrübesi",
    value: 12,
    suffix: "+",
    icon: Clock3,
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Kaliteli işçilik ve güvenilir hizmet anlayışı",
    value: 100,
    suffix: "%",
    icon: BadgeCheck,
  },
  {
    title: "Özel Ölçü Uygulama",
    description: "Mekâna ve ihtiyaca özel tasarlanan çözümler",
    value: 500,
    suffix: "+",
    icon: Ruler,
  },
];

function Counter({
  value,
  suffix,
  duration = 1800,
}: CounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null);

  const isInView = useInView(counterRef, {
    once: true,
    amount: 0.7,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let animationFrame = 0;
    let startTime: number | null = null;

    const animateCounter = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(value * easedProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame =
          window.requestAnimationFrame(animateCounter);
      }
    };

    animationFrame =
      window.requestAnimationFrame(animateCounter);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [duration, isInView, value]);

  return (
    <span ref={counterRef}>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A14A]/5 blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C9A14A]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A14A]">
                Rakamlarla Biz
              </span>
            </div>

            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Deneyimle şekillenen
              <span className="block text-[#C9A14A]">
                güvenilir işçilik.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/50">
            Her projeyi ölçüsüne, kullanım ihtiyacına ve
            müşterimizin tarzına göre tasarlıyor; üretimden
            montaja kadar tüm süreci titizlikle yönetiyoruz.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[315px] overflow-hidden bg-[#101010] p-7 transition duration-500 hover:bg-[#15130e] sm:p-8"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#C9A14A]/0 blur-3xl transition duration-500 group-hover:bg-[#C9A14A]/10" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#C9A14A]/25 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-300 group-hover:border-[#C9A14A]/50 group-hover:bg-[#C9A14A] group-hover:text-black">
                      <Icon size={23} />
                    </div>

                    <span className="text-xs font-semibold tracking-[0.22em] text-white/20">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-auto pt-12">
                    <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={1800 + index * 150}
                      />
                    </p>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {stat.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/45">
                      {stat.description}
                    </p>

                    <div className="mt-7 h-px w-12 bg-[#C9A14A] transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-7 text-center text-xs leading-6 text-white/30">
          İstatistik değerleri işletmenin gerçek proje ve
          deneyim bilgilerine göre güncellenebilir.
        </p>
      </div>
    </section>
  );
}