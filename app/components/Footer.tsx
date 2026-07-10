import {
  ArrowUp,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";

const navigationLinks = [
  {
    name: "Ana Sayfa",
    href: "#anasayfa",
  },
  {
    name: "Hizmetler",
    href: "#hizmetler",
  },
  {
    name: "Projeler",
    href: "#projeler",
  },
  {
    name: "Hakkımızda",
    href: "#hakkimizda",
  },
  {
    name: "Yorumlar",
    href: "#yorumlar",
  },
  {
    name: "İletişim",
    href: "#iletisim",
  },
];

const serviceLinks = [
  "Mutfak Dolabı",
  "Gardırop",
  "TV Ünitesi",
  "Vestiyer",
  "Banyo Dolabı",
  "Özel Tasarım",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-[#C9A14A]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
          <div>
            <a
              href="#anasayfa"
              aria-label="Şahin Mobilya ana sayfa"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="Şahin Mobilya ve Tasarım"
                width={190}
                height={70}
                className="h-auto w-[165px] object-contain sm:w-[185px]"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Mobilyayı yalnızca üretmiyor, yaşam alanınıza özel olarak
              tasarlıyoruz. Ölçüden montaja kadar her aşamada kaliteli işçilik
              ve modern çözümler sunuyoruz.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <Instagram size={19} />
              </a>

              <a
                href="https://wa.me/905333527951?text=Merhaba%20Şahin%20Mobilya%2C%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <MessageCircle size={19} />
              </a>

              <a
                href="tel:+905333527951"
                aria-label="Telefon"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition duration-300 hover:border-[#C9A14A] hover:bg-[#C9A14A] hover:text-black"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
              Menü
            </h3>

            <ul className="mt-6 space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition duration-300 hover:pl-1 hover:text-[#C9A14A]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
              Hizmetler
            </h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#hizmetler"
                    className="text-sm text-white/55 transition duration-300 hover:pl-1 hover:text-[#C9A14A]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A14A]">
              İletişim
            </h3>

            <div className="mt-6 space-y-5">
              <a
                href="tel:+905333527951"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A14A]"
                />

                <div>
                  <p className="text-xs text-white/35">Telefon</p>
                  <p className="mt-1 text-sm text-white/65 transition group-hover:text-[#C9A14A]">
                    +90 533 352 79 51
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@sahinmobilya.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A14A]"
                />

                <div>
                  <p className="text-xs text-white/35">E-posta</p>
                  <p className="mt-1 break-all text-sm text-white/65 transition group-hover:text-[#C9A14A]">
                    info@sahinmobilya.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C9A14A]"
                />

                <div>
                  <p className="text-xs text-white/35">Hizmet Bölgesi</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">
                    İstanbul ve çevresi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Şahin Mobilya & Tasarım. Tüm hakları saklıdır.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#anasayfa"
              className="group inline-flex items-center gap-2 text-white/45 transition hover:text-[#C9A14A]"
            >
              Başa dön
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition group-hover:border-[#C9A14A]">
                <ArrowUp size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}