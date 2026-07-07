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

const siteUrl = "https://aiyouthacademy.com";
const siteTitle = "AI Youth Academy | Learn AI. Create the Future.";
const siteDescription =
  "AI Youth Academy teaches students ages 6–18 how to build with Artificial Intelligence through coding, creativity, entrepreneurship, websites, games, apps, and real-world projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | AI Youth Academy",
  },
  description: siteDescription,
  keywords: [
    "AI Education",
    "Youth AI",
    "AI for Kids",
    "AI for Teens",
    "AI Classes Texas",
    "AI Camp",
    "Coding for Kids",
    "AI Learning",
    "AI Academy",
    "Fulshear",
    "Jordan Ranch",
    "Katy",
    "Brookshire",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "AI Youth Academy",
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
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
