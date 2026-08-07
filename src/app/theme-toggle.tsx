"use client";

/**
 * ライト / ダークの切り替えボタン。
 *
 * 選択は localStorage に保存し、未選択なら OS の設定に従う。表示中のアイコンは
 * globals.css 側で出し分けるため、このコンポーネントは状態を持たない。
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";

    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // プライベートブラウジングなどで保存できない場合は今回の切り替えのみ有効にする
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="配色テーマを切り替える"
      className="border-line text-muted hover:text-accent hover:border-accent focus-visible:outline-accent fixed top-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 sm:top-6 sm:right-6"
    >
      <svg
        className="icon-moon size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      <svg
        className="icon-sun size-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    </button>
  );
}
