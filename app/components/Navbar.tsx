"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Ana Sayfa", href: "#anasayfa" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Projeler", href: "#projeler" },
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#C9A14A]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <a href="#anasayfa">
          <h1 className="text-3xl font-bold tracking-wider text-[#C9A14A]">
            ŞAHİN
          </h1>
          <p className="text-xs text-gray-300">Mobilya & Tasarım</p>
        </a>

        <nav className="hidden md:flex gap-8 text-white">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#C9A14A] transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <a
            href="tel:+905333527951"
            className="bg-[#C9A14A] text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Ara
          </a>

          <a
            href="https://wa.me/905333527951"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C9A14A] text-[#C9A14A] px-5 py-2 rounded-lg hover:bg-[#C9A14A] hover:text-black transition"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#C9A14A]"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-[#C9A14A]/20 px-6 py-6">
          <nav className="flex flex-col gap-5 text-white">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#C9A14A] transition"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+905333527951"
              className="bg-[#C9A14A] text-black px-5 py-3 rounded-lg font-semibold text-center"
            >
              Hemen Ara
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}