export default function MapSection() {
  return (
    <section className="bg-[#111111] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#C9A14A]">
          Bize Ulaşın
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Defterdar Mahallesi, Eyüpsultan / İstanbul
        </p>

        <div className="rounded-3xl overflow-hidden border border-[#C9A14A]/30 shadow-2xl">
          <iframe
            src="https://www.google.com/maps?q=Alptekin%20Sokak%20No%2038%20Defterdar%20Mahallesi%20Ey%C3%BCpsultan%20%C4%B0stanbul&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}