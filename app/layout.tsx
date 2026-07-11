import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Şahin Mobilya & Tasarım",
    template: "%s | Şahin Mobilya",
  },

  description:
    "İstanbul ve çevresinde özel ölçü mutfak dolabı, gardırop, TV ünitesi, vestiyer, banyo dolabı ve kişiye özel mobilya tasarım hizmetleri.",

  applicationName: "Şahin Mobilya & Tasarım",

  keywords: [
    "Şahin Mobilya",
    "özel ölçü mobilya",
    "İstanbul mobilya",
    "mutfak dolabı",
    "gardırop",
    "TV ünitesi",
    "vestiyer",
    "banyo dolabı",
    "özel tasarım mobilya",
    "mobilya tasarımı",
    "mobilya imalatı",
    "mobilya montajı",
    "İstanbul marangoz",
  ],

  authors: [
    {
      name: "Şahin Mobilya & Tasarım",
    },
  ],

  creator: "Şahin Mobilya & Tasarım",
  publisher: "Şahin Mobilya & Tasarım",

  category: "Mobilya ve İç Mekân Tasarımı",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Şahin Mobilya & Tasarım",
    title: "Şahin Mobilya & Tasarım",
    description:
      "Mekânınıza ve ihtiyaçlarınıza özel mutfak, gardırop, TV ünitesi, vestiyer, banyo dolabı ve mobilya çözümleri.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Şahin Mobilya & Tasarım",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Şahin Mobilya & Tasarım",
    description:
      "İstanbul ve çevresinde özel ölçü mobilya tasarım, üretim ve montaj hizmetleri.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    languages: {
      "tr-TR": "/",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={poppins.variable}>
      <body
        className={`${poppins.className} min-h-screen bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}