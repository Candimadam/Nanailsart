import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nanails Art — Salon Nail Art Premium",
  description:
    "Percantik kuku Anda dengan perawatan premium dan nail art eksklusif di Nanails Art. Manicure, gel polish, nail extension, dan nail art design terbaik di Jakarta.",
  keywords: [
    "nail art",
    "salon kuku",
    "manicure jakarta",
    "gel polish",
    "nail extension",
    "nanails art",
  ],
  openGraph: {
    title: "Nanails Art — Salon Nail Art Premium",
    description:
      "Percantik kuku Anda dengan perawatan premium dan nail art eksklusif.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
