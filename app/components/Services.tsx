"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Mutfak Dolabı", desc: "Modern ve kullanışlı mutfak tasarımları.", icon: "🍽️" },
    { title: "Gardırop", desc: "Özel ölçüye göre sürgülü ve kapaklı gardıroplar.", icon: "🚪" },
    { title: "TV Ünitesi", desc: "Salonunuza özel modern TV üniteleri.", icon: "📺" },
    { title: "Banyo Dolabı", desc: "Şık ve dayanıklı banyo mobilyaları.", icon: "🛁" },
    { title: "Vestiyer", desc: "Antreye özel fonksiyonel vestiyer tasarımları.", icon: "🪵" },
    { title: "Özel Tasarım", desc: "Hayalinizdeki mobilyayı birlikte tasarlıyoruz.", icon: "✨" },
  ];

  return (
    <section id="hizmetler" className="bg-[#111111] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-[#C9A14A]">
            Hizmetlerimiz
          </h2>

          <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
            Her projeyi kalite, estetik ve dayanıklılığı ön planda tutarak tasarlıyor ve üretiyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1b1b1b] rounded-2xl p-8 border border-[#2d2d2d] hover:border-[#C9A14A] hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">{service.icon}</div>

              <h3 className="text-2xl font-semibold mt-6 text-white">
                {service.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}