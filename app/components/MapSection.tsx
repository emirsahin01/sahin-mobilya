import {
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

const contactItems = [
  {
    icon: MapPin,
    title: "Hizmet Bölgesi",
    description: "İstanbul ve çevresi",
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "+90 533 352 79 51",
  },
  {
    icon: Clock3,
    title: "Çalışma Saatleri",
    description: "Pazartesi - Cumartesi / 08.00 - 20.00",
  },
];

export default function MapSection() {
  return (
    <section
      id="konum"
      className="relative overflow-hidden bg-[#080808] py-24 text-white"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-[#C9A14A]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#C9A14A]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-[#C9A14A]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A14A]">
              Konum ve İletişim
            </span>
          </div>

          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Hayalinizdeki mobilya için
            <span className="block text-[#C9A14A]">
              bizimle iletişime geçin.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Özel ölçü mobilya, mutfak, gardırop, TV ünitesi ve dekorasyon
            projeleriniz için ücretsiz keşif ve fiyat teklifi alabilirsiniz.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-2xl shadow-black/50 lg:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <div className="mb-9 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#C9A14A]/30 bg-[#C9A14A]/10 text-[#C9A14A]">
                <Navigation size={25} />
              </div>

              <h3 className="text-3xl font-semibold">
                Şahin Mobilya
                <span className="block text-[#C9A14A]">& Tasarım</span>
              </h3>

              <p className="mt-5 max-w-md leading-7 text-white/55">
                İstanbul genelinde ölçü alma, tasarım, üretim ve montaj
                hizmetleri sunuyoruz.
              </p>

              <div className="mt-10 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4 transition duration-300 hover:border-[#C9A14A]/30 hover:bg-[#C9A14A]/5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#C9A14A]/10 text-[#C9A14A]">
                        <Icon size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-white/45">
                          {item.title}
                        </p>

                        <p className="mt-1 text-sm font-medium text-white sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a
                href="https://wa.me/905333527951?text=Merhaba%20Şahin%20Mobilya%2C%20projem%20için%20ücretsiz%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-6 text-sm font-semibold text-black transition duration-300 hover:bg-[#e0b95c]"
              >
                <MessageCircle size={19} />
                WhatsApp
              </a>

              <a
                href="tel:+905333527951"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition duration-300 hover:border-[#C9A14A] hover:text-[#C9A14A]"
              >
                <Phone size={18} />
                Hemen Ara
              </a>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden border-t border-white/10 lg:min-h-[680px] lg:border-l lg:border-t-0">
            <iframe
              title="Şahin Mobilya konumu"
              src="https://www.google.com/maps?q=İstanbul%2C%20Türkiye&z=11&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-[1.08] brightness-[0.7]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#111111]/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/70 p-5 shadow-xl backdrop-blur-xl sm:bottom-8 sm:left-8 sm:right-auto sm:max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A14A]">
                Hizmet Alanımız
              </p>

              <p className="mt-2 text-lg font-semibold text-white">
                İstanbul ve çevresi
              </p>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Projeniz için adresinize gelerek ücretsiz ön görüşme ve ölçü
                hizmeti sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}