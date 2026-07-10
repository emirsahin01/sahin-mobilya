"use client";

import { FormEvent, useState } from "react";

const contactItems = [
  {
    title: "WhatsApp",
    value: "+90 533 352 79 51",
    href: "https://wa.me/905333527951",
    icon: "WA",
  },
  {
    title: "Çalışma Alanlarımız",
    value: "Mutfak, gardırop, TV ünitesi, banyo ve özel tasarım",
    href: "#hizmetler",
    icon: "01",
  },
  {
    title: "Teklif Süreci",
    value: "Ölçü, tasarım, üretim ve montaj",
    href: "#iletisim-formu",
    icon: "02",
  },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const service = String(form.get("service") || "").trim();
    const location = String(form.get("location") || "").trim();
    const message = String(form.get("message") || "").trim();

    const whatsappMessage = [
      "Merhaba Şahin Mobilya, web siteniz üzerinden teklif almak istiyorum.",
      "",
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Hizmet: ${service}`,
      `Konum: ${location || "Belirtilmedi"}`,
      "",
      "Proje Detayı:",
      message,
    ].join("\n");

    const whatsappUrl = `https://wa.me/905333527951?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSending(false);
    }, 800);
  }

  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white"
    >
      <div className="absolute left-[-170px] top-20 h-[420px] w-[420px] rounded-full bg-[#C9A14A]/10 blur-[130px]" />

      <div className="absolute bottom-[-180px] right-[-120px] h-[450px] w-[450px] rounded-full bg-[#C9A14A]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/5 px-5 py-2 text-sm font-medium text-[#C9A14A]">
            İletişim
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Hayalinizdeki mobilyayı
            <span className="block text-[#C9A14A]">
              birlikte tasarlayalım
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            Projenizle ilgili bilgileri paylaşın. Formu doldurduğunuzda
            WhatsApp üzerinden bize doğrudan ulaşabilirsiniz.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-[#C9A14A]/25 bg-gradient-to-br from-[#C9A14A]/15 via-white/[0.03] to-transparent p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.28em] text-[#C9A14A]">
                Şahin Mobilya & Tasarım
              </p>

              <h3 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
                Ölçünüze, tarzınıza ve ihtiyacınıza özel çözümler
              </h3>

              <p className="mt-6 leading-8 text-white/60">
                Mutfak dolabı, gardırop, TV ünitesi, banyo dolabı ve özel
                mobilya ihtiyaçlarınız için tasarımdan montaja kadar tüm süreci
                birlikte planlıyoruz.
              </p>

              <a
                href="https://wa.me/905333527951"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C9A14A] px-7 py-4 font-semibold text-black transition duration-300 hover:bg-white"
              >
                WhatsApp&apos;tan Ulaş
                <span className="text-xl">→</span>
              </a>
            </div>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#C9A14A]/40 hover:bg-[#C9A14A]/5"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#C9A14A]/30 bg-[#C9A14A]/10 text-sm font-bold text-[#C9A14A]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-sm text-white/40">{item.title}</p>
                    <p className="mt-1 font-medium leading-6 text-white/85">
                      {item.value}
                    </p>
                  </div>

                  <span className="ml-auto text-xl text-[#C9A14A] transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-semibold text-[#C9A14A]">
                Teklif öncesinde hazırlayabilecekleriniz
              </p>

              <div className="mt-5 space-y-4 text-sm leading-6 text-white/55">
                <p>
                  <span className="mr-3 text-[#C9A14A]">01.</span>
                  Mobilyanın yapılacağı alanın yaklaşık ölçüleri
                </p>

                <p>
                  <span className="mr-3 text-[#C9A14A]">02.</span>
                  Beğendiğiniz renk, model veya örnek görseller
                </p>

                <p>
                  <span className="mr-3 text-[#C9A14A]">03.</span>
                  Projenin yapılacağı ilçe veya konum bilgisi
                </p>
              </div>
            </div>
          </div>

          <div
            id="iletisim-formu"
            className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/30 md:p-10"
          >
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#C9A14A]">
                Ücretsiz Teklif Formu
              </p>

              <h3 className="mt-4 text-3xl font-bold md:text-4xl">
                Projenizi bize anlatın
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Bilgilerinizi doldurduktan sonra mesajınız WhatsApp&apos;ta
                hazır olarak açılacaktır.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium text-white/70"
                  >
                    Ad Soyad
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Adınızı ve soyadınızı yazın"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/70 focus:bg-black/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-medium text-white/70"
                  >
                    Telefon
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="05XX XXX XX XX"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/70 focus:bg-black/50"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="service"
                    className="mb-3 block text-sm font-medium text-white/70"
                  >
                    İlgilendiğiniz Hizmet
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none transition focus:border-[#C9A14A]/70"
                  >
                    <option value="" disabled>
                      Hizmet seçin
                    </option>
                    <option value="Mutfak Dolabı">Mutfak Dolabı</option>
                    <option value="Gardırop">Gardırop</option>
                    <option value="TV Ünitesi">TV Ünitesi</option>
                    <option value="Banyo Dolabı">Banyo Dolabı</option>
                    <option value="Vestiyer">Vestiyer</option>
                    <option value="Özel Tasarım Mobilya">
                      Özel Tasarım Mobilya
                    </option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-3 block text-sm font-medium text-white/70"
                  >
                    İlçe / Konum
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Projenin yapılacağı konum"
                    className="w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/70 focus:bg-black/50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-white/70"
                >
                  Proje Detayı
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={7}
                  placeholder="Yaptırmak istediğiniz mobilyayı, ölçüleri ve taleplerinizi kısaca anlatın..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#C9A14A]/70 focus:bg-black/50"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#C9A14A] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-white disabled:cursor-wait disabled:opacity-70"
              >
                {isSending ? "WhatsApp Açılıyor..." : "WhatsApp ile Teklif Al"}
                {!isSending && <span className="text-xl">→</span>}
              </button>

              <p className="text-center text-xs leading-5 text-white/35">
                Form gönderildiğinde WhatsApp açılır. Mesajı kontrol ederek
                kendiniz gönderebilirsiniz.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}