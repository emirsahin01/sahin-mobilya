"use client";

import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { MouseEvent, useState } from "react";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  number: string;
};

const projects: Project[] = [
  {
    title: "Modern Mutfak",
    category: "Mutfak Tasarımı",
    description:
      "Fonksiyonel depolama alanları, modern çizgiler ve mekâna özel ölçülerle hazırlanan mutfak uygulaması.",
    image:
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=90",
    number: "01",
  },
  {
    title: "Premium Gardırop",
    category: "Yatak Odası",
    description:
      "Kullanım ihtiyaçlarına göre planlanan iç bölümler ve sade detaylarla hazırlanan özel ölçü gardırop.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=90",
    number: "02",
  },
  {
    title: "TV Ünitesi",
    category: "Salon Tasarımı",
    description:
      "Salonun mimarisine uyum sağlayan depolama alanları ve dekoratif detaylara sahip modern TV ünitesi.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90",
    number: "03",
  },
  {
    title: "Şık Vestiyer",
    category: "Antre Tasarımı",
    description:
      "Dar alanları verimli kullanan, düzenli depolama sunan ve giriş alanına değer katan vestiyer tasarımı.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=90",
    number: "04",
  },
  {
    title: "Banyo Dolabı",
    category: "Banyo Tasarımı",
    description:
      "Neme dayanıklı malzemeler, kolay kullanım ve modern görünümle tasarlanan özel ölçü banyo mobilyası.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=90",
    number: "05",
  },
  {
    title: "Çalışma Alanı",
    category: "Özel Tasarım",
    description:
      "Verimli çalışma düzeni, güçlü depolama ve sade estetik anlayışıyla hazırlanan kişiye özel çalışma alanı.",
    image:
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&w=1400&q=90",
    number: "06",
  },
];

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);

  const rotateX = useSpring(rotateXValue, {
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  });

  const rotateY = useSpring(rotateYValue, {
    stiffness: 180,
    damping: 22,
    mass: 0.7,
  });

  const imageX = useTransform(rotateY, [-8, 8], [-10, 10]);
  const imageY = useTransform(rotateX, [-8, 8], [10, -10]);

  const handleMouseMove = (
    event: MouseEvent<HTMLElement>,
  ) => {
    const card = event.currentTarget;
    const rectangle = card.getBoundingClientRect();

    const mouseX = event.clientX - rectangle.left;
    const mouseY = event.clientY - rectangle.top;

    const centerX = rectangle.width / 2;
    const centerY = rectangle.height / 2;

    const rotateYAmount =
      ((mouseX - centerX) / centerX) * 6;

    const rotateXAmount =
      ((centerY - mouseY) / centerY) * 6;

    rotateXValue.set(rotateXAmount);
    rotateYValue.set(rotateYAmount);
  };

  const handleMouseLeave = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 55,
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-[#C9A14A]/0 blur-3xl transition duration-700 group-hover:bg-[#C9A14A]/10" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-2 shadow-2xl transition duration-500 group-hover:border-[#C9A14A]/30">
        <div className="relative h-[440px] overflow-hidden rounded-[1.6rem] sm:h-[500px]">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              x: imageX,
              y: imageY,
              scale: 1.07,
            }}
            className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.13]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

          <div className="absolute inset-0 bg-[#C9A14A]/0 transition duration-500 group-hover:bg-[#C9A14A]/5" />

          <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
            <span className="rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 backdrop-blur-xl sm:text-xs">
              {project.category}
            </span>

            <span className="text-sm font-semibold tracking-[0.2em] text-white/45">
              {project.number}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
            <motion.div
              style={{
                translateZ: 55,
              }}
            >
              <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {project.title}
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/55 transition duration-500 group-hover:text-white/70">
                {project.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-5">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A14A]">
                  Projeyi incele
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white transition duration-500 group-hover:rotate-45 group-hover:border-[#C9A14A] group-hover:bg-[#C9A14A] group-hover:text-black">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(4);

  const showAllProjects = () => {
    setVisibleCount(projects.length);
  };

  return (
    <section
      id="projeler"
      className="relative overflow-hidden bg-black py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-220px] top-1/3 h-[500px] w-[500px] rounded-full bg-[#C9A14A]/8 blur-[170px]" />

      <div className="pointer-events-none absolute right-[-200px] top-20 h-[450px] w-[450px] rounded-full bg-[#C9A14A]/5 blur-[160px]" />

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
              }}
              transition={{
                duration: 0.65,
              }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-[#C9A14A]" />

              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A14A]">
                Seçili Projeler
              </span>
            </motion.div>

            <motion.h2
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
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl"
            >
              Her mekâna özel,
              <span className="block text-[#C9A14A]">
                güçlü tasarım çözümleri.
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
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="max-w-xl"
          >
            <p className="text-base leading-8 text-white/50">
              Ölçüden malzeme seçimine, üretimden montaja kadar
              her ayrıntıyı mekânınıza ve kullanım
              alışkanlıklarınıza göre planlıyoruz.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <button
                type="button"
                aria-label="Önceki projeler"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                aria-label="Sonraki projeler"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/50 transition hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-7 lg:grid-cols-2 lg:gap-8">
          {projects
            .slice(0, visibleCount)
            .map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
        </div>

        {visibleCount < projects.length && (
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
            }}
            transition={{
              duration: 0.65,
            }}
            className="mt-12 flex justify-center"
          >
            <button
              type="button"
              onClick={showAllProjects}
              className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-full border border-[#C9A14A]/35 bg-[#C9A14A]/10 px-7 text-sm font-semibold text-[#C9A14A] transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
            >
              Tüm Projeleri Gör
              <Sparkles
                size={18}
                className="transition duration-300 group-hover:rotate-12"
              />
            </button>
          </motion.div>
        )}

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
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-[#C9A14A]/20 bg-[#C9A14A]/[0.07] px-6 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12 lg:py-12"
        >
          <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#C9A14A]/15 blur-[100px]" />

          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9A14A]">
              Yeni Projeniz
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Sıradaki özel proje
              <span className="text-[#C9A14A]">
                {" "}
                sizin olabilir.
              </span>
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              Mekânınızı birlikte inceleyelim, ihtiyaçlarınızı
              belirleyelim ve size özel tasarım teklifimizi
              hazırlayalım.
            </p>
          </div>

          <a
            href="#iletisim"
            className="group relative mt-8 inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-7 text-sm font-semibold text-black transition duration-300 hover:bg-[#dfba65] lg:ml-10 lg:mt-0"
          >
            Projenizi Konuşalım
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