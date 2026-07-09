export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Arka Plan */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* Karartma */}
      <div className="absolute inset-0 bg-black/70" />

      {/* İçerik */}
      <div className="relative z-10 max-w-5xl text-center px-6">

        <p className="uppercase tracking-[8px] text-[#C9A14A] text-sm md:text-base">
          Şahin Mobilya & Tasarım
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Hayalinizdeki
          <span className="text-[#C9A14A]">
            {" "}Yaşam Alanlarını{" "}
          </span>
          Gerçeğe Dönüştürüyoruz
        </h1>

        <p className="mt-8 text-gray-300 text-lg max-w-2xl mx-auto">
          Mutfak dolabı, gardırop, TV ünitesi, vestiyer ve tamamen size özel
          mobilyalar tasarlıyor ve üretiyoruz.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">

          <a
            href="tel:+905333527951"
            className="bg-[#C9A14A] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            📞 Hemen Ara
          </a>

          <a
            href="https://wa.me/905333527951"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C9A14A] text-[#C9A14A] px-8 py-4 rounded-xl hover:bg-[#C9A14A] hover:text-black transition"
          >
            💬 WhatsApp
          </a>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-16">

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-[#C9A14A]">500+</h2>
            <p className="text-gray-300 mt-2">
              Tamamlanan Proje
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-[#C9A14A]">10+</h2>
            <p className="text-gray-300 mt-2">
              Yıllık Deneyim
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold text-[#C9A14A]">%100</h2>
            <p className="text-gray-300 mt-2">
              Memnuniyet
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}