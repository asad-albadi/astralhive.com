import logoUrl from '../assets/astralhive_logo.svg'

/**
 * The real Astral Hive mark (three-hexagon "hive"). The source SVG is a flat
 * black glyph, so we render it as a CSS mask and fill it with the brand
 * gradient — letting it sit on any background and stay on-brand.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={className}
      role="img"
      aria-label="Astral Hive logo"
      style={{
        display: 'inline-block',
        background: 'var(--accent-grad)',
        WebkitMaskImage: `url(${logoUrl})`,
        maskImage: `url(${logoUrl})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  )
}
