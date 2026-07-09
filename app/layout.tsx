import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Şahin Mobilya & Tasarım",
  description:
    "Özel ölçü mutfak, gardırop, TV ünitesi, vestiyer ve dekorasyon çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${poppins.className} min-h-screen bg-[#111111]`}>
        {children}
      </body>
    </html>
  );
}