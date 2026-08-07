import Image from "next/image";

const links = [
  { label: "GitHub", href: "https://github.com/ShoutaWATANABE" },
  { label: "X", href: "https://twitter.com/_ShoutaWATANABE" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100005684404318",
  },
  { label: "Qiita", href: "https://qiita.com/ShoutaWATANABE" },
];

// ビルド時に評価される。年が変わったら再デプロイで更新される。
const currentYear = new Date().getFullYear();

// 下線 (border-color) は --line の補間で色が変わるため、要素側では color だけを
// 遷移させる。両方に transition を掛けると二重に補間され、文字と下線の色が
// 変わるタイミングにずれが出る。
const linkClassName =
  "border-line hover:text-accent focus-visible:outline-accent group flex items-center justify-between border-b py-3.5 text-lg transition-[color] duration-300 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-3xl flex-col justify-center gap-8 px-6 py-14 sm:px-10">
      <header>
        <Image
          src="/avatar.png"
          alt="ShoutaWATANABE のプロフィール写真"
          width={56}
          height={56}
          priority
          className="size-14 rounded-full"
        />
        <h1 className="font-display mt-6 text-[clamp(2.5rem,9vw,5.5rem)] leading-[0.85] font-extrabold tracking-[-0.04em]">
          <span className="block">SHOUTA</span>
          <span className="block">WATANABE</span>
        </h1>
        <div className="bg-accent mt-6 h-px w-20" />
      </header>

      <div className="text-jp text-muted max-w-prose space-y-4 leading-[1.85]">
        <p>宮城県石巻市出身の1992年生まれ。趣味は野球観戦。</p>
        <p>
          学生時代にWeb制作を学び、大学卒業後は一般職として就職したが、2016年9月に社内異動でエンジニアの道へ。現在はWebサービスの開発・運用を中心に、iOSアプリの開発なども行なっている。
        </p>
        <p>
          社内エンジニアとしての幅広いニーズに応えた経験を生かし、社内システムの運用サポートなども行なっている。
        </p>
      </div>

      <nav aria-label="外部リンク">
        <ul className="border-line border-t">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="me noopener noreferrer"
                className={linkClassName}
              >
                <span className="font-display tracking-wide">
                  {link.label}
                  <span className="sr-only">（新しいタブで開く）</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-muted group-hover:text-accent transition-[color,transform] duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="font-display text-muted text-xs tracking-wide">
        © 2019–{currentYear} ShoutaWATANABE
      </footer>
    </main>
  );
}
