import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Google Auth Platform のブランディング登録用のページ群。サイト内のどこからもリンクせず、
// 検索エンジンにも載せない。sitemap にも含めないこと。
export const metadata: Metadata = {
  title: {
    default: "GmailBar",
    template: "%s | GmailBar",
  },
  description:
    "A macOS menu bar app that monitors unread mail across multiple Gmail accounts.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  // ルートの OGP / Twitter 設定はプロフィール用なので引き継がない
  openGraph: null,
  twitter: null,
};

const nav = [
  { label: "Home", href: "/gmailbar" },
  { label: "Privacy Policy", href: "/gmailbar/privacy" },
  { label: "Terms of Service", href: "/gmailbar/terms" },
] as const;

export default function GmailBarLayout({ children }: LayoutProps<"/gmailbar">) {
  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col gap-10 px-6 py-14 sm:px-10">
      <header className="flex flex-col gap-6">
        <Link
          href="/gmailbar"
          className="focus-visible:outline-accent flex items-center gap-4 self-start focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Image
            src="/gmailbar/icon.png"
            alt=""
            width={56}
            height={56}
            priority
            className="size-14"
          />
          <span className="font-display text-3xl font-extrabold tracking-[-0.02em]">
            GmailBar
          </span>
        </Link>
        <nav aria-label="GmailBar">
          <ul className="font-display flex flex-wrap gap-x-6 gap-y-2 text-sm tracking-wide">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted hover:text-accent focus-visible:outline-accent transition-[color] duration-300 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="bg-accent h-px w-20" />
      </header>

      <main className="flex flex-col gap-14">{children}</main>

      <footer className="font-display text-muted mt-auto text-xs tracking-wide">
        © 2026 Shouta Watanabe
      </footer>
    </div>
  );
}
