import { IntlProvider } from "next-intl";
import Langue from "@/components/Langue";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Racing_Sans_One } from "next/font/google";

// Importation des polices via next/font
const inter = Inter({
  weight: ["100", "300", "400", "600", "900"], // Choisir les poids souhaités
  subsets: ["latin"],
  variable: "--font-inter",
});

const racingSansOne = Racing_Sans_One({
  weight: ["400"], // Choisir les poids souhaités
  subsets: ["latin"],
  variable: "--font-racing-sans-one",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tahiana Lova",
  description: "Portfolio of Tahiana Lova",
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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
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
