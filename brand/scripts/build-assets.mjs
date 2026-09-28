import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const root = new URL('../', import.meta.url);
const direction = new URL('logo_direction.png', root).pathname;
const assetBoard = new URL('brand_assets.png', root).pathname;
const patternBoard = new URL('brand_patterns.png', root).pathname;
const logoSource = new URL('logo.png', root).pathname;
const directories = ['logos', 'icons', 'patterns', 'social'];
await Promise.all(directories.map((directory) => mkdir(new URL(`${directory}/`, root), { recursive: true })));

const output = (path) => new URL(path, root).pathname;
const magick = (...args) => execFileSync('magick', args, { stdio: 'inherit' });
monogram();
wordmark();
await svgExports();
icon();
patterns();
social();

function wordmark() {
  magick(assetBoard, '-crop', '540x180+470+220', '+repage', '-fuzz', '20%', '-transparent', 'white', '-trim', '+repage', output('logos/astral-hive-wordmark-navy.png'));
  magick(output('logos/astral-hive-wordmark-navy.png'), '-alpha', 'extract', '-background', '#FFFFFF', '-alpha', 'shape', output('logos/astral-hive-wordmark-white.png'));
}

function monogram() {
  magick(assetBoard, '-crop', '350x290+55+180', '+repage', '-fuzz', '20%', '-transparent', 'white', '-trim', '+repage', output('logos/astral-hive-monogram-gradient.png'));
  for (const [name, color] of [['black', '#000000'], ['violet', '#8B5CF6'], ['white', '#FFFFFF']]) {
    magick(output('logos/astral-hive-monogram-gradient.png'), '-alpha', 'extract', '-background', color, '-alpha', 'shape', output(`logos/astral-hive-monogram-${name}.png`));
  }
}

async function svgExports() {
  const [black, violet, white, gradient, navyWordmark, whiteWordmark] = await Promise.all([
    readFile(output('logos/astral-hive-monogram-black.png')),
    readFile(output('logos/astral-hive-monogram-violet.png')),
    readFile(output('logos/astral-hive-monogram-white.png')),
    readFile(output('logos/astral-hive-monogram-gradient.png')),
    readFile(output('logos/astral-hive-wordmark-navy.png')),
    readFile(output('logos/astral-hive-wordmark-white.png')),
  ]);
  await Promise.all([
    writeFile(new URL('logos/astral-hive-monogram-black.svg', root), logoSvg(black, 246, 270)),
    writeFile(new URL('logos/astral-hive-monogram-violet.svg', root), logoSvg(violet, 246, 270)),
    writeFile(new URL('logos/astral-hive-monogram-white.svg', root), logoSvg(white, 246, 270)),
    writeFile(new URL('logos/astral-hive-monogram-gradient.svg', root), logoSvg(gradient, 246, 270)),
    writeFile(new URL('logos/astral-hive-wordmark-navy.svg', root), logoSvg(navyWordmark, 493, 148)),
    writeFile(new URL('logos/astral-hive-wordmark-white.svg', root), logoSvg(whiteWordmark, 493, 148)),
  ]);
}

function logoSvg(png, width, height) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Astral Hive logo"><image href="data:image/png;base64,${png.toString('base64')}" width="${width}" height="${height}"/></svg>`;
}

function icon() {
  magick('-size', '512x512', 'xc:#0B1A3B', '(', output('logos/astral-hive-monogram-violet.png'), '-resize', '368x368', ')', '-geometry', '+72+72', '-composite', output('icons/icon-512.png'));
  for (const [size, name] of [[16, 'favicon-16.png'], [32, 'favicon-32.png'], [180, 'apple-touch-icon.png'], [192, 'icon-192.png']]) {
    magick(output('icons/icon-512.png'), '-resize', `${size}x${size}`, output(`icons/${name}`));
  }
}

function patterns() {
  const hex = output('patterns/source-hex-outline.png');
  const diagonal = output('patterns/source-diagonal-node.png');
  const geometric = output('patterns/geometric-background-master.png');
  const navyMark = output('patterns/source-monogram-navy.png');
  const whiteMark = output('patterns/source-monogram-white.png');
  magick(hex, '-resize', '1920x1280!', output('patterns/hex-outline.png'));
  magick(diagonal, '-resize', '1920x1280!', output('patterns/diagonal-node.png'));
  magick(geometric, '-resize', '1920x1280!', output('patterns/geometric-block.png'));
  // The master is 3:2. Cover and crop it for this very wide format; never
  // force-resize it, as that bends the angular geometry.
  magick(geometric, '-resize', '1600x400^', '-gravity', 'center', '-extent', '1600x400', output('patterns/banner-strip.png'));
  magick(logoSource, '-alpha', 'extract', '-background', '#0B1A3B', '-alpha', 'shape', navyMark);
  magick(logoSource, '-alpha', 'extract', '-background', '#FFFFFF', '-alpha', 'shape', whiteMark);
  const darkTiles = Array.from({ length: 40 }, () => navyMark);
  const lightTiles = Array.from({ length: 40 }, () => whiteMark);
  magick('montage', ...darkTiles, '-tile', '8x5', '-geometry', '140x140+40+40', '-background', '#FFFFFF', output('patterns/mini-monogram.png'));
  magick('montage', ...darkTiles, '-tile', '8x5', '-geometry', '140x140+40+40', '-background', '#FFFFFF', output('patterns/monogram-dark.png'));
  magick('montage', ...lightTiles, '-tile', '8x5', '-geometry', '140x140+40+40', '-background', '#0B1A3B', output('patterns/monogram-reverse.png'));
}

function social() {
  const hex = output('patterns/source-hex-outline.png');
  const geometric = output('patterns/geometric-background-master.png');
  const gradientMark = output('patterns/source-monogram-gradient.png');
  const navyMark = output('patterns/source-monogram-navy.png');
  const whiteMark = output('patterns/source-monogram-white.png');
  magick('-size', '1254x1254', 'gradient:#6366FF-#8B5CF6', '(', logoSource, '-alpha', 'extract', ')', '-alpha', 'off', '-compose', 'CopyOpacity', '-composite', gradientMark);
  // Use the supplied high-resolution monogram source once per card. The
  // previous lockup crop already contained a logo, which caused a duplicate
  // mark and softened the result when composited.
  magick(hex, '-resize', '1200x630^', '-gravity', 'center', '-extent', '1200x630', '-gravity', 'northwest', '(', gradientMark, '-resize', '330x330', ')', '-geometry', '+435+150', '-composite', output('social/open-graph-primary.png'));
  magick(geometric, '-resize', '1200x630^', '-gravity', 'center', '-extent', '1200x630', '-gravity', 'northwest', '(', whiteMark, '-resize', '300x300', ')', '-geometry', '+120+165', '-composite', output('social/open-graph-dark.png'));
  magick(hex, '-resize', '1200x630^', '-gravity', 'center', '-extent', '1200x630', '-gravity', 'northwest', '(', navyMark, '-resize', '300x300', ')', '-geometry', '+120+165', '-composite', output('social/open-graph-light.png'));
  magick(output('social/open-graph-primary.png'), output('social/open-graph.png'));
  magick('-size', '1080x1080', 'xc:#0B1A3B', '(', gradientMark, '-resize', '560x560', ')', '-geometry', '+260+260', '-composite', output('social/profile.png'));
}
