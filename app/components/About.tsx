const features = [
  {
    number: "01",
    title: "Özel Ölçü Üretim",
    description:
      "Mobilyalarınızı alanınızın ölçülerine, kullanım alışkanlıklarınıza ve tarzınıza göre tasarlıyoruz.",
  },
  {
    number: "02",
    title: "Kaliteli Malzeme",
    description:
      "Uzun ömürlü kullanım için güvenilir, dayanıklı ve estetik malzemeleri tercih ediyoruz.",
  },
  {
    number: "03",
    title: "Özenli İşçilik",
    description:
      "Üretimin her aşamasında detaylara önem veriyor, temiz ve kaliteli işçilik sunuyoruz.",
  },
];

const values = [
  {
    title: "Size Özel Tasarım",
    description:
      "Hazır kalıplar yerine, yaşam alanınıza ve ihtiyaçlarınıza uygun çözümler geliştiriyoruz.",
  },
  {
    title: "Fonksiyonel Kullanım",
    description:
      "Estetik görünümün yanında depolama alanı ve kullanım kolaylığını da ön planda tutuyoruz.",
  },
  {
    title: "Doğrudan İletişim",
    description:
      "Tasarım aşamasından montaja kadar tüm süreçte sizinle doğrudan iletişim kuruyoruz.",
  },
  {
    title: "Titiz Teslimat",
    description:
      "Ürünlerinizi dikkatli şekilde üretiyor, montajını temiz ve özenli biçimde tamamlıyoruz.",
  },
];

export default function About() {
  return (
    <section
      id="hakkimizda"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white"
    >
      <div className="absolute left-[-180px] top-32 h-[420px] w-[420px] rounded-full bg-[#C9A14A]/10 blur-[120px]" />

      <div className="absolute bottom-[-180px] right-[-120px] h-[450px] w-[450px] rounded-full bg-[#C9A14A]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[2.5rem] border-l border-t border-[#C9A14A]/60" />

            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-br-[2.5rem] border-b border-r border-[#C9A14A]/60" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-black/40">
              <div className="relative h-[480px] overflow-hidden rounded-[2rem] md:h-[620px]">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1400&auto=format&fit=crop"
                  alt="Şahin Mobilya özel mobilya tasarımı"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#C9A14A]">
                    Şahin Mobilya & Tasarım
                  </p>

                  <p className="mt-3 max-w-md text-lg font-medium leading-8 text-white md:text-xl">
                    Yaşam alanlarınıza uygun, estetik ve kullanışlı mobilyalar
                    üretiyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/5 px-5 py-2 text-sm font-medium text-[#C9A14A]">
              Hakkımızda
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Mobilyayı yalnızca üretmiyor,
              <span className="block text-[#C9A14A]">
                yaşam alanınızı tasarlıyoruz.
              </span>
            </h2>

            <p className="mt-7 text-base leading-8 text-white/65 md:text-lg">
              Şahin Mobilya olarak mutfak dolabı, gardırop, TV ünitesi, banyo
              dolabı ve özel mobilya ihtiyaçlarınız için ölçüye özel çözümler
              sunuyoruz.
            </p>

            <p className="mt-5 text-base leading-8 text-white/65 md:text-lg">
              Tasarımdan üretime, üretimden montaja kadar bütün süreci titizlikle
              yönetiyor; modern görünümü, işlevsel kullanım ve kaliteli
              işçilikle bir araya getiriyoruz.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#C9A14A]/30 bg-[#C9A14A]/10 text-sm font-bold text-[#C9A14A]">
                    {feature.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/55">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#iletisim"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white"
            >
              Bizimle İletişime Geç
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        <div className="mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C9A14A]">
              Neden Şahin Mobilya?
            </p>

            <h3 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              Her ayrıntıda kalite ve güven
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
              Mobilyalarınızın yalnızca güzel görünmesini değil, günlük
              hayatınızı kolaylaştırmasını ve uzun yıllar kullanılmasını
              hedefliyoruz.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#C9A14A]/40"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#C9A14A]/5 transition duration-500 group-hover:bg-[#C9A14A]/10" />

                <span className="relative text-sm font-bold text-[#C9A14A]">
                  0{index + 1}
                </span>

                <h4 className="relative mt-10 text-xl font-semibold">
                  {value.title}
                </h4>

                <p className="relative mt-4 text-sm leading-7 text-white/55">
                  {value.description}
                </p>

                <div className="relative mt-8 h-px w-12 bg-[#C9A14A]/60 transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-[#C9A14A]/25 bg-gradient-to-r from-[#C9A14A]/15 via-white/[0.03] to-[#C9A14A]/10 p-8 md:flex-row md:p-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C9A14A]">
              Projenizi birlikte planlayalım
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
              Evinize özel mobilya çözümleri için ilk adımı atın.
            </h3>
          </div>

          <a
            href="#iletisim"
            className="shrink-0 rounded-full border border-[#C9A14A] px-8 py-4 font-semibold text-[#C9A14A] transition duration-300 hover:bg-[#C9A14A] hover:text-black"
          >
            Ücretsiz Teklif Al
          </a>
        </div>
      </div>
    </section>
  );
}