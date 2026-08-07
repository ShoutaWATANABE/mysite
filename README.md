# mysite

[shoutawatanabe.info](https://shoutawatanabe.info) のソースコードです。

## 概要

1 ページ完結のプロフィールサイトです。氏名、プロフィール、外部リンクのみで構成します。

旧サイト（[portfolio](https://github.com/ShoutaWATANABE/portfolio) / Nuxt 2）を全面刷新したもので、works・skill・blog・contact の各ページは廃止しました。

## 技術構成

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 16（App Router） |
| 言語 | TypeScript |
| スタイル | Tailwind CSS v4 |
| ホスティング | Vercel |
| フォント | Outfit（欧文）/ Noto Sans JP（和文） |

## 必要条件

- Node.js 20 以上

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev    # 開発サーバーを起動する（http://localhost:3000）
npm run build  # 本番ビルドを生成する
npm run lint   # ESLint を実行する
```

## 実装上の注意点

### フォントの読み込み

Noto Sans JP は日本語グリフを `unicode-range` で分割配信します。`subsets` に `japanese` は存在せず、preload すると使わないチャンクまで取得するため、`preload: false` を指定しています。読み込みが完了するまでは `Hiragino Sans` などのシステムフォントにフォールバックします。

### OG 画像と favicon

`src/app/opengraph-image.tsx` と `src/app/icon.tsx` で `ImageResponse` を使い、ビルド時に生成します。

`ImageResponse` が対応するフォント形式は ttf・otf・woff のみで、woff2 は使えません。サイト本体と字面を揃えるため、Outfit の woff を `src/app/fonts/` に同梱しています。

日本語フォントは同梱していないため、OG 画像は欧文のみで構成します。

### 配色とテーマの切り替え

配色は `src/app/globals.css` の CSS 変数で定義します。アクセント色はダーク背景でのコントラストを確保するため、ライトとダークで別の値を指定しています。

既定では `prefers-color-scheme` に追従し、右上のボタンで切り替えた場合は `localStorage` の値を優先します。切り替え後の状態は `html` 要素の `data-theme` 属性で表します。

保存済みのテーマは `src/app/layout.tsx` の同期スクリプトで描画前に適用します。hydration を待つと配色が一瞬ちらつくためです。ボタンのアイコンも同じ理由で React の状態ではなく CSS で出し分けています。

## ライセンス

個人サイトのため、ソースコードの再利用は想定していません。
