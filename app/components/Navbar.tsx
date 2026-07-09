"use client";

import Image from "next/image";
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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#C9A14A]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#anasayfa" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Şahin Mobilya & Tasarım"
            width={64}
            height={64}
            priority
            className="h-14 w-14 rounded-full object-cover border border-[#C9A14A]/40"
          />

          <div className="leading-tight">
            <div className="text-white font-semibold text-lg">
              Şahin Mobilya
            </div>
            <div className="text-[#C9A14A] text-sm">
              Mobilya & Tasarım
            </div>
          </div>
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
            className="bg-[#C9A14A] text-black px-5 py-2 rounded-lg font-semibold"
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
    </header>
  );
}