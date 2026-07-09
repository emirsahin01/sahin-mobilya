export default function Contact() {
  return (
    <section
      id="iletisim"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          İletişim
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          <div className="space-y-8">

            <div>
              <h3 className="text-[#C9A14A] text-xl font-bold">
                Telefon
              </h3>

              <a
                href="tel:+905333527951"
                className="text-gray-300 hover:text-[#C9A14A]"
              >
                +90 533 352 7951
              </a>
            </div>

            <div>
              <h3 className="text-[#C9A14A] text-xl font-bold">
                E-posta
              </h3>

              <a
                href="mailto:sahinemir309@gmail.com"
                className="text-gray-300 hover:text-[#C9A14A]"
              >
                sahinemir309@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-[#C9A14A] text-xl font-bold">
                Adres
              </h3>

              <p className="text-gray-300">
                Alptekin Sokak No:38
                <br />
                Defterdar Mahallesi
                <br />
                Eyüpsultan / İstanbul
              </p>
            </div>

          </div>

          <form className="space-y-5">

            <input
              placeholder="Adınız"
              className="w-full bg-zinc-900 p-4 rounded-xl outline-none border border-zinc-700"
            />

            <input
              placeholder="Telefon"
              className="w-full bg-zinc-900 p-4 rounded-xl outline-none border border-zinc-700"
            />

            <textarea
              rows={5}
              placeholder="Mesajınız"
              className="w-full bg-zinc-900 p-4 rounded-xl outline-none border border-zinc-700"
            />

            <button
              className="bg-[#C9A14A] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
            >
              Teklif Gönder
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}