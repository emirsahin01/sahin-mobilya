"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  Sparkles,
} from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  "Mutfak Dolabı",
  "Gardırop",
  "TV Ünitesi",
  "Vestiyer",
  "Banyo Dolabı",
  "Özel Tasarım",
];

const contactItems = [
  {
    icon: Phone,
    title: "Telefon",
    value: "+90 533 352 79 51",
    href: "tel:+905333527951",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: "sahinemir309@gmail.com",
    href: "mailto:sahinemir309@gmail.com",
  },
  {
    icon: MapPin,
    title: "Hizmet Bölgesi",
    value: "İstanbul ve çevresi",
    href: "#harita",
  },
  {
    icon: Clock3,
    title: "Çalışma Saatleri",
    value: "Pazartesi - Cumartesi / 08.00 - 19.00",
    href: "#iletisim",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappNumber = "905333527951";

    const text = [
      "Merhaba, Şahin Mobilya web sitesinden ulaşıyorum.",
      "",
      `Ad Soyad: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      `Hizmet: ${formData.service}`,
      `Proje Detayı: ${formData.message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-220px] top-1/3 h-[520px] w-[520px] rounded-full bg-[#C9A14A]/8 blur-[170px]" />

      <div className="pointer-events-none absolute bottom-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-[#C9A14A]/7 blur-[170px]" />

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
                İletişim
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
              Hayalinizdeki projeyi
              <span className="block text-[#C9A14A]">
                birlikte tasarlayalım.
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
            Mekânınız, ölçüleriniz ve ihtiyaçlarınız hakkında kısa
            bilgi bırakın. Projenizi değerlendirelim ve size özel
            çözümümüzü birlikte oluşturalım.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -45,
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
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-7 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C9A14A]/12 blur-[110px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A14A]/25 bg-[#C9A14A]/10 text-[#C9A14A]">
                <MessageCircle size={25} />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
                Şahin Mobilya
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Projenizi anlatın,
                <span className="block text-white/45">
                  çözümünü birlikte bulalım.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/45 sm:text-base">
                Mutfak, gardırop, TV ünitesi, vestiyer, banyo
                dolabı ve özel tasarım mobilya ihtiyaçlarınız için
                bizimle iletişime geçebilirsiniz.
              </p>

              <div className="mt-9 grid gap-4">
                {contactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
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
                        delay: 0.1 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="group flex items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:border-[#C9A14A]/35 hover:bg-[#C9A14A]/[0.06]"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#C9A14A]/20 bg-[#C9A14A]/10 text-[#C9A14A] transition duration-300 group-hover:bg-[#C9A14A] group-hover:text-black">
                        <Icon size={21} />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                          {item.title}
                        </span>

                        <span className="mt-1 block break-words text-sm leading-6 text-white/70">
                          {item.value}
                        </span>
                      </span>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/10">
                <div className="bg-[#0b0b0b] p-5">
                  <Ruler size={21} className="text-[#C9A14A]" />

                  <p className="mt-4 text-sm font-semibold text-white">
                    Ücretsiz keşif
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Projeniz için ölçü ve ihtiyaç değerlendirmesi
                  </p>
                </div>

                <div className="bg-[#0b0b0b] p-5">
                  <Sparkles size={21} className="text-[#C9A14A]" />

                  <p className="mt-4 text-sm font-semibold text-white">
                    Özel tasarım
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Mekânınıza ve tarzınıza uygun çözümler
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
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
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] border border-[#C9A14A]/20 bg-[#C9A14A]/[0.055] p-7 sm:p-9 lg:p-11"
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#C9A14A]/15 blur-[120px]" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
                Ücretsiz Teklif Formu
              </p>

              <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Projenizin ilk adımını
                <span className="block text-white/45">
                  bugün birlikte atalım.
                </span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45 sm:text-base">
                Formu doldurduğunuzda bilgileriniz WhatsApp
                üzerinden hazır mesaj olarak iletilecektir.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-9 grid gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      Ad Soyad
                    </span>

                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          name: event.target.value,
                        }))
                      }
                      placeholder="Adınızı ve soyadınızı yazın"
                      className="min-h-[56px] rounded-2xl border border-white/10 bg-black/35 px-5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/60 focus:bg-black/55"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                      Telefon
                    </span>

                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(event) =>
                        setFormData((current) => ({
                          ...current,
                          phone: event.target.value,
                        }))
                      }
                      placeholder="05xx xxx xx xx"
                      className="min-h-[56px] rounded-2xl border border-white/10 bg-black/35 px-5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/60 focus:bg-black/55"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    İlgilendiğiniz Hizmet
                  </span>

                  <select
                    value={formData.service}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        service: event.target.value,
                      }))
                    }
                    className="min-h-[56px] rounded-2xl border border-white/10 bg-[#101010] px-5 text-sm text-white outline-none transition focus:border-[#C9A14A]/60"
                  >
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                        className="bg-[#101010] text-white"
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                    Proje Detayı
                  </span>

                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((current) => ({
                        ...current,
                        message: event.target.value,
                      }))
                    }
                    placeholder="Mekânınız, ölçüleriniz ve istediğiniz tasarım hakkında kısa bilgi yazın"
                    className="resize-none rounded-2xl border border-white/10 bg-black/35 px-5 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/60 focus:bg-black/55"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65]"
                >
                  WhatsApp ile Teklif İste

                  <Send
                    size={19}
                    className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-white/30">
                  Formu gönderdiğinizde WhatsApp uygulaması yeni
                  sekmede açılır.
                </p>
              </form>
            </div>
          </motion.div>
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
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-6 py-9 sm:px-9 lg:flex lg:items-center lg:justify-between lg:px-11"
        >
          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#C9A14A]/10 blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
              Hızlı İletişim
            </p>

            <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
              Projenizi doğrudan WhatsApp üzerinden anlatın.
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/45 sm:text-base">
              Mekânınızın fotoğraflarını ve yaklaşık ölçülerini
              göndererek hızlıca bilgi alabilirsiniz.
            </p>
          </div>

          <a
            href="https://wa.me/905333527951"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-7 inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/10 px-7 text-sm font-semibold text-[#C9A14A] transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black lg:ml-10 lg:mt-0"
          >
            WhatsApp’tan Yazın

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