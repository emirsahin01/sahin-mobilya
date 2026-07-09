const projects = [
  {
    title: "Modern Mutfak",
    category: "Mutfak Tasarımı",
    description: "Fonksiyonel, şık ve özel ölçü mutfak çözümleri.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lüks Gardırop",
    category: "Gardırop",
    description: "Alanınıza özel, kullanışlı ve modern gardırop üretimi.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TV Ünitesi",
    category: "Yaşam Alanı",
    description: "Salonunuza değer katan zarif TV ünitesi tasarımları.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Banyo Dolabı",
    category: "Banyo Mobilyası",
    description: "Neme dayanıklı, estetik ve ölçüye özel banyo dolapları.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="projeler"
      className="relative overflow-hidden bg-[#0f0f0f] px-6 py-28 text-white"
    >
      <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-[#C9A14A]/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-[#C9A14A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#C9A14A]/40 px-5 py-2 text-sm font-medium text-[#C9A14A]">
            Projelerimiz
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-6xl">
            Yaşam alanlarınıza özel premium mobilya çözümleri
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Mutfak, gardırop, TV ünitesi ve banyo dolaplarında modern tasarım,
            kaliteli malzeme ve özenli işçiliği bir araya getiriyoruz.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30 transition duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/50 ${
                index % 2 === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <div className="relative h-[360px] overflow-hidden md:h-[430px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                <div className="absolute inset-0 bg-[#C9A14A]/0 transition duration-500 group-hover:bg-[#C9A14A]/10" />
              </div>

              <div className="absolute left-6 top-6">
                <span className="rounded-full bg-black/50 px-4 py-2 text-xs font-medium text-[#C9A14A] backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                <h3 className="text-3xl font-bold md:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/65 md:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-sm font-medium text-[#C9A14A]">
                  <span>Projeyi İncele</span>
                  <span className="transition duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 overflow-hidden rounded-[2rem] border border-[#C9A14A]/30 bg-gradient-to-r from-[#C9A14A]/20 via-white/[0.03] to-[#C9A14A]/10 p-8 text-center md:p-12">
          <h3 className="text-3xl font-bold md:text-4xl">
            Sıradaki özel proje sizin olabilir
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Evinize ve ölçülerinize uygun mobilya tasarımı için bizimle
            iletişime geçin, size özel çözümü birlikte planlayalım.
          </p>

          <a
            href="#iletisim"
            className="mt-8 inline-flex rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Ücretsiz Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}