"use client";

import { useEffect, useRef } from "react";

/** globals.css の :root に指定した変数の transition と揃える */
const TRANSITION_MS = 300;

/**
 * ライト / ダークの切り替えボタン。
 *
 * 選択は localStorage に保存し、未選択なら OS の設定に従う。表示中のアイコンと
 * 切り替え時のフェードはいずれも globals.css 側で処理するため、このコンポーネントは
 * 状態を持たない。
 */
// 枠線 (border-color) は --line の補間で色が変わるため、要素側では color だけを
// 遷移させる。両方に transition を掛けると二重に補間されてずれが出る。
const buttonClassName =
  "border-line text-muted hover:text-accent focus-visible:outline-accent fixed top-4 right-4 grid size-11 cursor-pointer place-items-center rounded-full border transition-[color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 sm:top-6 sm:right-6";

export function ThemeToggle() {
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const current =
      root.dataset.theme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    const next = current === "dark" ? "light" : "dark";

    // 切り替えの間だけ要素側の transition を止め、配色は変数の補間だけで
    // 変わるようにする。連打された場合は先に予約したタイマーを破棄する。
    root.classList.add("theme-switching");
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      root.classList.remove("theme-switching");
    }, TRANSITION_MS + 20);

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
      className={buttonClassName}
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
