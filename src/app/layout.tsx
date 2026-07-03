import type { Metadata } from "next";
import { Space_Grotesk, Nunito } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AI 4 Youth Academy — Create. Build. Innovate.",
  description:
    "AI 4 Youth Academy empowers kids ages 6–18 to create games, apps, and businesses with AI. Coming soon to Jordan Ranch / Fulshear, Texas.",
  keywords: ["AI education", "youth academy", "coding for kids", "STEM", "AI camp"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${nunito.variable}`}>
      <body className="min-h-screen font-body antialiased bg-navy text-white">
        {children}
      </body>
    </html>
  );
}
