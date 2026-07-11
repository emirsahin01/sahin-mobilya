import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Şahin Mobilya & Tasarım",
    short_name: "Şahin Mobilya",
    description:
      "İstanbul ve çevresinde özel ölçü mutfak dolabı, gardırop, TV ünitesi, vestiyer, banyo dolabı ve kişiye özel mobilya çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    orientation: "portrait-primary",
    lang: "tr",
    categories: [
      "business",
      "design",
      "lifestyle",
    ],
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}