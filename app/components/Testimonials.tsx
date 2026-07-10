const testimonials = [
  {
    name: "Ahmet Y.",
    service: "Mutfak Dolabı",
    comment:
      "Mutfak dolaplarımız tam istediğimiz gibi oldu. Ölçü alma, üretim ve montaj sürecinin tamamında çok ilgili ve titiz çalıştılar.",
  },
  {
    name: "Mehmet K.",
    service: "Gardırop",
    comment:
      "Odamıza özel yapılan gardırop hem çok kullanışlı hem de oldukça şık oldu. İşçilikten ve iletişimden memnun kaldık.",
  },
  {
    name: "Selin A.",
    service: "TV Ünitesi",
    comment:
      "Salonumuza uygun modern bir TV ünitesi tasarlandı. Detaylara gösterilen özen ve temiz montaj gerçekten çok başarılıydı.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="yorumlar"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 text-white"
    >
      <div className="absolute left-[-180px] top-20 h-[400px] w-[400px] rounded-full bg-[#C9A14A]/10 blur-[120px]" />

      <div className="absolute bottom-[-180px] right-[-120px] h-[420px] w-[420px] rounded-full bg-[#C9A14A]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/5 px-5 py-2 text-sm font-medium text-[#C9A14A]">
            Müşteri Yorumları
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Güvenle tamamlanan projeler,
            <span className="block text-[#C9A14A]">
              memnun kalan müşteriler
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Tasarım, üretim ve montaj sürecinde kaliteli işçilik ve güçlü
            iletişimle çalışıyoruz.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/5 ${
                index === 1 ? "lg:-translate-y-6" : ""
              }`}
            >
              <div className="absolute right-6 top-4 text-8xl font-serif leading-none text-[#C9A14A]/10 transition duration-500 group-hover:text-[#C9A14A]/20">
                “
              </div>

              <div className="relative flex items-center gap-1 text-[#C9A14A]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="relative mt-8 min-h-[170px] text-base leading-8 text-white/70 md:text-lg">
                “{testimonial.comment}”
              </p>

              <div className="relative mt-8 h-px w-full bg-white/10">
                <div className="h-full w-14 bg-[#C9A14A]/70 transition-all duration-500 group-hover:w-full" />
              </div>

              <div className="relative mt-7 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A14A]/30 bg-[#C9A14A]/10 text-lg font-bold text-[#C9A14A]">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/45">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] sm:grid-cols-3">
          <div className="border-b border-white/10 p-8 text-center sm:border-b-0 sm:border-r">
            <p className="text-4xl font-bold text-[#C9A14A]">5.0</p>
            <p className="mt-3 text-sm text-white/50">
              Müşteri memnuniyeti hedefi
            </p>
          </div>

          <div className="border-b border-white/10 p-8 text-center sm:border-b-0 sm:border-r">
            <p className="text-4xl font-bold text-[#C9A14A]">Özel</p>
            <p className="mt-3 text-sm text-white/50">
              Ölçüye ve ihtiyaca uygun tasarım
            </p>
          </div>

          <div className="p-8 text-center">
            <p className="text-4xl font-bold text-[#C9A14A]">Titiz</p>
            <p className="mt-3 text-sm text-white/50">
              Üretim ve montaj süreci
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-[#C9A14A]/25 bg-gradient-to-r from-[#C9A14A]/15 via-white/[0.03] to-[#C9A14A]/10 p-8 md:flex-row md:p-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C9A14A]">
              Sizin projeniz
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
              Memnuniyetle kullanacağınız mobilyaları birlikte tasarlayalım.
            </h3>
          </div>

          <a
            href="#iletisim"
            className="shrink-0 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
          >
            Ücretsiz Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}