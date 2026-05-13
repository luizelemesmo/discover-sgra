import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Inter — clean, neutral, ultra-readable body & UI font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Plus Jakarta Sans — geometric, elegant display font for headings & hero
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Geist Mono — kept for code/data elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Discover SGRA — Turismo em São Gonçalo do Rio Abaixo",
  description:
    "Descubra a beleza natural, o patrimônio histórico e as experiências culturais únicas de São Gonçalo do Rio Abaixo, MG. A plataforma de turismo inteligente do Vale do Rio Doce.",
  keywords: "São Gonçalo do Rio Abaixo, turismo, Minas Gerais, natureza, cultura, patrimônio, SGRA",
  openGraph: {
    title: "Discover SGRA — Turismo Inteligente",
    description: "A plataforma de turismo de São Gonçalo do Rio Abaixo",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${plusJakartaSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
