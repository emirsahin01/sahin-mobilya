"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MoveRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  size: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Mutfak Tasarımı",
    category: "Mutfak",
    description:
      "Mat yüzeyler, doğal ahşap detaylar ve fonksiyonel depolama çözümleriyle tasarlanan modern mutfak.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1600&q=90",
    size: "large",
  },
  {
    id: 2,
    title: "Özel Ölçü Gardırop",
    category: "Gardırop",
    description:
      "Mekâna özel ölçülendirilmiş, geniş depolama alanına sahip modern gardırop tasarımı.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90",
    size: "small",
  },
  {
    id: 3,
    title: "Minimal TV Ünitesi",
    category: "TV Ünitesi",
    description:
      "Yaşam alanına uyum sağlayan, sade çizgilere ve gizli depolama alanlarına sahip TV ünitesi.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90",
    size: "small",
  },
  {
    id: 4,
    title: "Premium Yatak Odası",
    category: "Yatak Odası",
    description:
      "Ahşap dokular, sıcak aydınlatma ve özel üretim mobilyalarla hazırlanan huzurlu yatak odası.",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1600&q=90",
    size: "large",
  },
  {
    id: 5,
    title: "Fonksiyonel Vestiyer",
    category: "Vestiyer",
    description:
      "Dar alanları verimli kullanan, modern görünümüyle antreye değer katan özel ölçü vestiyer.",
    image:
      "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1400&q=90",
    size: "small",
  },
  {
    id: 6,
    title: "Modern Banyo Dolabı",
    category: "Banyo",
    description:
      "Neme dayanıklı malzemeler ve yalın tasarım anlayışıyla üretilmiş modern banyo dolabı.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=90",
    size: "small",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <section
        id="projeler"
        className="relative overflow-hidden bg-[#080808] py-24 text-white sm:py-28"
      >
        <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-[#C9A14A]/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C9A14A]/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-12 bg-[#C9A14A]" />

                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A14A]">
                  Seçili Projeler
                </span>
              </div>

              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Her detayında
                <span className="block text-[#C9A14A]">
                  ustalık ve tasarım.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
                Mekânın ölçüsüne, kullanım alışkanlıklarına ve tarzınıza özel
                mobilyalar tasarlıyor; üretimden montaja kadar her aşamayı
                titizlikle yönetiyoruz.
              </p>
            </div>

            <a
              href="#iletisim"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-white transition hover:text-[#C9A14A]"
            >
              Projenizi konuşalım

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition duration-300 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
                <MoveRight size={19} />
              </span>
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
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
                  duration: 0.7,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#111111] text-left ${
                  project.size === "large"
                    ? "min-h-[480px] md:min-h-[620px]"
                    : "min-h-[420px] md:min-h-[480px]"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/5" />
                <div className="absolute inset-0 bg-[#C9A14A]/0 transition duration-500 group-hover:bg-[#C9A14A]/5" />

                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <span className="inline-flex rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                  <span className="flex h-12 w-12 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:translate-y-0 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black group-hover:opacity-100">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-[#C9A14A]">
                    0{index + 1}
                  </p>

                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl translate-y-3 text-sm leading-7 text-white/60 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 h-px w-0 bg-[#C9A14A] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#C9A14A]/25 bg-gradient-to-r from-[#17130b] via-[#111111] to-[#0b0b0b] p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
                Sıradaki proje
              </p>

              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Sizin yaşam alanınız olabilir.
              </h3>

              <p className="mt-4 max-w-2xl leading-7 text-white/55">
                Fikrinizi, ölçülerinizi veya beğendiğiniz bir tasarımı bizimle
                paylaşın. Size özel üretim ve fiyatlandırma sürecini birlikte
                planlayalım.
              </p>
            </div>

            <a
              href="#iletisim"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#e0b95c] lg:mt-0"
            >
              Ücretsiz Teklif Al
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-lg sm:p-8"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedProject.title}
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[#101010] shadow-2xl lg:grid lg:grid-cols-[1.35fr_0.65fr]"
            >
              <button
                type="button"
                aria-label="Projeyi kapat"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black sm:right-6 sm:top-6"
              >
                <X size={21} />
              </button>

              <div
                className="min-h-[360px] bg-cover bg-center sm:min-h-[480px] lg:min-h-[680px]"
                style={{
                  backgroundImage: `url("${selectedProject.image}")`,
                }}
              />

              <div className="flex flex-col justify-end p-7 sm:p-10 lg:p-12">
                <span className="w-fit rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
                  {selectedProject.category}
                </span>

                <h3 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
                  {selectedProject.title}
                </h3>

                <p className="mt-5 leading-8 text-white/55">
                  {selectedProject.description}
                </p>

                <div className="my-8 h-px bg-white/10" />

                <p className="text-sm leading-7 text-white/45">
                  Tasarım, ölçülendirme, üretim ve montaj süreçleri mekâna özel
                  olarak planlanmaktadır.
                </p>

                <a
                  href="#iletisim"
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition hover:bg-[#e0b95c]"
                >
                  Benzer Proje İçin Teklif Al
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}