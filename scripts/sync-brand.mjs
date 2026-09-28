import { copyFile, mkdir } from 'node:fs/promises'
import sharp from 'sharp'

// Web assets are derived only from the approved exports. Source artwork stays intact.
const root = new URL('../', import.meta.url)
const output = new URL('public/brand/', root)
await mkdir(output, { recursive: true })
const copies = {
  'icons/favicon-16.png': 'favicon-16x16.png',
  'icons/favicon-32.png': 'favicon-32x32.png',
  'icons/apple-touch-icon.png': 'apple-touch-icon.png',
  'icons/icon-192.png': 'android-chrome-192x192.png',
  'icons/icon-512.png': 'android-chrome-512x512.png',
  'social/open-graph-primary.png': 'og-image.png',
}
await Promise.all(
  Object.entries(copies).map(([source, target]) =>
    copyFile(
      new URL(`brand/${source}`, root),
      new URL(`public/${target}`, root),
    ),
  ),
)
await Promise.all([
  sharp(new URL('brand/patterns/source-diagonal-node.png', root).pathname)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(new URL('diagonal-node.webp', output).pathname),
  sharp(
    new URL('brand/patterns/geometric-background-master.png', root).pathname,
  )
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(new URL('geometric.webp', output).pathname),
  sharp(new URL('brand/patterns/source-hex-outline.png', root).pathname)
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(new URL('hex.webp', output).pathname),
])
console.log('Approved brand assets synced to public/.')
