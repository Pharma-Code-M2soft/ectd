import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eCTD Group | Plataforma de Submissoes Regulatorias com IA",
  description:
    "Plataforma inteligente para preparacao e gestao de dossies eCTD. Reduza o tempo de submissao para ANVISA em ate 50%.",
  keywords: [
    "eCTD",
    "ANVISA",
    "submissao regulatoria",
    "farmaceutico",
    "dossie eletronico",
    "regulatory affairs",
  ],
  authors: [{ name: "eCTD Group" }],
  openGraph: {
    title: "eCTD Group | Plataforma de Submissoes Regulatorias com IA",
    description:
      "Plataforma inteligente para preparacao e gestao de dossies eCTD. Reduza o tempo de submissao para ANVISA em ate 50%.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
