import { readFile, writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const root = new URL('../', import.meta.url)
const logo = await readFile(new URL('logos/astral-hive-monogram-gradient.png', root))
const monogram = `data:image/png;base64,${logo.toString('base64')}`
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="390" viewBox="0 0 720 390" role="img" aria-labelledby="title description">
  <title id="title">Astral Hive SPC — الخلية النجمية ش.ش.و</title>
  <desc id="description">The Astral Hive monogram centered above the Arabic and English company names.</desc>
  <image href="${monogram}" x="288" y="28" width="144" height="158" preserveAspectRatio="xMidYMid meet" />
  <text x="360" y="268" text-anchor="middle" fill="#0B1A3B" font-family="Montserrat, Arial, sans-serif" font-size="48">
    <tspan font-weight="650">Astral</tspan><tspan dx="12" font-weight="350">Hive</tspan><tspan dx="12" font-size="34" font-weight="500" letter-spacing="1">SPC</tspan>
  </text>
  <text x="360" y="337" text-anchor="middle" direction="rtl" unicode-bidi="plaintext" fill="#0B1A3B" font-family="Noto Sans Arabic, Arial, sans-serif" font-size="43" font-weight="500">الخلية النجمية ش.ش.و</text>
</svg>
`

await writeFile(new URL('logos/astral-hive-bilingual-stacked.svg', root), svg)
await Promise.all([
  sharp(Buffer.from(svg)).flatten({ background: '#FFFFFF' }).png().toFile(new URL('logos/astral-hive-bilingual-stacked.png', root).pathname),
  sharp(Buffer.from(svg)).png().toFile(new URL('logos/astral-hive-bilingual-stacked-transparent.png', root).pathname),
])
console.log('Built the white-background and transparent stacked bilingual Astral Hive lockups.')
