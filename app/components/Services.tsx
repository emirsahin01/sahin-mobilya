"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  ChefHat,
  House,
  PanelsTopLeft,
  Ruler,
  Sparkles,
  Tv,
} from "lucide-react";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: typeof ChefHat;
  image: string;
  features: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Mutfak Dolabı",
    description:
      "Mekânın ölçülerine, kullanım alışkanlıklarına ve tarzınıza göre tasarlanan modern ve fonksiyonel mutfak çözümleri.",
    icon: ChefHat,
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Özel ölçü üretim",
      "Fonksiyonel depolama",
      "Malzeme ve renk seçenekleri",
    ],
  },
  {
    number: "02",
    title: "Gardırop",
    description:
      "Kıyafetlerinizi düzenli ve kolay erişilebilir tutan, ihtiyacınıza özel iç bölümlere sahip gardırop tasarımları.",
    icon: BedDouble,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Sürgülü veya kapaklı sistem",
      "Özel iç bölümlendirme",
      "Tavana kadar kullanım",
    ],
  },
  {
    number: "03",
    title: "TV Ünitesi",
    description:
      "Salonunuzun mimarisine uyum sağlayan, depolama ve dekoratif görünümü bir araya getiren özel TV üniteleri.",
    icon: Tv,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Kablo gizleme çözümleri",
      "Dekoratif raf sistemleri",
      "Mekâna özel ölçülendirme",
    ],
  },
  {
    number: "04",
    title: "Vestiyer",
    description:
      "Giriş alanlarını daha düzenli ve kullanışlı hale getiren, dar alanlardan maksimum verim sağlayan vestiyer çözümleri.",
    icon: House,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Ayakkabılık bölümleri",
      "Askılık ve oturma alanı",
      "Ayna ve dekoratif detaylar",
    ],
  },
  {
    number: "05",
    title: "Banyo Dolabı",
    description:
      "Neme dayanıklı malzemelerle üretilen, banyonuza düzen ve modern bir görünüm kazandıran özel ölçü mobilyalar.",
    icon: Bath,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Neme dayanıklı malzeme",
      "Lavabo altı depolama",
      "Ayna ve üst dolap seçenekleri",
    ],
  },
  {
    number: "06",
    title: "Özel Tasarım",
    description:
      "Çalışma masası, kitaplık, raf sistemi ve farklı yaşam alanları için tamamen size özel mobilya çözümleri.",
    icon: PanelsTopLeft,
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Kişiye özel tasarım",
      "Mekâna uygun üretim",
      "Üretimden montaja hizmet",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-220px] top-20 h-[500px] w-[500px] rounded-full bg-[#C9A14A]/8 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-20 right-[-220px] h-[500px] w-[500px] rounded-full bg-[#C9A14A]/6 blur-[170px]" />

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
                Hizmetlerimiz
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
              Yaşam alanınıza özel
              <span className="block text-[#C9A14A]">
                mobilya çözümleri.
              </span>
            </motion.h2>
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
              amount: 0.6,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-xl"
          >
            <p className="text-base leading-8 text-white/50">
              Tasarımdan ölçülendirmeye, üretimden montaja kadar
              bütün süreci titizlikle yönetiyor; mekânınız için
              estetik, kullanışlı ve uzun ömürlü mobilyalar
              üretiyoruz.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <Ruler size={17} className="text-[#C9A14A]" />
                Özel ölçü
              </span>

              <span className="flex items-center gap-2">
                <Sparkles size={17} className="text-[#C9A14A]" />
                Özgün tasarım
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] transition duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/35"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

                  <div className="absolute inset-0 bg-[#C9A14A]/0 transition duration-500 group-hover:bg-[#C9A14A]/5" />
                </div>

                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C9A14A]/0 blur-[80px] transition duration-700 group-hover:bg-[#C9A14A]/15" />

                <div className="relative flex min-h-[520px] flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A14A]/25 bg-black/45 text-[#C9A14A] backdrop-blur-xl transition duration-500 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-semibold tracking-[0.25em] text-white/35">
                      {service.number}
                    </span>
                  </div>

                  <div className="mt-auto pt-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
                      Şahin Mobilya
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {service.description}
                    </p>

                    <div className="mt-6 grid gap-3 border-t border-white/15 pt-5">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 text-sm text-white/50"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A14A]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <a
                      href="#iletisim"
                      className="mt-7 flex items-center justify-between border-t border-white/15 pt-5"
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55 transition duration-300 group-hover:text-[#C9A14A]">
                        Teklif alın
                      </span>

                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white transition duration-500 group-hover:rotate-45 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
                        <ArrowUpRight size={19} />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-14 flex flex-col items-start justify-between gap-7 rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-8 backdrop-blur-xl sm:px-9 lg:flex-row lg:items-center lg:px-11"
        >
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
              Aklınızdaki Proje
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Listede olmayan özel bir mobilyaya mı ihtiyacınız
              var?
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/45 sm:text-base">
              Mekânınızı ve ihtiyaçlarınızı birlikte
              değerlendirerek size özel bir tasarım ve üretim
              planı hazırlayalım.
            </p>
          </div>

          <a
            href="#iletisim"
            className="group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65]"
          >
            Projenizi Anlatın

            <ArrowUpRight
              size={19}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}