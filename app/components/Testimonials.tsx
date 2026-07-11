"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";
import { useState } from "react";

type Testimonial = {
  name: string;
  project: string;
  comment: string;
  rating: number;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mehmet Yılmaz",
    project: "Mutfak Dolabı Projesi",
    comment:
      "Mutfak dolaplarımız tam istediğimiz gibi oldu. Ölçü alma aşamasından montaja kadar çok düzenli ve titiz çalıştılar. İşçilik gerçekten kaliteli.",
    rating: 5,
    initials: "MY",
  },
  {
    name: "Ayşe Demir",
    project: "Gardırop ve Vestiyer",
    comment:
      "Evimizdeki dar alanları çok iyi değerlendirdiler. Hem gardırop hem de vestiyer çok kullanışlı oldu. Tasarım konusunda da güzel fikirler sundular.",
    rating: 5,
    initials: "AD",
  },
  {
    name: "Burak Kaya",
    project: "TV Ünitesi",
    comment:
      "Salonumuz için özel ölçü TV ünitesi yaptırdık. Görsel olarak çok şık oldu ve kablo karmaşasını tamamen çözdüler. Sonuçtan çok memnun kaldık.",
    rating: 5,
    initials: "BK",
  },
  {
    name: "Elif Arslan",
    project: "Banyo Dolabı",
    comment:
      "Banyomuz küçük olmasına rağmen çok kullanışlı bir dolap tasarladılar. Malzeme kalitesi ve montaj temizliği gerçekten çok iyiydi.",
    rating: 5,
    initials: "EA",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? testimonials.length - 1
        : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  return (
    <section
      id="yorumlar"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-220px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#C9A14A]/7 blur-[170px]" />

      <div className="pointer-events-none absolute right-[-220px] top-20 h-[500px] w-[500px] rounded-full bg-[#C9A14A]/6 blur-[170px]" />

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
                Müşteri Yorumları
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
              Memnuniyetle tamamlanan
              <span className="block text-[#C9A14A]">
                projelerden yorumlar.
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
            Her projede beklentiyi doğru anlamaya, kaliteli üretim
            yapmaya ve teslim sonrasında memnuniyet bırakmaya önem
            veriyoruz.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-7 sm:p-9"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#C9A14A]/10 blur-[100px]" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A14A]/25 bg-[#C9A14A]/10 text-[#C9A14A]">
                <Star size={24} fill="currentColor" />
              </div>

              <p className="mt-8 text-5xl font-semibold text-white">
                5.0
              </p>

              <div className="mt-3 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-[#C9A14A]"
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="mt-5 text-sm leading-7 text-white/45">
                Müşterilerimizin paylaştığı deneyimlerden oluşan
                memnuniyet değerlendirmesi.
              </p>

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
                  Şahin Mobilya
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight">
                  Güven veren işçilik,
                  <span className="block text-white/45">
                    kalıcı memnuniyet.
                  </span>
                </h3>
              </div>

              <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/10">
                <div className="bg-[#0b0b0b] p-5">
                  <p className="text-2xl font-semibold text-[#C9A14A]">
                    250+
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/35">
                    Proje
                  </p>
                </div>

                <div className="bg-[#0b0b0b] p-5">
                  <p className="text-2xl font-semibold text-[#C9A14A]">
                    12+
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/35">
                    Yıl deneyim
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#C9A14A]/20 bg-[#C9A14A]/[0.06] p-7 sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#C9A14A]/15 blur-[120px]" />

            <Quote
              size={90}
              strokeWidth={1}
              className="absolute right-8 top-8 text-[#C9A14A]/10"
            />

            <div className="relative flex h-full flex-col">
              <div className="flex items-center gap-1">
                {Array.from({
                  length: activeTestimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="text-[#C9A14A]"
                    fill="currentColor"
                  />
                ))}
              </div>

              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-10"
              >
                <p className="max-w-4xl text-2xl font-medium leading-[1.65] text-white/90 sm:text-3xl sm:leading-[1.55]">
                  “{activeTestimonial.comment}”
                </p>
              </motion.div>

              <div className="mt-auto flex flex-col gap-7 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <motion.div
                  key={`${activeIndex}-customer`}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A14A] text-sm font-bold text-black">
                    {activeTestimonial.initials}
                  </div>

                  <div>
                    <p className="font-semibold text-white">
                      {activeTestimonial.name}
                    </p>

                    <p className="mt-1 text-sm text-white/40">
                      {activeTestimonial.project}
                    </p>
                  </div>
                </motion.div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Önceki müşteri yorumu"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
                  >
                    <ArrowLeft size={19} />
                  </button>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Sonraki müşteri yorumu"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/60 transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`${index + 1}. müşteri yorumunu göster`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-[#C9A14A]"
                        : "w-4 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
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
          className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-3"
        >
          <div className="bg-[#0d0d0d] px-6 py-7 text-center">
            <p className="text-xl font-semibold text-white">
              Titiz Üretim
            </p>

            <p className="mt-2 text-sm text-white/40">
              Her aşamada detaylı kontrol
            </p>
          </div>

          <div className="bg-[#0d0d0d] px-6 py-7 text-center">
            <p className="text-xl font-semibold text-white">
              Zamanında Teslim
            </p>

            <p className="mt-2 text-sm text-white/40">
              Planlı üretim ve montaj süreci
            </p>
          </div>

          <div className="bg-[#0d0d0d] px-6 py-7 text-center">
            <p className="text-xl font-semibold text-white">
              Müşteri Memnuniyeti
            </p>

            <p className="mt-2 text-sm text-white/40">
              İhtiyaca özel çözüm anlayışı
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}