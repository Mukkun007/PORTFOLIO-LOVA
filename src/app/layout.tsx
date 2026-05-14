import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-lova.vercel.app"),
  title: "Tahiana Lova — Backend Developer | Symfony & Node.js",
  description:
    "Ingénieur backend basé à Madagascar, spécialisé en Symfony et Node.js. Disponible pour des missions freelance internationales sur Malt et Upwork.",
  keywords: [
    "backend developer",
    "Symfony",
    "Node.js",
    "PHP",
    "freelance",
    "Madagascar",
    "Tahiana Lova",
  ],
  openGraph: {
    title: "Tahiana Lova — Backend Developer | Symfony & Node.js",
    description:
      "Ingénieur backend spécialisé en Symfony et Node.js, disponible pour des missions freelance internationales.",
    url: "https://portfolio-lova.vercel.app",
    siteName: "Portfolio Tahiana Lova",
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tahiana Lova — Backend Developer | Symfony & Node.js",
    description:
      "Ingénieur backend spécialisé en Symfony et Node.js, disponible pour des missions freelance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/ICONE.png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
