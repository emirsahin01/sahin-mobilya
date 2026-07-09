export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#2d2d2d] py-12 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold text-[#C9A14A]">
              ŞAHİN
            </h2>

            <p className="text-gray-400 mt-2">
              Mobilya & Tasarım
            </p>

            <p className="text-gray-500 mt-5 leading-7">
              Özel ölçü mobilya, mutfak dolabı, gardırop, TV ünitesi
              ve dekorasyon çözümleri.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C9A14A] mb-5">
              Menü
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#anasayfa" className="hover:text-[#C9A14A]">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-[#C9A14A]">
                  Hizmetler
                </a>
              </li>
              <li>
                <a href="#projeler" className="hover:text-[#C9A14A]">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-[#C9A14A]">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#C9A14A] mb-5">
              İletişim
            </h3>

            <p className="text-gray-400">
              📞 +90 533 352 79 51
            </p>

            <p className="text-gray-400 mt-3">
              ✉️ sahinemir309@gmail.com
            </p>

            <p className="text-gray-400 mt-3">
              📍 Eyüpsultan / İstanbul
            </p>
          </div>

        </div>

        <div className="border-t border-[#2d2d2d] mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} Şahin Mobilya & Tasarım. Tüm hakları saklıdır.
        </div>

      </div>
    </footer>
  );
}