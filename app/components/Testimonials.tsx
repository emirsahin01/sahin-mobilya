export default function Testimonials() {
  const comments = [
    {
      name: "Ahmet Y.",
      text: "Mutfak dolabımız tam istediğimiz gibi oldu. İşçilik gerçekten çok kaliteli.",
    },
    {
      name: "Ayşe K.",
      text: "Zamanında teslim edildi. Fiyat performans açısından kesinlikle tavsiye ederim.",
    },
    {
      name: "Mehmet D.",
      text: "TV ünitesi ve gardırop yaptırdık. Sonuç beklediğimizden çok daha güzel oldu.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-[#C9A14A]">
          Müşteri Yorumları
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Müşterilerimizin bizim hakkımızda söyledikleri
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {comments.map((item) => (
            <div
              key={item.name}
              className="bg-[#1a1a1a] rounded-3xl p-8 border border-[#2d2d2d] hover:border-[#C9A14A] transition"
            >
              <div className="text-[#C9A14A] text-3xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8">
                "{item.text}"
              </p>

              <h3 className="text-white font-semibold mt-8">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}