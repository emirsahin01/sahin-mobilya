"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Hammer,
  Layers3,
  Ruler,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Ruler,
    title: "Özel Ölçü Tasarım",
    description:
      "Her mobilyayı mekânın ölçülerine, kullanım ihtiyacına ve yaşam alışkanlıklarına göre planlıyoruz.",
  },
  {
    icon: Hammer,
    title: "Usta İşçilik",
    description:
      "Üretimin her aşamasında sağlamlık, detay kalitesi ve uzun ömürlü kullanım anlayışıyla çalışıyoruz.",
  },
  {
    icon: Layers3,
    title: "Doğru Malzeme",
    description:
      "Projeye uygun gövde, kapak, aksesuar ve donanım seçeneklerini kullanım amacına göre belirliyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenilir Hizmet",
    description:
      "Ölçüden montaja kadar süreci düzenli, şeffaf ve titiz bir çalışma anlayışıyla yönetiyoruz.",
  },
];

const highlights = [
  {
    value: "12+",
    label: "Yıllık deneyim",
  },
  {
    value: "250+",
    label: "Tamamlanan proje",
  },
  {
    value: "100%",
    label: "Müşteri odaklı hizmet",
  },
];

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-220px] top-1/4 h-[520px] w-[520px] rounded-full bg-[#C9A14A]/7 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-160px] right-[-180px] h-[480px] w-[480px] rounded-full bg-[#C9A14A]/6 blur-[170px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "85px 85px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[#C9A14A]/10 blur-[100px]" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#101010] p-3 shadow-2xl">
              <div className="relative h-[620px] overflow-hidden rounded-[1.75rem]">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90"
                  alt="Şahin Mobilya özel tasarım iç mekân uygulaması"
                  className="h-full w-full object-cover transition duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/10" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-6 sm:right-6 sm:top-6">
                  <span className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl sm:text-xs">
                    Şahin Mobilya
                  </span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/15 text-[#C9A14A] backdrop-blur-xl">
                    <Sparkles size={19} />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
                    Tasarımdan montaja
                  </p>

                  <h3 className="mt-3 max-w-md text-3xl font-semibold leading-tight sm:text-4xl">
                    Her ayrıntısı size özel yaşam alanları.
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/55">
                    Estetik görünümü, işlevsel detayları ve kaliteli
                    üretimi aynı projede bir araya getiriyoruz.
                  </p>
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
              className="absolute -bottom-8 -right-3 rounded-2xl border border-white/15 bg-black/75 p-5 shadow-2xl backdrop-blur-2xl sm:-right-8 sm:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A14A] text-black">
                  <Users size={22} />
                </div>

                <div>
                  <p className="text-2xl font-semibold text-white">
                    250+
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
                    Tamamlanan proje
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute -left-3 top-20 rounded-2xl border border-white/15 bg-black/75 p-4 shadow-2xl backdrop-blur-2xl sm:-left-8 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <BadgeCheck
                  size={22}
                  className="text-[#C9A14A]"
                />

                <div>
                  <p className="text-sm font-semibold text-white">
                    Kaliteli İşçilik
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Titiz üretim ve montaj
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.7,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#C9A14A]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A14A]">
                Hakkımızda
              </span>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl"
            >
              Mobilyayı yalnızca üretmiyor,
              <span className="block text-[#C9A14A]">
                yaşam alanınızı tasarlıyoruz.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 text-base leading-8 text-white/55 sm:text-lg sm:leading-9"
            >
              Şahin Mobilya olarak her projeye aynı özenle
              yaklaşıyoruz. Mekânınızı inceliyor, ihtiyaçlarınızı
              dinliyor ve estetik görünümle günlük kullanım
              kolaylığını bir araya getiren çözümler geliştiriyoruz.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 text-base leading-8 text-white/45"
            >
              Mutfak, gardırop, TV ünitesi, vestiyer, banyo
              mobilyası ve özel tasarım uygulamalarında ölçü alma,
              tasarım, üretim ve montaj süreçlerini tek elden
              yönetiyoruz.
            </motion.p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: 0.1 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 transition duration-500 hover:-translate-y-1 hover:border-[#C9A14A]/30 hover:bg-[#C9A14A]/[0.06]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C9A14A]/25 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-500 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/45">
                      {feature.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-3"
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="bg-[#101010] px-5 py-6 text-center"
                >
                  <p className="text-3xl font-semibold text-[#C9A14A]">
                    {highlight.value}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#iletisim"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65]"
              >
                Projenizi Konuşalım

                <ArrowUpRight
                  size={19}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#projeler"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/15 bg-white/[0.035] px-7 text-sm font-semibold text-white transition duration-300 hover:border-[#C9A14A]/50 hover:bg-[#C9A14A]/10 hover:text-[#C9A14A]"
              >
                Projelerimizi İnceleyin
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}