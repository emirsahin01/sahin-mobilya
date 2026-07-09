export default function About() {
  return (
    <section id="hakkimizda" className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
            alt="Atölye"
            className="rounded-3xl shadow-2xl w-full h-[550px] object-cover"
          />
        </div>

        <div>

          <p className="uppercase tracking-[5px] text-[#C9A14A]">
            Hakkımızda
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Kaliteli İşçilik,
            <span className="text-[#C9A14A]">
              {" "}Modern Tasarım
            </span>
          </h2>

          <p className="text-gray-400 mt-8 leading-8 text-lg">
            Şahin Mobilya & Tasarım olarak yıllardır mutfak dolabı,
            gardırop, TV ünitesi, vestiyer ve özel ölçü mobilya
            üretimi yapıyoruz.
          </p>

          <p className="text-gray-400 mt-6 leading-8 text-lg">
            Her projede kaliteli malzeme, sağlam işçilik ve modern
            tasarımı bir araya getirerek müşterilerimize uzun yıllar
            kullanabilecekleri yaşam alanları sunuyoruz.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d]">
              <h3 className="text-4xl font-bold text-[#C9A14A]">
                500+
              </h3>

              <p className="text-gray-300 mt-2">
                Tamamlanan Proje
              </p>
            </div>

            <div className="bg-[#1a1a1a] rounded-2xl p-6 border border-[#2d2d2d]">
              <h3 className="text-4xl font-bold text-[#C9A14A]">
                %100
              </h3>

              <p className="text-gray-300 mt-2">
                Müşteri Memnuniyeti
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}