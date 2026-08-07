import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "ShoutaWATANABE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// リクエストに依存しないためモジュールスコープで一度だけ読む。
// ImageResponse は ttf / otf / woff のみ対応（woff2 は不可）。
const fontsDir = join(process.cwd(), "src/app/fonts");
const outfitExtraBold = await readFile(join(fontsDir, "Outfit-ExtraBold.woff"));
const outfitRegular = await readFile(join(fontsDir, "Outfit-Regular.woff"));

// ImageResponse は日本語フォントを同梱していないため、OG 画像は欧文のみで構成する。
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#0f0f0f",
          color: "#fafafa",
          padding: 96,
          fontFamily: "Outfit",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 132,
            fontWeight: 800,
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
          }}
        >
          <span>SHOUTA</span>
          <span>WATANABE</span>
        </div>
        <div
          style={{
            display: "flex",
            width: 96,
            height: 4,
            background: "#6ba8e5",
            marginTop: 56,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 400,
            color: "#a1a1aa",
            marginTop: 36,
          }}
        >
          shoutawatanabe.info
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Outfit",
          data: outfitRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Outfit",
          data: outfitExtraBold,
          style: "normal",
          weight: 800,
        },
      ],
    },
  );
}
