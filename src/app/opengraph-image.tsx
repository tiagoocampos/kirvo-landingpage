import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { SITE_TITLE } from "@/lib/site"

export const alt = SITE_TITLE
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// ImageResponse (Satori) só lê ttf/otf/woff, por isso o .ttf ao lado do .woff2
// usado pelo next/font/local em layout.tsx (mesma fonte, formato diferente).
const keronige = readFile(join(process.cwd(), "src/assets/fonts/KeronigeRegular.ttf"))

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Keronige",
            fontSize: 140,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          KirvoAgenda
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontFamily: "sans-serif",
            fontSize: 32,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Agendamento online para barbearias
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Keronige", data: await keronige, weight: 400, style: "normal" }],
    }
  )
}
