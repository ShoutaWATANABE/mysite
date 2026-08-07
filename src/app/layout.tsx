import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeToggle } from "./theme-toggle";

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

// 保存済みのテーマを描画前に適用する。hydration を待つと一瞬ちらつくため同期実行する。
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}})();`;

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
    // data-theme は下の同期スクリプトがクライアントで付けるため、サーバー出力とは
    // 必ず差分が出る。html 要素自身の属性のみ hydration の照合対象から外す。
    <html
      lang="ja"
      className={`${outfit.variable} ${notoSansJP.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* ブラウザ拡張が body に属性を注入して hydration mismatch を起こすため抑制する */}
      <body className="font-sans" suppressHydrationWarning>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
