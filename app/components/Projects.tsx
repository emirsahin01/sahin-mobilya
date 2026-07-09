const projects = [
  {
    title: "Modern Mutfak",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Lüks Gardırop",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "TV Ünitesi",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Banyo Dolabı",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projeler" className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-[#C9A14A]">
          Projelerimiz
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Ürettiğimiz bazı örnek çalışmalar
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition"></div>

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}