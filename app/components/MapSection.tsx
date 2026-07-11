"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
} from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Hizmet Bölgesi",
    description: "İstanbul ve çevresi",
    href: "https://www.google.com/maps/search/?api=1&query=İstanbul%2C%20Türkiye",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "+90 533 352 79 51",
    href: "tel:+905333527951",
  },
  {
    icon: Clock3,
    title: "Çalışma Saatleri",
    description: "Pazartesi - Cumartesi / 08.00 - 20.00",
    href: "#iletisim",
  },
];

export default function MapSection() {
  return (
    <section
      id="konum"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-220px] top-16 h-[520px] w-[520px] rounded-full bg-[#C9A14A]/8 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-[#C9A14A]/6 blur-[170px]" />

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
        <div className="mb-14 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
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
                Konum ve İletişim
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
              Hayalinizdeki mobilya için
              <span className="block text-[#C9A14A]">
                bizimle iletişime geçin.
              </span>
            </motion.h2>
          </div>

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
            className="max-w-xl text-base leading-8 text-white/50"
          >
            Özel ölçü mobilya, mutfak, gardırop, TV ünitesi,
            vestiyer ve dekorasyon projeleriniz için ücretsiz keşif
            ve fiyat teklifi alabilirsiniz.
          </motion.p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#101010] shadow-2xl shadow-black/50 lg:grid-cols-[0.9fr_1.3fr]"
        >
          <div className="relative flex flex-col justify-between overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#C9A14A]/10 blur-[110px]" />

            <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-72 w-72 rounded-full bg-[#C9A14A]/7 blur-[120px]" />

            <div className="relative">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.8,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-9 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A14A]/30 bg-[#C9A14A]/10 text-[#C9A14A]"
              >
                <Navigation size={25} />
              </motion.div>

              <motion.p
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
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]"
              >
                Şahin Mobilya
              </motion.p>

              <motion.h3
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl"
              >
                İstanbul genelinde
                <span className="block text-[#C9A14A]">
                  ölçüden montaja hizmet.
                </span>
              </motion.h3>

              <motion.p
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
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.32,
                }}
                className="mt-5 max-w-md text-sm leading-7 text-white/50 sm:text-base"
              >
                İstanbul ve çevresinde ölçü alma, tasarım, üretim
                ve montaj hizmetleri sunuyoruz. Projenizi yerinde
                değerlendirerek ihtiyacınıza özel çözümler
                hazırlıyoruz.
              </motion.p>

              <div className="mt-10 grid gap-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={
                        item.title === "Hizmet Bölgesi"
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.title === "Hizmet Bölgesi"
                          ? "noopener noreferrer"
                          : undefined
                      }
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
                        duration: 0.6,
                        delay: 0.15 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-start gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C9A14A]/35 hover:bg-[#C9A14A]/[0.06]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C9A14A]/20 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-300 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
                        <Icon size={21} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                          {item.title}
                        </span>

                        <span className="mt-1 block text-sm font-medium leading-6 text-white/75 sm:text-base">
                          {item.description}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto mt-2 shrink-0 text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C9A14A]"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>

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
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            >
              <a
                href="https://wa.me/905333527951?text=Merhaba%20Şahin%20Mobilya%2C%20projem%20için%20ücretsiz%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-6 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65]"
              >
                <MessageCircle size={19} />

                WhatsApp

                <ArrowUpRight
                  size={17}
                  className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="tel:+905333527951"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.035] px-6 text-sm font-semibold text-white transition duration-300 hover:border-[#C9A14A]/60 hover:bg-[#C9A14A]/10 hover:text-[#C9A14A]"
              >
                <Phone size={18} />

                Hemen Ara
              </a>
            </motion.div>
          </div>

          <div className="relative min-h-[500px] overflow-hidden border-t border-white/10 lg:min-h-[720px] lg:border-l lg:border-t-0">
            <iframe
              title="Şahin Mobilya hizmet bölgesi"
              src="https://www.google.com/maps?q=İstanbul%2C%20Türkiye&z=11&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-[1.08] brightness-[0.62]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#101010]/40 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

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
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-2xl border border-white/15 bg-black/65 px-5 py-4 shadow-xl backdrop-blur-xl sm:left-8 sm:right-8 sm:top-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A14A] text-black">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Şahin Mobilya
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    İstanbul ve çevresi
                  </p>
                </div>
              </div>

              <Sparkles
                size={19}
                className="hidden text-[#C9A14A] sm:block"
              />
            </motion.div>

            <motion.div
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
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-[1.5rem] border border-white/15 bg-black/75 p-5 shadow-2xl backdrop-blur-2xl sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-md sm:p-6"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#C9A14A]/15 blur-[60px]" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
                  Hizmet Alanımız
                </p>

                <p className="mt-3 text-xl font-semibold text-white">
                  İstanbul ve çevresi
                </p>

                <p className="mt-3 text-sm leading-7 text-white/50">
                  Projeniz için adresinize gelerek ücretsiz ön
                  görüşme ve ölçü hizmeti sağlıyoruz.
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=İstanbul%2C%20Türkiye"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A14A]"
                >
                  Haritada Aç

                  <ArrowUpRight
                    size={16}
                    className="transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}