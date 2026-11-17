import type { ReactNode } from "react";

export const contactEmail = "shouta.watanabe.work@gmail.com";
export const effectiveDate = { en: "November 17, 2026", ja: "2026年11月17日" };

// 英語版と日本語版を同じページに並べる。審査担当者が読む英語を正本とし、先に置く。
export function Bilingual({
  title,
  en,
  ja,
  updated = true,
}: {
  title: { en: string; ja: string };
  en: ReactNode;
  ja: ReactNode;
  updated?: boolean;
}) {
  return (
    <>
      <article lang="en" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
            {title.en}
          </h1>
          <p className="text-muted text-sm">
            {updated && <>Effective date: {effectiveDate.en} · </>}
            <a href="#ja" className="hover:text-accent underline underline-offset-4">
              日本語
            </a>
          </p>
        </div>
        <Prose>{en}</Prose>
      </article>

      <article
        id="ja"
        lang="ja"
        className="border-line text-jp flex scroll-mt-8 flex-col gap-6 border-t pt-14"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold sm:text-3xl">{title.ja}</h1>
          {updated && <p className="text-muted text-sm">施行日: {effectiveDate.ja}</p>}
        </div>
        <Prose>{ja}</Prose>
      </article>
    </>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="[&_a]:text-accent flex flex-col gap-4 leading-[1.85] [&_a]:break-all [&_a]:underline [&_a]:underline-offset-4 [&_code]:text-[0.9em] [&_code]:break-all [&_h2]:mt-6 [&_h2]:text-xl [&_h2]:font-bold [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6">
      {children}
    </div>
  );
}

export function Mail() {
  return <a href={`mailto:${contactEmail}`}>{contactEmail}</a>;
}
