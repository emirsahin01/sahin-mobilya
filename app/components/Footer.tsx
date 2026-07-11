"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  {
    name: "Ana Sayfa",
    href: "#anasayfa",
  },
  {
    name: "Hizmetler",
    href: "#hizmetler",
  },
  {
    name: "Projeler",
    href: "#projeler",
  },
  {
    name: "Hakkımızda",
    href: "#hakkimizda",
  },
  {
    name: "Yorumlar",
    href: "#yorumlar",
  },
  {
    name: "İletişim",
    href: "#iletisim",
  },
];

const serviceLinks = [
  "Mutfak Dolabı",
  "Gardırop",
  "TV Ünitesi",
  "Vestiyer",
  "Banyo Dolabı",
  "Özel Tasarım",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[420px] w-[420px] rounded-full bg-[#C9A14A]/7 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#C9A14A]/6 blur-[170px]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
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

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <motion.div
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
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mb-16 overflow-hidden rounded-[2rem] border border-[#C9A14A]/20 bg-[#C9A14A]/[0.07] px-6 py-9 sm:px-9 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#C9A14A]/15 blur-[110px]" />

          <div className="pointer-events-none absolute bottom-[-120px] left-1/3 h-64 w-64 rounded-full bg-[#C9A14A]/8 blur-[100px]" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-[#C9A14A]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
                Yeni Projeniz
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              Hayalinizdeki yaşam alanını
              <span className="block text-[#C9A14A]">
                birlikte tasarlayalım.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Mekânınızı ve ihtiyaçlarınızı değerlendirelim.
              Ölçüden üretime, üretimden montaja kadar size özel
              mobilya çözümleri hazırlayalım.
            </p>
          </div>

          <a
            href="https://wa.me/905333527951?text=Merhaba%20Şahin%20Mobilya%2C%20projem%20için%20bilgi%20ve%20ücretsiz%20teklif%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-8 inline-flex min-h-[58px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65] lg:ml-12 lg:mt-0"
          >
            Ücretsiz Teklif Al

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.8fr_1fr] lg:gap-10">
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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href="#anasayfa"
              aria-label="Şahin Mobilya ana sayfa"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Şahin Mobilya ve Tasarım"
                width={190}
                height={70}
                className="h-auto w-[165px] object-contain sm:w-[185px]"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Mobilyayı yalnızca üretmiyor, yaşam alanınıza özel
              olarak tasarlıyoruz. Ölçüden montaja kadar her aşamada
              kaliteli işçilik ve modern çözümler sunuyoruz.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://wa.me/905333527951?text=Merhaba%20Şahin%20Mobilya%2C%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/70 transition duration-300 hover:-translate-y-1 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <MessageCircle size={19} />
              </a>

              <a
                href="tel:+905333527951"
                aria-label="Telefon"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/70 transition duration-300 hover:-translate-y-1 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <Phone size={18} />
              </a>

              <a
                href="mailto:sahinemir309@gmail.com"
                aria-label="E-posta"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/70 transition duration-300 hover:-translate-y-1 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
              Menü
            </h3>

            <ul className="mt-6 space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition duration-300 hover:text-[#C9A14A]"
                  >
                    <span className="h-px w-0 bg-[#C9A14A] transition-all duration-300 group-hover:w-4" />

                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
              Hizmetler
            </h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#hizmetler"
                    className="group inline-flex items-center gap-2 text-sm text-white/55 transition duration-300 hover:text-[#C9A14A]"
                  >
                    <span className="h-px w-0 bg-[#C9A14A] transition-all duration-300 group-hover:w-4" />

                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
              İletişim
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+905333527951"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-300 group-hover:bg-[#C9A14A] group-hover:text-black">
                  <Phone size={17} />
                </span>

                <span>
                  <span className="block text-xs text-white/35">
                    Telefon
                  </span>

                  <span className="mt-1 block text-sm text-white/65 transition group-hover:text-[#C9A14A]">
                    +90 533 352 79 51
                  </span>
                </span>
              </a>

              <a
                href="mailto:sahinemir309@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-300 group-hover:bg-[#C9A14A] group-hover:text-black">
                  <Mail size={17} />
                </span>

                <span className="min-w-0">
                  <span className="block text-xs text-white/35">
                    E-posta
                  </span>

                  <span className="mt-1 block break-all text-sm text-white/65 transition group-hover:text-[#C9A14A]">
                    sahinemir309@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=İstanbul%2C%20Türkiye"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C9A14A]/20 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-300 group-hover:bg-[#C9A14A] group-hover:text-black">
                  <MapPin size={17} />
                </span>

                <span>
                  <span className="block text-xs text-white/35">
                    Hizmet Bölgesi
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-white/65 transition group-hover:text-[#C9A14A]">
                    İstanbul ve çevresi
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Şahin Mobilya & Tasarım. Tüm hakları
            saklıdır.
          </p>

          <a
            href="#anasayfa"
            className="group inline-flex w-fit items-center gap-3 text-white/45 transition duration-300 hover:text-[#C9A14A]"
          >
            Başa dön

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
              <ArrowUp size={17} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}