import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Craft Works GENS | Craft Your Future",
    template: "%s | Craft Works GENS"
  },
  description: "Craft Works GENS（CWG）は、アナログな手仕事、デジタルクリエイティブ、スポーツマネジメントを融合させたクリエイティブ集団です。千葉県市原市を拠点に、新しい価値と感動を創り出します。",
  keywords: ["CWG", "Craft Works GENS", "ちゃとらAtelier GENS", "Create Web GENS", "GENS ICHIHARA", "市原市", "フットサル", "レザークラフト", "Webデザイン"],
  authors: [{ name: "Craft Works GENS" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://cwg-hp.vercel.app/",
    siteName: "Craft Works GENS",
    title: "Craft Works GENS | Craft Your Future",
    description: "手仕事からデジタル、スポーツまで。CWGは多角的なクリエイティブであなたの世界を広げます。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Craft Works GENS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft Works GENS | Craft Your Future",
    description: "手仕事からデジタル、スポーツまで。CWGは多角的なクリエイティブであなたの世界を広げます。",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          inter.variable,
          "antialiased min-h-screen flex flex-col"
        )}
      >
        {children}
      </body>
    </html>
  );
}
