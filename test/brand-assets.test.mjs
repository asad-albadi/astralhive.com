import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);

const requiredAssets = [
  'brand/logo.png',
  'brand/logos/astral-hive-monogram-black.png',
  'brand/logos/astral-hive-monogram-violet.png',
  'brand/logos/astral-hive-monogram-white.png',
  'brand/logos/astral-hive-monogram-gradient.png',
  'brand/logos/astral-hive-wordmark-navy.png',
  'brand/logos/astral-hive-wordmark-white.png',
  'brand/logos/astral-hive-monogram-black.svg',
  'brand/logos/astral-hive-monogram-violet.svg',
  'brand/logos/astral-hive-monogram-white.svg',
  'brand/logos/astral-hive-monogram-gradient.svg',
  'brand/logos/astral-hive-wordmark-navy.svg',
  'brand/logos/astral-hive-wordmark-white.svg',
  'brand/icons/favicon-16.png',
  'brand/icons/favicon-32.png',
  'brand/icons/apple-touch-icon.png',
  'brand/icons/icon-192.png',
  'brand/icons/icon-512.png',
  'brand/social/open-graph.png',
  'brand/social/open-graph-primary.png',
  'brand/social/open-graph-dark.png',
  'brand/social/open-graph-light.png',
  'brand/patterns/hex-outline.png',
  'brand/patterns/mini-monogram.png',
  'brand/patterns/diagonal-node.png',
  'brand/patterns/geometric-block.png',
  'brand/patterns/monogram-dark.png',
  'brand/patterns/monogram-reverse.png',
  'brand/patterns/banner-strip.png',
  'brand/social/profile.png',
  'brand/tokens/astral-hive.css',
  'brand/tokens/astral-hive.json',
  'brand/README.md',
];

test('brand kit includes the documented asset inventory', async () => {
  await Promise.all(requiredAssets.map((asset) => stat(new URL(asset, root))));
});

test('machine-readable tokens preserve the approved palette', async () => {
  const source = await readFile(new URL('brand/tokens/astral-hive.json', root), 'utf8');
  const tokens = JSON.parse(source);

  assert.equal(tokens.color.navy.value, '#0B1A3B');
  assert.equal(tokens.color.violet.value, '#8B5CF6');
  assert.equal(tokens.color.indigo.value, '#6366FF');
  assert.equal(tokens.color.lightGray.value, '#E5E7EB');
});

test('brand kit is explicit that the supplied logo is a raster source', async () => {
  const readme = await readFile(new URL('brand/README.md', root), 'utf8');
  assert.match(readme, /raster source/i);
});

test('wordmark exports use the approved lockup from the direction sheet', async () => {
  const script = await readFile(new URL('brand/scripts/build-assets.mjs', root), 'utf8');
  assert.match(script, /logo_direction\.png/);
});

test('social exports are composed from high-resolution pattern sources', async () => {
  const script = await readFile(new URL('brand/scripts/build-assets.mjs', root), 'utf8');
  const socialRenderer = script.slice(script.indexOf('function social'));

  assert.match(socialRenderer, /geometric-background-master/);
  assert.doesNotMatch(socialRenderer, /socialBoard/);
  assert.doesNotMatch(socialRenderer, /logos\/astral-hive-wordmark/);
});

test('banner strip preserves geometric proportions instead of force-stretching', async () => {
  const script = await readFile(new URL('brand/scripts/build-assets.mjs', root), 'utf8');
  assert.match(script, /1600x400\^/);
  assert.match(script, /-extent.*1600x400/);
});

test('SVG logo exports embed the approved board artwork instead of reconstructed paths', async () => {
  const assets = [
    'brand/logos/astral-hive-monogram-black.svg',
    'brand/logos/astral-hive-monogram-violet.svg',
    'brand/logos/astral-hive-monogram-white.svg',
    'brand/logos/astral-hive-monogram-gradient.svg',
  ];
  const sources = await Promise.all(assets.map((asset) => readFile(new URL(asset, root), 'utf8')));

  for (const source of sources) {
    assert.match(source, /href="data:image\/png;base64,/);
    assert.doesNotMatch(source, /<path|VTracer/);
  }
});

test('wordmark SVG exports embed the approved lockup instead of substituting its typography', async () => {
  const assets = ['brand/logos/astral-hive-wordmark-navy.svg', 'brand/logos/astral-hive-wordmark-white.svg'];
  const sources = await Promise.all(assets.map((asset) => readFile(new URL(asset, root), 'utf8')));

  for (const source of sources) {
    assert.match(source, /href="data:image\/png;base64,/);
    assert.doesNotMatch(source, /<text/);
  }
});
