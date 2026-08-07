import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const outfitExtraBold = await readFile(
  join(process.cwd(), "src/app/fonts/Outfit-ExtraBold.woff"),
);

// 写真アバターは favicon サイズだと潰れるため、モノグラムを生成する。
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#17171a",
          color: "#f2f2f3",
          fontFamily: "Outfit",
          fontSize: 30,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          borderRadius: 14,
        }}
      >
        SW
      </div>
    ),
    {
      ...size,
      fonts: [
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
