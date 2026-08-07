import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Noto Sans JP は日本語グリフを unicode-range で分割配信する。subsets に 'japanese' は
// 存在せず、preload すると使わないチャンクまで取得してしまうため preload は無効にする。
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: false,
  fallback: [
    "Hiragino Sans",
    "Hiragino Kaku Gothic ProN",
    "Meiryo",
    "sans-serif",
  ],
});

const siteName = "ShoutaWATANABE";
const siteUrl = "https://shoutawatanabe.info";
const description =
  "渡邉将大のプロフィールサイトです。Webサービスの開発・運用と iOS アプリ開発を行なっています。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteName,
    description,
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    site: "@_ShoutaWATANABE",
    creator: "@_ShoutaWATANABE",
    title: siteName,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${outfit.variable} ${notoSansJP.variable}`}>
      {/* ブラウザ拡張が body に属性を注入して hydration mismatch を起こすため抑制する */}
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
