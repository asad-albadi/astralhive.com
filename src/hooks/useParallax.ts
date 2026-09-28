import { useEffect } from 'react'

/** Move decorative layers only, once per animation frame and while on screen. */
export function useParallax() {
  useEffect(() => {
    const layers = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax]'),
    )
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const update = () => {
      frame = 0
      for (const layer of layers) {
        const rect = layer.getBoundingClientRect()
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue
        const progress =
          (window.innerHeight / 2 - rect.top - rect.height / 2) /
          (window.innerHeight + rect.height)
        const distance = Math.max(-24, Math.min(24, progress * 48))
        layer.style.setProperty('--parallax-y', `${distance.toFixed(2)}px`)
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const reset = () => {
      cancelAnimationFrame(frame)
      frame = 0
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      layers.forEach((layer) => layer.style.setProperty('--parallax-y', '0px'))
    }
    const configure = () => {
      reset()
      if (reducedMotion.matches) return
      window.addEventListener('scroll', schedule, { passive: true })
      window.addEventListener('resize', schedule)
      schedule()
    }

    configure()
    reducedMotion.addEventListener('change', configure)
    return () => {
      reset()
      reducedMotion.removeEventListener('change', configure)
    }
  }, [])
}
